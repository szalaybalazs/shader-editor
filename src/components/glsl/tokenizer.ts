import { languages } from 'monaco-editor';

export const tokenizer: { [key: string]: languages.IMonarchLanguageRule[] } = {
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
    ['(.+)?\\*/', 'comment.block', '@pop'],
    ['.*', 'comment.block'],
  ],
};
