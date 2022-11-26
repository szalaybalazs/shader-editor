import { Monaco } from '@monaco-editor/react';
import { types } from './types';
import { keywords } from './keywords';
import { languages } from 'monaco-editor';
import { functionKeys, functions, preventDuplicateFunctions } from './functions';

const directives = preventDuplicateFunctions([
  '#',
  '#define',
  '#undef',
  '#if',
  '#ifdef',
  '#ifndef',
  '#else',
  '#elif',
  '#endif',
  '#error',
  '#pragma',
  '#extension',
  '#version',
  '#line',
]);

const storage = preventDuplicateFunctions([
  'in',
  'out',
  'uniform',
  'layout',
  'attribute',
  'varying',
  'precision',
  'highp',
  'mediump',
  'lowp',
]);

const operators = [
  '*',
  '+',
  '-',
  '/',
  '~',
  '!',
  '%',
  '<<',
  '>>',
  '<',
  '>',
  '<=',
  '>=',
  '==',
  '!=',
  '&',
  '^',
  '|',
  '&&',
  '^^',
  '||',
  // selection ?:
  '=',
  '+=',
  '-=',
  '*=',
  '/=',
  '%=',
  '<<=',
  '>>=',
  '&=',
  '^=',
  '|=',
];

const builtin_vars = preventDuplicateFunctions([
  // language variables
  'gl_VertexID',
  'gl_InstanceID', // non-vulkan
  'gl_VertexIndex',
  'gl_InstanceIndex', // vulkan
  'gl_DrawID',
  'gl_BaseVertex',
  'gl_BaseInstance',
  'gl_Position',
  'gl_PointSize',
  'gl_ClipDistance',
  'gl_CullDistance', // perVertex

  // compatibility profile
  'gl_Color',
  'gl_SecondaryColor',
  'gl_Normal',
  'gl_Vertex',
  'gl_MultiTexCoord0',
  'gl_MultiTexCoord1',
  'gl_MultiTexCoord2',
  'gl_MultiTexCoord3',
  'gl_MultiTexCoord4',
  'gl_MultiTexCoord5',
  'gl_MultiTexCoord6',
  'gl_MultiTexCoord7',
  'gl_FogCoord',
]);

const constants = preventDuplicateFunctions([
  'gl_MaxVertexAttribs',
  'gl_MaxVertexUniformVectors',
  'gl_MaxVertexUniformComponents',
  'gl_MaxVertexOutputComponents',
  // TODO: add more constants from the 7.3 section of GLSLangSpec.4.60.pdf
]);

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

    keywords,
    // preprocessor directives
    directives,
    // preprocessor macros
    macros: ['__LINE__', '__FILE__', '__VERSION__'],

    // storage modifiers
    storage,

    types,

    operators,

    builtin_vars,

    constants,

    intsuffix: '[uU]?',
    floatsuffix: '([fF]|(fl|FL))?',

    tokenizer: {
      root: [
        [/\/\/.*$/, 'comment.line'],
        [/\/\*/, 'comment.block', '@comment'],

        [
          /#[a-z]*/,
          {
            cases: {
              '@directives': 'keyword.control.preprocessor',
              '@default': 'invalid',
            },
          },
        ],

        ['GL_ES', 'meta.preprocessor'],
        [
          /__[A-Z_]+__/,
          {
            cases: {
              '@macros': 'meta.preprocessor',
              '@default': 'invalid',
            },
          },
        ],

        [/[{}()\[\]]/, '@brackets'],

        [/(true|false)/, 'constant'],

        [
          /[\=\+\-\*\/\>\<\&\|\%\!\^]+/,
          {
            cases: {
              '@operators': 'operator',
              '@default': 'invalid',
            },
          },
        ],

        [/[a-zA-Z][a-zA-Z0-9_]*(?=\()/, 'entity.name.function'],

        [
          /[a-zA-Z][a-zA-Z0-9_]*/,
          {
            cases: {
              '@storage': 'storage.type',
              '@types': 'entity.name.type',
              '@builtin_vars': 'keyword',
              '@default': 'variable.name',
            },
          },
        ],

        [/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
        [/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/, 'number.float'],

        [/0[xX][0-9a-fA-F](@intsuffix)/, 'number.hex'],
        [/0[0-7](@intsuffix)/, 'number.octal'],
        [/\d+(@intsuffix)/, 'number'],

        [/[;,.]/, 'delimiter'],
      ],

      comment: [
        ['\\*/', 'comment.block', '@pop'],
        ['.*', 'comment.block'],
      ],
    },
  });

  const generateSuggestions = (arr: string[], type: languages.CompletionItemKind) => {
    return arr.map((k) => ({
      label: k,
      kind: type,
      insertText: k,
      range: undefined as any,
    }));
  };

  monaco.languages.registerCompletionItemProvider(langId, {
    provideCompletionItems(model, position, context, token) {
      const suggestions = [
        generateSuggestions(keywords, monaco.languages.CompletionItemKind.Keyword),
        generateSuggestions(operators, monaco.languages.CompletionItemKind.Operator),
        generateSuggestions(types, monaco.languages.CompletionItemKind.TypeParameter),
        generateSuggestions(constants, monaco.languages.CompletionItemKind.Constant),
        generateSuggestions(storage, monaco.languages.CompletionItemKind.Struct),
        generateSuggestions(builtin_vars, monaco.languages.CompletionItemKind.Constant),
        generateSuggestions(directives, monaco.languages.CompletionItemKind.Keyword),
        Object.entries(functions).map(([key, value]) => {
          return {
            label: {
              label: key,
              detail: ` ${value.name}`,
              // description: ` ${value.name}`,
              documentation: value.descriptionMD,
            },
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: key,
            range: undefined,
            documentation: value.descriptionMD,
          };
        }),
      ];

      return { suggestions: suggestions.flat() };
    },
  });

  monaco.languages.registerSignatureHelpProvider(langId, {
    signatureHelpTriggerCharacters: ['('],
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
};
