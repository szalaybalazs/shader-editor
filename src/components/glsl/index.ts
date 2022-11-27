import { Monaco } from '@monaco-editor/react';
import { IRange, languages } from 'monaco-editor';
import { builtinKeywords } from './keywords/builtin';
import { constantKeywords } from './keywords/constants';
import { directiveKeywords } from './keywords/directives';
import { functions } from './keywords/functions';
import { regularKeywords } from './keywords/keywords';
import { operatorKeywords } from './keywords/operators';
import { storageKeywords } from './keywords/storage';
import { typeKeywords } from './keywords/types';
import { tokenizer } from './tokenizer';
import { format } from 'prettier';
import * as glslparser from 'prettier-plugin-glsl';

// todo: figure out a better swizzle logic
const swizzle = {
  2: ['0', '1', '01', '10', '00', '11'],
  3: [
    '0',
    '1',
    '2',
    '00',
    '01',
    '02',
    '10',
    '11',
    '12',
    '20',
    '21',
    '22',
    '000',
    '001',
    '010',
    '100',
    '101',
    '111',
    '000',
    '002',
    '020',
    '200',
    '202',
    '222',
    '222',
    '221',
    '212',
    '122',
    '121',
    '111',
    '111',
    '112',
    '121',
    '211',
    '212',
    '222',
  ],
};
const formatShader = (code: string) => {
  return format(code, { parser: 'glsl-parser', plugins: [glslparser], printWidth: 120 });
};
export const createLanguage = (monaco: Monaco) => {
  const languages = monaco.languages;

  const langId = 'glsl';

  languages.register({
    id: langId,
    extensions: ['.frag', '.vert'],
  });

  languages.setLanguageConfiguration(langId, {
    comments: {
      lineComment: '//',
      blockComment: ['/*', '*/'],
    },
    brackets: [
      ['{', '}'],
      ['[', ']'],
      ['(', ')'],
    ],
    autoClosingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '"', close: '"', notIn: ['string'] },
      { open: "'", close: "'", notIn: ['string'] },
    ],
    surroundingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
    ],
  });

  monaco.languages.registerDocumentFormattingEditProvider(langId, {
    provideDocumentFormattingEdits(model, options) {
      var formatted = formatShader(model.getValue());
      return [
        {
          range: model.getFullModelRange(),
          text: formatted,
        },
      ];
    },
  });

  languages.setMonarchTokensProvider(langId, {
    tokenPostfix: '.glsl',
    defaultToken: 'invalid',

    keywords: regularKeywords,

    // preprocessor directives
    directives: directiveKeywords,
    // preprocessor macros
    macros: ['__LINE__', '__FILE__', '__VERSION__'],

    // storage modifiers
    storage: storageKeywords,
    types: typeKeywords,
    operators: operatorKeywords,
    builtin_vars: builtinKeywords,
    constants: constantKeywords,

    intsuffix: '[uU]?',
    floatsuffix: '([fF]|(fl|FL))?',

    tokenizer,
  });

  const generateSuggestions = (arr: string[], type: languages.CompletionItemKind, range: IRange) => {
    return arr.map((k) => ({
      label: k,
      kind: type,
      insertText: k,
      range,
    }));
  };

  monaco.languages.registerCompletionItemProvider(langId, {
    provideCompletionItems(model, position, context, token) {
      const word = model.getWordUntilPosition(position);
      const code = model.getValueInRange({
        startColumn: 0,
        startLineNumber: 0,
        endColumn: position.column,
        endLineNumber: position.lineNumber,
      });

      const regexp = new RegExp(`(${typeKeywords.map((t) => `${t}\\s+`).join('|')})(.+);`, 'gm');

      // @ts-ignore
      const matches = [...code.matchAll(regexp)];

      const variables = matches
        .map((match) => {
          const type = match[1];
          const def = match[2].replace(/\(.+\)/gm, '');
          const defs = def.split(',').map((d) => d.split('=')[0].trim());
          return defs.map((name) => ({ name, type }));
        })
        .flat();

      // const code = model.getValue();

      // const ast = parser.parse(code);
      // const vars = parse(code);
      // console.log(vars);
      // const variables = ast.scopes
      //   .map((scope) => {
      //     const vars = Object.keys(scope.bindings);
      //     return vars.map((key) => ({
      //       name: key,
      //       type: (scope as any).bindings[key].initializer?.initializer?.identifier, //.initializer.initializer.identifier.specifier.token,
      //     }));
      //   })
      //   .flat();

      // console.log(ast);
      // console.log(variables);

      const variable = variables.find((v) => v.name === word.word);
      const range: IRange = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn,
      };

      const suggestions = [
        variables.map(({ type, name }): languages.CompletionItem => {
          return {
            label: {
              label: name,
              description: ` ${type}`,
            },
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: name,
            range,
          };
        }),
        generateSuggestions(regularKeywords, monaco.languages.CompletionItemKind.Keyword, range),
        generateSuggestions(operatorKeywords, monaco.languages.CompletionItemKind.Operator, range),
        generateSuggestions(typeKeywords, monaco.languages.CompletionItemKind.TypeParameter, range),
        generateSuggestions(constantKeywords, monaco.languages.CompletionItemKind.Constant, range),
        generateSuggestions(storageKeywords, monaco.languages.CompletionItemKind.Struct, range),
        generateSuggestions(builtinKeywords, monaco.languages.CompletionItemKind.Constant, range),
        generateSuggestions(directiveKeywords, monaco.languages.CompletionItemKind.Keyword, range),
        Object.entries(functions).map(([key, value]): languages.CompletionItem => {
          return {
            label: {
              label: key,
              description: ` ${value.declaration}`,
            },
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: key,
            range,
            documentation: { value: `# ${key}\n${value.descriptionMD}`, isTrusted: true },
          };
        }),
      ];

      return { suggestions: suggestions.flat() };
    },
  });

  monaco.languages.registerCompletionItemProvider(langId, {
    triggerCharacters: ['.'],
    provideCompletionItems(model, position, token, context) {
      const word = model.getWordUntilPosition(position);
      const code = model.getValueInRange({
        startColumn: 0,
        startLineNumber: 0,
        endColumn: position.column,
        endLineNumber: position.lineNumber,
      });

      const regexp = new RegExp(`(${typeKeywords.map((t) => `${t}\\s+`).join('|')})(.+);`, 'gm');

      // @ts-ignore
      const matches = [...code.matchAll(regexp)];

      const variables = matches
        .map((match) => {
          const type = match[1];
          const def = match[2].replace(/\(.+\)/gm, '');
          const defs = def.split(',').map((d) => d.split('=')[0].trim());
          return defs.map((name) => ({ name, type }));
        })
        .flat();
      const lastIdentifier = code.trim().replace(/.$/, '').split(/ |\n/).reverse()[0];

      const variable = variables.find((v) => v.name === lastIdentifier);
      const range: IRange = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn,
      };

      // todo: better field handling

      const suggestions = [];
      console.log(variable);
      if (variable?.type?.startsWith('vec')) {
        const keys = ['xyzw', 'rgba', 'stpq'];
        const num = Number(variable.type.replace('vec', ''));
        const defs = Array.from(new Set(swizzle[num]));
        if (defs) {
          defs.forEach((def: string) => {
            const indices = def.split('');
            keys.forEach((key) => {
              const newKey = indices.map((index) => key[index]).join('');
              suggestions.push({
                label: {
                  label: newKey,
                  description: ` ${newKey}`,
                },
                kind: monaco.languages.CompletionItemKind.Value,
                insertText: newKey,
                range,
              });
            });
          });
        }
      }

      return { suggestions };
    },
  });

  monaco.languages.registerSignatureHelpProvider(langId, {
    // signatureHelpTriggerCharacters: ['('],
    provideSignatureHelp(model, position, token, context) {
      const textUntilPosition = model.getValueInRange({
        startLineNumber: position.lineNumber,
        startColumn: 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column,
      });

      const lastWord = textUntilPosition.split(' ').reverse()[0].replace('(', '');
      const func = functions[lastWord];

      return {
        value: {
          signatures: [
            {
              label: func.name,
              documentation: {
                value: func.descriptionMD,
                isTrusted: true,
                supportThemeIcons: true,
                supportHtml: true,
              },
              parameters: func.params.map((p) => ({ label: p[0], documentation: p[1] })),
            },
          ],
          dispose: () => {},
          activeSignature: 0,
          activeParameter: 0,
        },
        dispose: () => {},
      };
    },
  });

  monaco.languages.registerHoverProvider(langId, {
    provideHover(model, position, token) {
      const word = model.getWordAtPosition(position);
      const range: IRange = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn,
      };

      const func = functions[word.word];

      if (!func) return { range, contents: [] };

      return {
        range,
        contents: [
          // { value: `**${word.word}**`, isTrusted: true },
          { value: '```glsl\n' + func.declaration + '\n```', isTrusted: true, supportHtml: true },
          { value: func.descriptionMD, isTrusted: true },
        ],
      };
    },
  });
};
