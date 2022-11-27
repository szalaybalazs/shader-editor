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
      const range: IRange = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn,
      };
      const suggestions = [
        generateSuggestions(regularKeywords, monaco.languages.CompletionItemKind.Keyword, range),
        generateSuggestions(operatorKeywords, monaco.languages.CompletionItemKind.Operator, range),
        generateSuggestions(typeKeywords, monaco.languages.CompletionItemKind.TypeParameter, range),
        generateSuggestions(constantKeywords, monaco.languages.CompletionItemKind.Constant, range),
        generateSuggestions(storageKeywords, monaco.languages.CompletionItemKind.Struct, range),
        generateSuggestions(builtinKeywords, monaco.languages.CompletionItemKind.Constant, range),
        generateSuggestions(directiveKeywords, monaco.languages.CompletionItemKind.Keyword, range),
        Object.entries(functions).map(([key, value]) => {
          return {
            label: {
              label: key,
              detail: ` ${value.name}`,
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

      return {
        range,
        contents: func ? [{ value: func.descriptionMD, isTrusted: true }] : [],
      };
    },
  });
};
