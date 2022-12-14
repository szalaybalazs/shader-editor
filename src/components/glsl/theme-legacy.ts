import { Monaco } from '@monaco-editor/react';
import { editor } from 'monaco-editor';

// const themeData: editor.IStandaloneThemeData = {
//   base: 'vs-dark',
//   colors: {
//     'activityBar.background': '#1D252C',
//     'activityBar.border': '#333F4A',
//     'activityBar.dropBackground': '#333F4A',
//     'activityBar.foreground': '#fff',
//     'activityBarBadge.background': '#11a5ff',
//     'activityBarBadge.foreground': '#000',
//     'badge.background': '#11a5ff',
//     'badge.foreground': '#000',
//     'button.background': '#1D252C',
//     'button.foreground': '#fff',
//     'button.hoverBackground': '#11a5ff',
//     contrastActiveBorder: null,
//     contrastBorder: '#ffffff00',
//     'debugExceptionWidget.background': '#1D252C',
//     'debugExceptionWidget.border': '#aaa',
//     'debugToolBar.background': '#1D252C',
//     descriptionForeground: '#aaa',
//     'diffEditor.insertedTextBackground': '#3ad90011',
//     'diffEditor.insertedTextBorder': '#3ad90055',
//     'diffEditor.removedTextBackground': '#ee3a4311',
//     'diffEditor.removedTextBorder': '#ee3a4355',
//     'dropdown.background': '#1D252C',
//     'dropdown.border': '#15232d',
//     'dropdown.foreground': '#fff',
//     'editor.background': '#1D252C',
//     'editor.foreground': '#B7C5D3',
//     'editor.findMatchBackground': '#b7c5d380',
//     'editor.findMatchHighlightBackground': '#b7c5d330',
//     'editor.findRangeHighlightBackground': '#243E51',
//     'editor.hoverHighlightBackground': '#313a42',
//     'editor.inactiveSelectionBackground': '#313a42',
//     'editor.lineHighlightBackground': '#28313a',
//     'editor.lineHighlightBorder': '#28313a',
//     'editor.rangeHighlightBackground': '#28313a',
//     'editor.selectionBackground': '#313a42',
//     'editor.selectionHighlightBackground': '#28323a',
//     'editor.wordHighlightStrongBackground': '#41505e',
//     'editor.wordHighlightBackground': '#313a42',
//     'editorBracketMatch.background': '#3d454d',
//     'editorBracketMatch.border': '#68A1F0',
//     'editorCodeLens.foreground': '#aaa',
//     // "editorCursor.foreground": "#11a5ff",
//     'editorCursor.foreground': '#008cff',
//     'editorError.border': '#333F4A',
//     'editorError.foreground': '#e27e8d',
//     'editorGutter.background': '#1D252C',
//     'editorGutter.addedBackground': '#8bd49c',
//     'editorGutter.deletedBackground': '#e27e8d',
//     'editorGutter.modifiedBackground': '#26506D',
//     'editorGroup.background': '#1D252C',
//     'editorGroup.border': '#1D252C',
//     'editorGroup.dropBackground': '#333F4A',
//     'editorGroupHeader.noTabsBackground': '#1D252C',
//     'editorGroupHeader.tabsBackground': '#1D252C',
//     'editorGroupHeader.tabsBorder': '#15232d',
//     'editorHoverWidget.background': '#15232d',
//     'editorHoverWidget.border': '#333F4A',
//     'editorIndentGuide.background': '#41505E',
//     'editorLineNumber.foreground': '#41505E',
//     'editorLink.activeForeground': '#aaa',
//     'editorMarkerNavigation.background': '#1D252C',
//     'editorMarkerNavigationError.background': '#d95468',
//     'editorMarkerNavigationWarning.background': '#f9b97f',
//     'editorOverviewRuler.border': '#333F4A',
//     'editorOverviewRuler.commonContentForeground': '#efe99455',
//     'editorOverviewRuler.currentContentForeground': '#ee3a4355',
//     'editorOverviewRuler.incomingContentForeground': '#3ad90055',
//     'editorRuler.foreground': '#1F4662',
//     'editorSuggestWidget.background': '#222A31',
//     'editorSuggestWidget.border': '#15232d',
//     'editorSuggestWidget.foreground': '#D1DFED',
//     'editorSuggestWidget.highlightForeground': '#11a5ff',
//     'editorSuggestWidget.selectedBackground': '#333F4A',
//     'editorWarning.border': '#ffffff00',
//     'editorWarning.foreground': '#efe994',
//     'editorWhitespace.foreground': '#ffffff1a',
//     'editorWidget.background': '#15232d',
//     'editorWidget.border': '#333F4A',
//     errorForeground: '#e27e8d',
//     'extensionButton.prominentBackground': '#70c1f3',
//     'extensionButton.prominentForeground': '#000',
//     'extensionButton.prominentHoverBackground': '#11a5ff',
//     focusBorder: '#333F4A',
//     foreground: '#aaa',
//     'input.background': '#1D252C',
//     'input.border': '#333F4A',
//     'input.foreground': '#b7c5d3',
//     'input.placeholderForeground': '#aaa',
//     'inputOption.activeBorder': '#333F4A',
//     'inputValidation.errorBackground': '#e27e8d',
//     'inputValidation.errorBorder': '#d95468',
//     'inputValidation.infoBackground': '#5ec4ff',
//     'inputValidation.infoBorder': '#539afc',
//     'inputValidation.warningBackground': '#efe994',
//     'inputValidation.warningBorder': '#f9b97f',
//     'list.activeSelectionBackground': '#1D252C',
//     'list.activeSelectionForeground': '#aaa',
//     'list.dropBackground': '#333F4A',
//     'list.focusBackground': '#333F4A',
//     'list.focusForeground': '#aaa',
//     'list.highlightForeground': '#11a5ff',
//     'list.hoverBackground': '#1D252C',
//     'list.hoverForeground': '#aaa',
//     'list.inactiveSelectionBackground': '#333F4A',
//     'list.inactiveSelectionForeground': '#aaa',
//     'merge.border': '#ffffff00',
//     'merge.commonContentBackground': '#ffffff00',
//     'merge.commonHeaderBackground': '#ffffff00',
//     'merge.currentContentBackground': '#ffffff00',
//     'merge.currentHeaderBackground': '#ffffff00',
//     'merge.incomingContentBackground': '#ffffff00',
//     'merge.incomingHeaderBackground': '#ffffff00',
//     'notification.background': '#efe994',
//     'notification.buttonBackground': '#5ec4ff',
//     'notification.buttonForeground': '#fff',
//     'notification.buttonHoverBackground': '#11a5ff',
//     'notification.errorBackground': '#b62d65',
//     'notification.errorForeground': '#fff',
//     'notification.foreground': '#000',
//     'notification.infoBackground': '#5ec4ff',
//     'notification.infoForeground': '#fff',
//     'notification.warningBackground': '#11a5ff',
//     'notification.warningForeground': '#000',
//     'panel.background': '#171d23',
//     'panel.border': '#171d23',
//     'panelTitle.activeBorder': '#41505E',
//     'panelTitle.activeForeground': '#41505E',
//     'panelTitle.inactiveForeground': '#aaa',
//     'peekView.border': '#333F4A',
//     'peekViewEditor.background': '#1D252C',
//     'peekViewEditor.matchHighlightBackground': '#15232d',
//     'peekViewEditorGutter.background': '#333F4A',
//     'peekViewResult.background': '#15232d',
//     'peekViewResult.fileForeground': '#aaa',
//     'peekViewResult.lineForeground': '#fff',
//     'peekViewResult.matchHighlightBackground': '#333F4A',
//     'peekViewResult.selectionBackground': '#333F4A',
//     'peekViewResult.selectionForeground': '#fff',
//     'peekViewTitle.background': '#15232d',
//     'peekViewTitleDescription.foreground': '#aaa',
//     'peekViewTitleLabel.foreground': '#008b94',
//     'pickerGroup.border': '#333F4A',
//     'pickerGroup.foreground': '#aaa',
//     'progressBar.background': '#008b94',
//     'scrollbar.shadow': '#00000000',
//     'scrollbarSlider.activeBackground': '#333F4A',
//     'scrollbarSlider.background': '#41505E',
//     'scrollbarSlider.hoverBackground': '#41505E',
//     'selection.background': '#027dff',
//     'sideBar.background': '#171d23',
//     'sideBar.border': '#1D252C',
//     'sideBar.foreground': '#aaa',
//     'sideBarSectionHeader.background': '#1D252C',
//     'sideBarSectionHeader.foreground': '#aaaaaa',
//     'sideBarTitle.foreground': '#aaaaaa',
//     'statusBar.background': '#171d23',
//     'statusBar.border': '#1D252C',
//     'statusBar.debuggingBackground': '#171d23',
//     'statusBar.debuggingForeground': '#333F4A',
//     'statusBar.foreground': '#aaa',
//     'statusBar.noFolderBackground': '#171d23',
//     'statusBar.noFolderForeground': '#aaa',
//     'statusBarItem.activeBackground': '#5ec4ff',
//     'statusBarItem.hoverBackground': '#333F4A',
//     'statusBarItem.prominentBackground': '#171d23',
//     'statusBarItem.prominentHoverBackground': '#333F4A',
//     'tab.activeBackground': '#1D252C',
//     'tab.activeForeground': '#fff',
//     'tab.border': '#171d23',
//     'tab.activeBorder': '#1D252C',
//     'tab.inactiveBackground': '#171d23',
//     'tab.inactiveForeground': '#aaa',
//     'tab.unfocusedActiveForeground': '#aaa',
//     'tab.unfocusedInactiveForeground': '#aaa',
//     'terminal.ansiBlack': '#505050',
//     'terminal.ansiRed': '#FF5370',
//     'terminal.ansiGreen': '#0cfa83',
//     'terminal.ansiYellow': '#ff8308',
//     'terminal.ansiBlue': '#1e8eff',
//     'terminal.ansiMagenta': '#8e37ff',
//     'terminal.ansiCyan': '#03c9dd',
//     'terminal.ansiWhite': '#d0d0d0',
//     'terminal.ansiBrightBlack': '#6a6a6a',
//     'terminal.ansiBrightRed': '#ff869a',
//     'terminal.ansiBrightGreen': '#3efb9d',
//     'terminal.ansiBrightYellow': '#ffb66e',
//     'terminal.ansiBrightBlue': '#84c1ff',
//     'terminal.ansiBrightMagenta': '#ab6aff',
//     'terminal.ansiBrightCyan': '#17e7fc',
//     'terminal.ansiBrightWhite': '#ffffff',
//     'terminal.background': '#171d23',
//     'terminal.foreground': '#b4e1fd',
//     'terminalCursor.background': '#0883ff',
//     'terminalCursor.foreground': '#0883ff',
//     'textBlockQuote.background': '#171d23',
//     'textBlockQuote.border': '#171d23',
//     'textCodeBlock.background': '#171d23',
//     'textLink.activeForeground': '#718ca1',
//     'textLink.foreground': '#718ca1',
//     'textPreformat.foreground': '#1D252C',
//     'textSeparator.foreground': '#1D252C',
//     'titleBar.activeBackground': '#171d23',
//     'titleBar.activeForeground': '#ffffff',
//     'titleBar.inactiveBackground': '#1D252C',
//     'titleBar.inactiveForeground': '#ffffff33',
//     'walkThrough.embeddedEditorBackground': '#1D252C',
//     'welcomePage.buttonBackground': '#1D252C',
//     'welcomePage.buttonHoverBackground': '#333F4A',
//     'widget.shadow': '#00000026',
//   },
//   rules: [],
//   // tokenColors: [
//   //   {
//   //     name: 'regexp constant character-class',
//   //     scope: 'constant.other.character-class.regexp',
//   //     settings: {
//   //       foreground: '#e06c75ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'regexp operator.quantifier',
//   //     scope: 'keyword.operator.quantifier.regexp',
//   //     settings: {
//   //       foreground: '#d19a66ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'punctuation.definition',
//   //     scope: 'punctuation.definition.string.begin,punctuation.definition.string.end',
//   //     settings: {
//   //       foreground: '#69dd7a',
//   //     },
//   //   },
//   //   {
//   //     name: 'Text',
//   //     scope: 'variable.parameter.function',
//   //     settings: {
//   //       foreground: '#A6B2C0',
//   //     },
//   //   },
//   //   {
//   //     name: 'Comments',
//   //     scope: 'comment, punctuation.definition.comment',
//   //     settings: {
//   //       foreground: '#5C6370',
//   //       fontStyle: 'italic',
//   //     },
//   //   },
//   //   {
//   //     name: 'Comment Markup Link',
//   //     scope: 'comment markup.link',
//   //     settings: {
//   //       foreground: '#5C6370',
//   //     },
//   //   },
//   //   {
//   //     name: 'markup diff',
//   //     scope: 'markup.changed.diff',
//   //     settings: {
//   //       foreground: '#e0c285',
//   //     },
//   //   },
//   //   {
//   //     name: 'diff',
//   //     scope: 'meta.diff.header.from-file,punctuation.definition.from-file.diff',
//   //     settings: {
//   //       foreground: '#569cd6',
//   //     },
//   //   },
//   //   {
//   //     name: 'inserted.diff',
//   //     scope: 'markup.inserted.diff',
//   //     settings: {
//   //       foreground: '#69dd7a',
//   //     },
//   //   },
//   //   {
//   //     name: 'deleted.diff',
//   //     scope: 'markup.deleted.diff',
//   //     settings: {
//   //       foreground: '#f76693',
//   //     },
//   //   },
//   //   {
//   //     name: 'c++ function',
//   //     scope: 'meta.function.c',
//   //     settings: {
//   //       foreground: '#f76693',
//   //     },
//   //   },
//   //   {
//   //     name: 'c++ control',
//   //     scope: 'keyword.control.cpp',
//   //     settings: {
//   //       foreground: '#f6d47d',
//   //     },
//   //   },
//   //   {
//   //     name: 'c++ block',
//   //     scope:
//   //       'punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c',
//   //     settings: {
//   //       foreground: '#b7c5d3ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'js/ts punctuation separator key-value',
//   //     scope: 'punctuation.separator.key-value',
//   //     settings: {
//   //       foreground: '#bbbbbb',
//   //     },
//   //   },
//   //   {
//   //     name: 'js/ts italic',
//   //     scope:
//   //       'entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super',
//   //     settings: {
//   //       // "fontStyle": "italic"
//   //     },
//   //   },
//   //   {
//   //     name: 'js/ts import keyword',
//   //     scope: 'keyword.operator.expression.import',
//   //     settings: {
//   //       foreground: '#4695ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'math js/ts',
//   //     scope: 'support.constant.math',
//   //     settings: {
//   //       foreground: '#f6d47d',
//   //     },
//   //   },
//   //   {
//   //     name: 'math property js/ts',
//   //     scope: 'support.constant.property.math',
//   //     settings: {
//   //       foreground: '#d19a66',
//   //     },
//   //   },
//   //   {
//   //     name: 'js/ts variable.other.constant',
//   //     scope: 'variable.other.constant',
//   //     settings: {
//   //       // "foreground": "#f6d47d"
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'java modifier.import',
//   //     scope: 'storage.type.annotation.java',
//   //     settings: {
//   //       foreground: '#f6d47dff',
//   //     },
//   //   },
//   //   {
//   //     name: 'java modifier.import',
//   //     scope: 'source.java',
//   //     settings: {
//   //       foreground: '#f76693',
//   //     },
//   //   },
//   //   {
//   //     name: 'java modifier.import',
//   //     scope:
//   //       'punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,storage.type.generic.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,meta.method.body.java',
//   //     settings: {
//   //       foreground: '#b7c5d3ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'java modifier.import',
//   //     scope: 'meta.method.java',
//   //     settings: {
//   //       foreground: '#4695ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'java modifier.import',
//   //     scope: 'storage.modifier.import.java,storage.type.java',
//   //     settings: {
//   //       foreground: '#f6d47d',
//   //     },
//   //   },
//   //   {
//   //     name: 'java variable.name',
//   //     scope: 'meta.definition.variable.name.java',
//   //     settings: {
//   //       foreground: '#f76693',
//   //     },
//   //   },
//   //   {
//   //     name: 'operator logical',
//   //     scope: 'keyword.operator.logical',
//   //     settings: {
//   //       foreground: '#2cc7da',
//   //     },
//   //   },
//   //   {
//   //     name: 'operator bitwise',
//   //     scope: 'keyword.operator.bitwise',
//   //     settings: {
//   //       foreground: '#2cc7da',
//   //     },
//   //   },
//   //   {
//   //     name: 'support.constant.property-value.scss',
//   //     scope: 'support.constant.property-value.scss,support.constant.property-value.css',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'css color standard name',
//   //     scope: 'support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'css comma',
//   //     scope: 'punctuation.separator.list.comma.css',
//   //     settings: {
//   //       foreground: '#b9c0ca',
//   //     },
//   //   },
//   //   {
//   //     name: 'css attribute-name.id',
//   //     scope: 'support.constant.color.w3c-standard-color-name.css',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'css property-name',
//   //     scope: 'support.type.vendored.property-name.css',
//   //     settings: {
//   //       foreground: '#2cc7da',
//   //     },
//   //   },
//   //   {
//   //     name: 'js/ts template-expression',
//   //     scope: 'punctuation.definition.template-expression.begin,punctuation.definition.template-expression.end',
//   //     settings: {
//   //       foreground: '#f76693',
//   //     },
//   //   },
//   //   {
//   //     name: 'js/ts module',
//   //     scope: 'support.module.node,support.type.object.module',
//   //     settings: {
//   //       foreground: '#f6d47d',
//   //     },
//   //   },
//   //   {
//   //     name: 'js variable readwrite',
//   //     scope:
//   //       'variable.other.readwrite,support.variable.property,support.variable.object.process,support.variable.object.node',
//   //     settings: {
//   //       foreground: '#f76693',
//   //     },
//   //   },
//   //   {
//   //     name: 'comment',
//   //     scope: 'comment.line.double-slash,comment.block.documentation',
//   //     settings: {
//   //       fontStyle: 'normal',
//   //     },
//   //   },
//   //   {
//   //     name: 'js/ts json',
//   //     scope: 'support.constant.json',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'js/ts Keyword',
//   //     scope: 'keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.ternary',
//   //     settings: {
//   //       foreground: '#b275ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'js/ts console / support',
//   //     scope: 'support.type.object.console, support.type.object.process',
//   //     settings: {
//   //       foreground: '#2cc7da',
//   //     },
//   //   },
//   //   {
//   //     name: 'js/ts support.variable.property.process',
//   //     scope: 'support.variable.property.process',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'js console function',
//   //     scope: 'entity.name.function,support.function.console',
//   //     settings: {
//   //       foreground: '#4695ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'js operator',
//   //     scope: 'keyword.operator',
//   //     settings: {
//   //       foreground: '#2cc7da',
//   //     },
//   //   },
//   //   // {
//   //   //   "name": "js operator assignment",
//   //   //   "scope": "keyword.operator.assignment",
//   //   //   "settings": {
//   //   //     "foreground": "#b7c5d3ff"
//   //   //   }
//   //   // },
//   //   {
//   //     name: 'js dom',
//   //     scope: 'support.type.object.dom',
//   //     settings: {
//   //       foreground: '#2cc7da',
//   //     },
//   //   },
//   //   {
//   //     name: 'js dom variable',
//   //     scope: 'support.variable.dom,support.variable.property.dom',
//   //     settings: {
//   //       foreground: '#f76693',
//   //     },
//   //   },
//   //   {
//   //     name: 'keyword.operator',
//   //     scope: 'keyword.operator.arithmetic,keyword.operator.comparison',
//   //     settings: {
//   //       foreground: '#2cc7da',
//   //     },
//   //   },
//   //   {
//   //     name: 'object key',
//   //     scope:
//   //       'string.unquoted, meta.object-literal.key, variable.object.property.ts, meta.object.member.object-literal.key',
//   //     settings: {
//   //       foreground: '#81e0fe',
//   //     },
//   //   },
//   //   {
//   //     name: 'js console log',
//   //     scope: 'support.class.console, support.function.console',
//   //     settings: {
//   //       foreground: '#2cc7da',
//   //     },
//   //   },
//   //   {
//   //     name: 'C operator assignment',
//   //     scope:
//   //       'keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c',
//   //     settings: {
//   //       foreground: '#b275ffff',
//   //     },
//   //   },
//   //   {
//   //     name: 'C punctuation',
//   //     scope: 'punctuation.separator.delimiter.c',
//   //     settings: {
//   //       foreground: '#bbbbbb',
//   //     },
//   //   },
//   //   {
//   //     name: 'C type posix-reserved',
//   //     scope: 'support.type.posix-reserved.c',
//   //     settings: {
//   //       foreground: '#57adb8',
//   //     },
//   //   },
//   //   {
//   //     name: 'keyword.operator.sizeof.c',
//   //     scope: 'keyword.operator.sizeof.c',
//   //     settings: {
//   //       foreground: '#C178DD',
//   //     },
//   //   },
//   //   {
//   //     name: 'python parameter',
//   //     scope: 'variable.parameter.function.language.python',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'python type',
//   //     scope: 'support.type.python',
//   //     settings: {
//   //       foreground: '#2cc7da',
//   //     },
//   //   },
//   //   {
//   //     name: 'python logical',
//   //     scope: 'keyword.operator.logical.python',
//   //     settings: {
//   //       foreground: '#b275ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'meta.function-call.arguments.python',
//   //     scope: 'meta.function-call.arguments.python',
//   //     settings: {
//   //       foreground: '#E06C60',
//   //     },
//   //   },
//   //   {
//   //     name: 'meta.function-call.python',
//   //     scope: 'meta.function-call.python',
//   //     settings: {
//   //       foreground: '#E06C60',
//   //     },
//   //   },
//   //   {
//   //     name: 'pyCs',
//   //     scope: 'variable.parameter.function.python',
//   //     settings: {
//   //       foreground: '#D18C4E',
//   //     },
//   //   },
//   //   {
//   //     name: 'python block',
//   //     scope:
//   //       'punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python,meta.function-call.arguments.python',
//   //     settings: {
//   //       foreground: '#b7c5d3ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'python function-call.generic',
//   //     scope: 'meta.function-call.generic.python',
//   //     settings: {
//   //       foreground: '#4695ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'python placeholder reset to normal string',
//   //     scope: 'constant.character.format.placeholder.other.python',
//   //     settings: {
//   //       foreground: '#69dd7a',
//   //     },
//   //   },
//   //   {
//   //     name: 'Delimiters',
//   //     scope: 'none',
//   //     settings: {
//   //       foreground: '#A6B2C0',
//   //     },
//   //   },
//   //   {
//   //     name: 'Operators',
//   //     scope: 'keyword.operator, punctuation.accessor.ts',
//   //     settings: {
//   //       foreground: '#2cc7da',
//   //     },
//   //   },
//   //   {
//   //     name: 'Operators normal',
//   //     scope: 'keyword.operator.type.annotation',
//   //     settings: {
//   //       foreground: '#b7c5d3ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'Keywords',
//   //     scope: 'keyword',
//   //     settings: {
//   //       foreground: '#b275ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'Variables',
//   //     scope: 'variable',
//   //     settings: {
//   //       foreground: '#f76693',
//   //     },
//   //   },
//   //   {
//   //     name: 'Java Variables',
//   //     scope: 'token.variable.parameter.java',
//   //     settings: {
//   //       foreground: '#b7c5d3ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'Java Imports',
//   //     scope: 'import.storage.java',
//   //     settings: {
//   //       foreground: '#f6d47d',
//   //     },
//   //   },
//   //   {
//   //     name: 'Packages',
//   //     scope: 'token.package.keyword',
//   //     settings: {
//   //       foreground: '#b275ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'Packages',
//   //     scope: 'token.package',
//   //     settings: {
//   //       foreground: '#b7c5d3ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'Functions, Decorator',
//   //     scope: 'entity.name.function, meta.require, support.function.any-method, punctuation.decorator.ts',
//   //     settings: {
//   //       foreground: '#4695ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'Classes',
//   //     scope: 'entity.name.type.namespace',
//   //     settings: {
//   //       foreground: '#f6d47d',
//   //     },
//   //   },
//   //   {
//   //     name: 'Classes',
//   //     scope: 'support.class, entity.name.type.class',
//   //     settings: {
//   //       foreground: '#f6d47d',
//   //     },
//   //   },
//   //   {
//   //     name: 'Class name',
//   //     scope: 'entity.name.class.identifier.namespace.type',
//   //     settings: {
//   //       foreground: '#f6d47d',
//   //     },
//   //   },
//   //   {
//   //     name: 'Class name',
//   //     scope: 'entity.name.class',
//   //     settings: {
//   //       // "foreground": "#4695ff"
//   //       foreground: '#f6d47d',
//   //     },
//   //   },
//   //   {
//   //     name: 'Type Name',
//   //     scope: 'entity.name.type',
//   //     settings: {
//   //       foreground: '#f6d47d',
//   //     },
//   //   },
//   //   {
//   //     name: 'Keyword Control',
//   //     scope: 'keyword.control',
//   //     settings: {
//   //       foreground: '#b275ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'Control Elements',
//   //     scope: 'control.elements, keyword.operator.less',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'Methods',
//   //     scope: 'keyword.other.special-method',
//   //     settings: {
//   //       foreground: '#4695ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'Storage',
//   //     scope: 'storage',
//   //     settings: {
//   //       foreground: '#b275ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'Storage JS TS',
//   //     scope: 'token.storage',
//   //     settings: {
//   //       foreground: '#b275ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void',
//   //     scope:
//   //       'keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void',
//   //     settings: {
//   //       foreground: '#b275ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'Java Storage',
//   //     scope: 'token.storage.type.java',
//   //     settings: {
//   //       foreground: '#f6d47d',
//   //     },
//   //   },
//   //   {
//   //     name: 'Support',
//   //     scope: 'support.function',
//   //     settings: {
//   //       foreground: '#2cc7da',
//   //     },
//   //   },
//   //   {
//   //     name: 'Support type',
//   //     scope: 'support.type.property-name',
//   //     settings: {
//   //       foreground: '#b7c5d3ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'Support type',
//   //     scope: 'support.constant.property-value',
//   //     settings: {
//   //       foreground: '#b7c5d3ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'Support type',
//   //     scope: 'support.constant.font-name',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'Meta tag',
//   //     scope: 'meta.tag, text.html.basic',
//   //     settings: {
//   //       foreground: '#b7c5d3ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'Strings, Inherited Class',
//   //     scope: 'string, entity.other.inherited-class',
//   //     settings: {
//   //       foreground: '#69dd7a',
//   //     },
//   //   },
//   //   {
//   //     name: 'Constant other symbol',
//   //     scope: 'constant.other.symbol',
//   //     settings: {
//   //       foreground: '#2cc7da',
//   //     },
//   //   },
//   //   {
//   //     name: 'Integers',
//   //     scope: 'constant.numeric',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'Floats',
//   //     scope: 'none',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'Boolean',
//   //     scope: 'none',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'Constants',
//   //     scope: 'constant',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'Constants',
//   //     scope: 'punctuation.definition.constant',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'Tags',
//   //     scope: 'entity.name.tag',
//   //     settings: {
//   //       foreground: '#f76693',
//   //     },
//   //   },
//   //   {
//   //     name: 'Attributes',
//   //     scope: 'entity.other.attribute-name',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'Attribute IDs',
//   //     scope: 'entity.other.attribute-name.id',
//   //     settings: {
//   //       foreground: '#4695ff',
//   //       fontStyle: 'normal',
//   //     },
//   //   },
//   //   {
//   //     name: 'Attribute class',
//   //     scope: 'entity.other.attribute-name.class.css',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //       fontStyle: 'normal',
//   //     },
//   //   },
//   //   {
//   //     name: 'Selector',
//   //     scope: 'meta.selector',
//   //     settings: {
//   //       foreground: '#b275ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'Values',
//   //     scope: 'none',
//   //     settings: {
//   //       foreground: '#D2945D',
//   //     },
//   //   },
//   //   {
//   //     name: 'Headings',
//   //     scope: 'markup.heading',
//   //     settings: {
//   //       fontStyle: 'bold',
//   //       foreground: '#f76693',
//   //     },
//   //   },
//   //   {
//   //     name: 'Headings',
//   //     scope: 'markup.heading punctuation.definition.heading, entity.name.section',
//   //     settings: {
//   //       foreground: '#4695ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'Units',
//   //     scope: 'keyword.other.unit',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'Bold',
//   //     scope: 'markup.bold,todo.bold',
//   //     settings: {
//   //       fontStyle: 'bold',
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'Bold',
//   //     scope: 'punctuation.definition.bold',
//   //     settings: {
//   //       foreground: '#f6d47d',
//   //     },
//   //   },
//   //   {
//   //     name: 'Italic',
//   //     scope: 'markup.italic,punctuation.definition.italic,todo.emphasis',
//   //     settings: {
//   //       foreground: '#b275ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'Italic',
//   //     scope: 'emphasis md',
//   //     settings: {
//   //       foreground: '#b275ff',
//   //     },
//   //   },
//   //   {
//   //     name: '[VSCODE-CUSTOM] Markdown headings',
//   //     scope: 'entity.name.section.markdown',
//   //     settings: {
//   //       foreground: '#f76693',
//   //     },
//   //   },
//   //   {
//   //     name: '[VSCODE-CUSTOM] Markdown heading Punctuation Definition',
//   //     scope: 'punctuation.definition.heading.markdown',
//   //     settings: {
//   //       foreground: '#f76693',
//   //     },
//   //   },
//   //   {
//   //     name: '[VSCODE-CUSTOM] Markdown heading setext',
//   //     scope: 'markup.heading.setext',
//   //     settings: {
//   //       foreground: '#b7c5d3ff',
//   //     },
//   //   },
//   //   {
//   //     name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Bold',
//   //     scope: 'punctuation.definition.bold.markdown',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: '[VSCODE-CUSTOM] Markdown Inline Raw',
//   //     scope: 'markup.inline.raw.markdown',
//   //     settings: {
//   //       foreground: '#69dd7a',
//   //     },
//   //   },
//   //   {
//   //     name: '[VSCODE-CUSTOM] Markdown Inline Raw',
//   //     scope: 'markup.inline.raw.string.markdown',
//   //     settings: {
//   //       foreground: '#69dd7a',
//   //     },
//   //   },
//   //   {
//   //     name: '[VSCODE-CUSTOM] Markdown List Punctuation Definition',
//   //     scope: 'beginning.punctuation.definition.list.markdown',
//   //     settings: {
//   //       foreground: '#f76693',
//   //     },
//   //   },
//   //   {
//   //     name: '[VSCODE-CUSTOM] Markdown Quote',
//   //     scope: 'markup.quote.markdown',
//   //     settings: {
//   //       foreground: '#5C6370',
//   //       fontStyle: 'italic',
//   //     },
//   //   },
//   //   {
//   //     name: '[VSCODE-CUSTOM] Markdown Punctuation Definition String',
//   //     scope:
//   //       'punctuation.definition.string.begin.markdown,punctuation.definition.string.end.markdown,punctuation.definition.metadata.markdown',
//   //     settings: {
//   //       foreground: '#b7c5d3ff',
//   //     },
//   //   },
//   //   {
//   //     name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Link',
//   //     scope: 'punctuation.definition.metadata.markdown',
//   //     settings: {
//   //       foreground: '#b275ff',
//   //     },
//   //   },
//   //   {
//   //     name: '[VSCODE-CUSTOM] Markdown Underline Link/Image',
//   //     scope: 'markup.underline.link.markdown,markup.underline.link.image.markdown',
//   //     settings: {
//   //       foreground: '#b275ff',
//   //     },
//   //   },
//   //   {
//   //     name: '[VSCODE-CUSTOM] Markdown Link Title/Description',
//   //     scope: 'string.other.link.title.markdown,string.other.link.description.markdown',
//   //     settings: {
//   //       foreground: '#4695ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'markup.italic.markdown',
//   //     scope: 'markup.italic.markdown',
//   //     settings: {
//   //       fontStyle: 'italic',
//   //     },
//   //   },
//   //   {
//   //     name: 'markup.bold.markdown',
//   //     scope: 'markup.bold.markdown',
//   //     settings: {
//   //       fontStyle: 'bold',
//   //     },
//   //   },
//   //   {
//   //     name: 'Regular Expressions',
//   //     scope: 'string.regexp',
//   //     settings: {
//   //       foreground: '#2cc7da',
//   //     },
//   //   },
//   //   {
//   //     name: 'Escape Characters',
//   //     scope: 'constant.character.escape',
//   //     settings: {
//   //       foreground: '#2cc7da',
//   //     },
//   //   },
//   //   {
//   //     name: 'Embedded',
//   //     scope: 'punctuation.section.embedded, variable.interpolation',
//   //     settings: {
//   //       foreground: '#BE4F44',
//   //     },
//   //   },
//   //   {
//   //     name: 'Illegal',
//   //     scope: 'invalid.illegal',
//   //     settings: {
//   //       background: '#e05252',
//   //       foreground: '#FFFFFF',
//   //     },
//   //   },
//   //   {
//   //     name: 'Broken',
//   //     scope: 'invalid.broken',
//   //     settings: {
//   //       background: '#e05252',
//   //       foreground: '#FFFFFF',
//   //     },
//   //   },
//   //   {
//   //     name: 'Deprecated',
//   //     scope: 'invalid.deprecated',
//   //     settings: {
//   //       background: '#d27b53',
//   //       foreground: '#FFFFFF',
//   //     },
//   //   },
//   //   {
//   //     name: 'Unimplemented',
//   //     scope: 'invalid.unimplemented',
//   //     settings: {
//   //       background: '#747369',
//   //       foreground: '#FFFFFF',
//   //     },
//   //   },
//   //   {
//   //     name: 'Source Json Meta Structure Dictionary Json > String Quoted Json',
//   //     scope: 'source.json meta.structure.dictionary.json > string.quoted.json',
//   //     settings: {
//   //       foreground: '#f76693',
//   //     },
//   //   },
//   //   {
//   //     name: 'Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String',
//   //     scope: 'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string',
//   //     settings: {
//   //       foreground: '#f76693',
//   //     },
//   //   },
//   //   {
//   //     name: 'Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation',
//   //     scope:
//   //       'source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
//   //     settings: {
//   //       foreground: '#69dd7a',
//   //     },
//   //   },
//   //   {
//   //     name: 'Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json',
//   //     scope:
//   //       'source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json',
//   //     settings: {
//   //       foreground: '#2cc7da',
//   //     },
//   //   },
//   //   {
//   //     name: '[VSCODE-CUSTOM] JSON Property Name',
//   //     scope: 'support.type.property-name.json',
//   //     settings: {
//   //       foreground: '#f76693',
//   //     },
//   //   },
//   //   {
//   //     name: '[VSCODE-CUSTOM] JSON Punctuation for Property Name',
//   //     scope: 'support.type.property-name.json punctuation',
//   //     settings: {
//   //       foreground: '#f76693',
//   //     },
//   //   },
//   //   {
//   //     name: 'laravel blade tag',
//   //     scope: 'text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade',
//   //     settings: {
//   //       foreground: '#C679DD',
//   //     },
//   //   },
//   //   {
//   //     name: 'laravel blade @',
//   //     scope: 'text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade',
//   //     settings: {
//   //       foreground: '#C679DD',
//   //     },
//   //   },
//   //   {
//   //     name: 'use statement for other classes',
//   //     scope:
//   //       'support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php',
//   //     settings: {
//   //       foreground: '#f6d47d',
//   //     },
//   //   },
//   //   {
//   //     name: 'error suppression',
//   //     scope: 'keyword.operator.error-control.php',
//   //     settings: {
//   //       foreground: '#b275ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'php instanceof',
//   //     scope: 'keyword.operator.type.php',
//   //     settings: {
//   //       foreground: '#b275ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'style double quoted array index normal begin',
//   //     scope: 'punctuation.section.array.begin.php',
//   //     settings: {
//   //       foreground: '#b7c5d3ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'style double quoted array index normal end',
//   //     scope: 'punctuation.section.array.end.php',
//   //     settings: {
//   //       foreground: '#b7c5d3ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'php illegal.non-null-typehinted',
//   //     scope: 'invalid.illegal.non-null-typehinted.php',
//   //     settings: {
//   //       foreground: '#ff0000',
//   //     },
//   //   },
//   //   {
//   //     name: 'php types',
//   //     scope: 'storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php',
//   //     settings: {
//   //       foreground: '#f6d47d',
//   //     },
//   //   },
//   //   {
//   //     name: 'php call-function',
//   //     scope: 'meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php',
//   //     settings: {
//   //       foreground: '#4695ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'php function-resets',
//   //     scope:
//   //       'punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php',
//   //     settings: {
//   //       foreground: '#bbbbbb',
//   //     },
//   //   },
//   //   {
//   //     name: 'support php constants',
//   //     scope:
//   //       'support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'php goto',
//   //     scope: 'entity.name.goto-label.php,support.other.php',
//   //     settings: {
//   //       foreground: '#4695ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'php logical/bitwise operator',
//   //     scope: 'keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php',
//   //     settings: {
//   //       foreground: '#2cc7da',
//   //     },
//   //   },
//   //   {
//   //     name: 'php regexp operator',
//   //     scope: 'keyword.operator.regexp.php',
//   //     settings: {
//   //       foreground: '#b275ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'php comparison',
//   //     scope: 'keyword.operator.comparison.php',
//   //     settings: {
//   //       foreground: '#2cc7da',
//   //     },
//   //   },
//   //   {
//   //     name: 'php dollar sign',
//   //     scope: 'punctuation.definition.variable.php',
//   //     settings: {
//   //       foreground: '#f76693',
//   //     },
//   //   },
//   //   {
//   //     name: 'php heredoc/nowdoc',
//   //     scope: 'keyword.operator.heredoc.php,keyword.operator.nowdoc.php',
//   //     settings: {
//   //       foreground: '#b275ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'python function decorator @',
//   //     scope: 'meta.function.decorator.python',
//   //     settings: {
//   //       foreground: '#4695ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'python function support',
//   //     scope: 'support.token.decorator.python,meta.function.decorator.identifier.python',
//   //     settings: {
//   //       foreground: '#2cc7da',
//   //     },
//   //   },
//   //   {
//   //     name: 'parameter function',
//   //     scope: 'function.parameter',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'parameter function js/ts',
//   //     scope: 'function.parameter',
//   //     settings: {
//   //       foreground: '#b7c5d3ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'brace function',
//   //     scope: 'function.brace',
//   //     settings: {
//   //       foreground: '#b7c5d3ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'parameter function ruby cs',
//   //     scope: 'function.parameter.ruby, function.parameter.cs',
//   //     settings: {
//   //       foreground: '#b7c5d3ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'rgb-value',
//   //     scope: 'rgb-value',
//   //     settings: {
//   //       foreground: '#2cc7da',
//   //     },
//   //   },
//   //   {
//   //     name: 'rgb value #',
//   //     scope: 'inline-color-decoration rgb-value',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'rgb value less',
//   //     scope: 'less rgb-value',
//   //     settings: {
//   //       foreground: '#faa75f',
//   //     },
//   //   },
//   //   {
//   //     name: 'sass selector',
//   //     scope: 'selector.sass',
//   //     settings: {
//   //       foreground: '#f76693',
//   //     },
//   //   },
//   //   {
//   //     name: 'js ts this',
//   //     scope:
//   //       'var.this,variable.language.this.js,variable.language.this.ts,variable.language.this.jsx,variable.language.this.tsx',
//   //     settings: {
//   //       foreground: '#f6d47d',
//   //     },
//   //   },
//   //   {
//   //     name: 'ts primitive/builtin types',
//   //     scope: 'support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx',
//   //     settings: {
//   //       foreground: '#f6d47d',
//   //     },
//   //   },
//   //   {
//   //     name: 'block scope',
//   //     scope: 'block.scope.end,block.scope.begin',
//   //     settings: {
//   //       foreground: '#b7c5d3ff',
//   //     },
//   //   },
//   //   {
//   //     name: 'cs storage type',
//   //     scope: 'storage.type.cs',
//   //     settings: {
//   //       foreground: '#f6d47dff',
//   //     },
//   //   },
//   //   {
//   //     name: 'cs local variable',
//   //     scope: 'entity.name.variable.local.cs',
//   //     settings: {
//   //       foreground: '#f76693',
//   //     },
//   //   },
//   //   {
//   //     scope: 'token.info-token',
//   //     settings: {
//   //       foreground: '#6796e6',
//   //     },
//   //   },
//   //   {
//   //     scope: 'token.warn-token',
//   //     settings: {
//   //       foreground: '#cd9731',
//   //     },
//   //   },
//   //   {
//   //     scope: 'token.error-token',
//   //     settings: {
//   //       foreground: '#f44747',
//   //     },
//   //   },
//   //   {
//   //     scope: 'token.debug-token',
//   //     settings: {
//   //       foreground: '#b267e6',
//   //     },
//   //   },
//   // ],
// };

export const themeData: editor.IStandaloneThemeData = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    {
      background: '24292e',
      token: '',
    },
    {
      foreground: '959da5',
      token: 'comment',
    },
    {
      foreground: '959da5',
      token: 'punctuation.definition.comment',
    },
    {
      foreground: '959da5',
      token: 'string.comment',
    },
    {
      foreground: 'c8e1ff',
      token: 'constant',
    },
    {
      foreground: 'c8e1ff',
      token: 'entity.name.constant',
    },
    {
      foreground: 'c8e1ff',
      token: 'variable.other.constant',
    },
    {
      foreground: 'c8e1ff',
      token: 'variable.language',
    },
    {
      foreground: 'b392f0',
      token: 'entity',
    },
    {
      foreground: 'b392f0',
      token: 'entity.name',
    },
    {
      foreground: 'f6f8fa',
      token: 'variable.parameter.function',
    },
    {
      foreground: '7bcc72',
      token: 'entity.name.tag',
    },
    {
      foreground: 'ea4a5a',
      token: 'keyword',
    },
    {
      foreground: 'ea4a5a',
      token: 'storage',
    },
    {
      foreground: 'ea4a5a',
      token: 'storage.type',
    },
    {
      foreground: 'f6f8fa',
      token: 'storage.modifier.package',
    },
    {
      foreground: 'f6f8fa',
      token: 'storage.modifier.import',
    },
    {
      foreground: 'f6f8fa',
      token: 'storage.type.java',
    },
    {
      foreground: '79b8ff',
      token: 'string',
    },
    {
      foreground: '79b8ff',
      token: 'punctuation.definition.string',
    },
    {
      foreground: '79b8ff',
      token: 'string punctuation.section.embedded source',
    },
    {
      foreground: 'c8e1ff',
      token: 'support',
    },
    {
      foreground: 'c8e1ff',
      token: 'meta.property-name',
    },
    {
      foreground: 'fb8532',
      token: 'variable',
    },
    {
      foreground: 'f6f8fa',
      token: 'variable.other',
    },
    {
      foreground: 'd73a49',
      fontStyle: 'bold italic underline',
      token: 'invalid.broken',
    },
    {
      foreground: 'd73a49',
      fontStyle: 'bold italic underline',
      token: 'invalid.deprecated',
    },
    {
      foreground: 'fafbfc',
      background: 'd73a49',
      fontStyle: 'italic underline',
      token: 'invalid.illegal',
    },
    {
      foreground: 'fafbfc',
      background: 'd73a49',
      fontStyle: 'italic underline',
      token: 'carriage-return',
    },
    {
      foreground: 'd73a49',
      fontStyle: 'bold italic underline',
      token: 'invalid.unimplemented',
    },
    {
      foreground: 'd73a49',
      token: 'message.error',
    },
    {
      foreground: 'f6f8fa',
      token: 'string source',
    },
    {
      foreground: 'c8e1ff',
      token: 'string variable',
    },
    {
      foreground: '79b8ff',
      token: 'source.regexp',
    },
    {
      foreground: '79b8ff',
      token: 'string.regexp',
    },
    {
      foreground: '79b8ff',
      token: 'string.regexp.character-class',
    },
    {
      foreground: '79b8ff',
      token: 'string.regexp constant.character.escape',
    },
    {
      foreground: '79b8ff',
      token: 'string.regexp source.ruby.embedded',
    },
    {
      foreground: '79b8ff',
      token: 'string.regexp string.regexp.arbitrary-repitition',
    },
    {
      foreground: '7bcc72',
      fontStyle: 'bold',
      token: 'string.regexp constant.character.escape',
    },
    {
      foreground: 'c8e1ff',
      token: 'support.constant',
    },
    {
      foreground: 'c8e1ff',
      token: 'support.variable',
    },
    {
      foreground: 'c8e1ff',
      token: 'meta.module-reference',
    },
    {
      foreground: 'fb8532',
      token: 'markup.list',
    },
    {
      foreground: '0366d6',
      fontStyle: 'bold',
      token: 'markup.heading',
    },
    {
      foreground: '0366d6',
      fontStyle: 'bold',
      token: 'markup.heading entity.name',
    },
    {
      foreground: 'c8e1ff',
      token: 'markup.quote',
    },
    {
      foreground: 'f6f8fa',
      fontStyle: 'italic',
      token: 'markup.italic',
    },
    {
      foreground: 'f6f8fa',
      fontStyle: 'bold',
      token: 'markup.bold',
    },
    {
      foreground: 'c8e1ff',
      token: 'markup.raw',
    },
    {
      foreground: 'b31d28',
      background: 'ffeef0',
      token: 'markup.deleted',
    },
    {
      foreground: 'b31d28',
      background: 'ffeef0',
      token: 'meta.diff.header.from-file',
    },
    {
      foreground: 'b31d28',
      background: 'ffeef0',
      token: 'punctuation.definition.deleted',
    },
    {
      foreground: '176f2c',
      background: 'f0fff4',
      token: 'markup.inserted',
    },
    {
      foreground: '176f2c',
      background: 'f0fff4',
      token: 'meta.diff.header.to-file',
    },
    {
      foreground: '176f2c',
      background: 'f0fff4',
      token: 'punctuation.definition.inserted',
    },
    {
      foreground: 'b08800',
      background: 'fffdef',
      token: 'markup.changed',
    },
    {
      foreground: 'b08800',
      background: 'fffdef',
      token: 'punctuation.definition.changed',
    },
    {
      foreground: '2f363d',
      background: '959da5',
      token: 'markup.ignored',
    },
    {
      foreground: '2f363d',
      background: '959da5',
      token: 'markup.untracked',
    },
    {
      foreground: 'b392f0',
      fontStyle: 'bold',
      token: 'meta.diff.range',
    },
    {
      foreground: 'c8e1ff',
      token: 'meta.diff.header',
    },
    {
      foreground: '0366d6',
      fontStyle: 'bold',
      token: 'meta.separator',
    },
    {
      foreground: '0366d6',
      token: 'meta.output',
    },
    {
      foreground: 'ffeef0',
      token: 'brackethighlighter.tag',
    },
    {
      foreground: 'ffeef0',
      token: 'brackethighlighter.curly',
    },
    {
      foreground: 'ffeef0',
      token: 'brackethighlighter.round',
    },
    {
      foreground: 'ffeef0',
      token: 'brackethighlighter.square',
    },
    {
      foreground: 'ffeef0',
      token: 'brackethighlighter.angle',
    },
    {
      foreground: 'ffeef0',
      token: 'brackethighlighter.quote',
    },
    {
      foreground: 'd73a49',
      token: 'brackethighlighter.unmatched',
    },
    {
      foreground: 'd73a49',
      token: 'sublimelinter.mark.error',
    },
    {
      foreground: 'fb8532',
      token: 'sublimelinter.mark.warning',
    },
    {
      foreground: '6a737d',
      token: 'sublimelinter.gutter-mark',
    },
    {
      foreground: '79b8ff',
      fontStyle: 'underline',
      token: 'constant.other.reference.link',
    },
    {
      foreground: '79b8ff',
      fontStyle: 'underline',
      token: 'string.other.link',
    },
  ],
  colors: {
    'activityBar.background': '#1D252C',
    'activityBar.border': '#333F4A',
    'activityBar.dropBackground': '#333F4A',
    'activityBar.foreground': '#fff',
    'activityBarBadge.background': '#11a5ff',
    'activityBarBadge.foreground': '#000',
    'badge.background': '#11a5ff',
    'badge.foreground': '#000',
    'button.background': '#1D252C',
    'button.foreground': '#fff',
    'button.hoverBackground': '#11a5ff',
    contrastActiveBorder: '#fff',
    contrastBorder: '#ffffff00',
    'debugExceptionWidget.background': '#1D252C',
    'debugExceptionWidget.border': '#aaa',
    'debugToolBar.background': '#1D252C',
    descriptionForeground: '#aaa',
    'diffEditor.insertedTextBackground': '#3ad90011',
    'diffEditor.insertedTextBorder': '#3ad90055',
    'diffEditor.removedTextBackground': '#ee3a4311',
    'diffEditor.removedTextBorder': '#ee3a4355',
    'dropdown.background': '#1D252C',
    'dropdown.border': '#15232d',
    'dropdown.foreground': '#fff',
    'editor.background': '#1D252C',
    'editor.foreground': '#B7C5D3',
    'editor.findMatchBackground': '#b7c5d380',
    'editor.findMatchHighlightBackground': '#b7c5d330',
    'editor.findRangeHighlightBackground': '#243E51',
    'editor.hoverHighlightBackground': '#313a42',
    'editor.inactiveSelectionBackground': '#313a42',
    'editor.lineHighlightBackground': '#28313a',
    'editor.lineHighlightBorder': '#28313a',
    'editor.rangeHighlightBackground': '#28313a',
    'editor.selectionBackground': '#313a42',
    'editor.selectionHighlightBackground': '#28323a',
    'editor.wordHighlightStrongBackground': '#41505e',
    'editor.wordHighlightBackground': '#313a42',
    'editorBracketMatch.background': '#3d454d',
    'editorBracketMatch.border': '#68A1F0',
    'editorCodeLens.foreground': '#aaa',
    // "editorCursor.foreground": "#11a5ff",
    'editorCursor.foreground': '#008cff',
    'editorError.border': '#333F4A',
    'editorError.foreground': '#e27e8d',
    'editorGutter.background': '#1D252C',
    'editorGutter.addedBackground': '#8bd49c',
    'editorGutter.deletedBackground': '#e27e8d',
    'editorGutter.modifiedBackground': '#26506D',
    'editorGroup.background': '#1D252C',
    'editorGroup.border': '#1D252C',
    'editorGroup.dropBackground': '#333F4A',
    'editorGroupHeader.noTabsBackground': '#1D252C',
    'editorGroupHeader.tabsBackground': '#1D252C',
    'editorGroupHeader.tabsBorder': '#15232d',
    'editorHoverWidget.background': '#15232d',
    'editorHoverWidget.border': '#333F4A',
    'editorIndentGuide.background': '#41505E',
    'editorLineNumber.foreground': '#41505E',
    'editorLink.activeForeground': '#aaa',
    'editorMarkerNavigation.background': '#1D252C',
    'editorMarkerNavigationError.background': '#d95468',
    'editorMarkerNavigationWarning.background': '#f9b97f',
    'editorOverviewRuler.border': '#333F4A',
    'editorOverviewRuler.commonContentForeground': '#efe99455',
    'editorOverviewRuler.currentContentForeground': '#ee3a4355',
    'editorOverviewRuler.incomingContentForeground': '#3ad90055',
    'editorRuler.foreground': '#1F4662',
    'editorSuggestWidget.background': '#222A31',
    'editorSuggestWidget.border': '#15232d',
    'editorSuggestWidget.foreground': '#D1DFED',
    'editorSuggestWidget.highlightForeground': '#11a5ff',
    'editorSuggestWidget.selectedBackground': '#333F4A',
    'editorWarning.border': '#ffffff00',
    'editorWarning.foreground': '#efe994',
    'editorWhitespace.foreground': '#ffffff1a',
    'editorWidget.background': '#15232d',
    'editorWidget.border': '#333F4A',
    errorForeground: '#e27e8d',
    'extensionButton.prominentBackground': '#70c1f3',
    'extensionButton.prominentForeground': '#000',
    'extensionButton.prominentHoverBackground': '#11a5ff',
    focusBorder: '#333F4A',
    foreground: '#aaa',
    'input.background': '#1D252C',
    'input.border': '#333F4A',
    'input.foreground': '#b7c5d3',
    'input.placeholderForeground': '#aaa',
    'inputOption.activeBorder': '#333F4A',
    'inputValidation.errorBackground': '#e27e8d',
    'inputValidation.errorBorder': '#d95468',
    'inputValidation.infoBackground': '#5ec4ff',
    'inputValidation.infoBorder': '#539afc',
    'inputValidation.warningBackground': '#efe994',
    'inputValidation.warningBorder': '#f9b97f',
    'list.activeSelectionBackground': '#1D252C',
    'list.activeSelectionForeground': '#aaa',
    'list.dropBackground': '#333F4A',
    'list.focusBackground': '#333F4A',
    'list.focusForeground': '#aaa',
    'list.highlightForeground': '#11a5ff',
    'list.hoverBackground': '#1D252C',
    'list.hoverForeground': '#aaa',
    'list.inactiveSelectionBackground': '#333F4A',
    'list.inactiveSelectionForeground': '#aaa',
    'merge.border': '#ffffff00',
    'merge.commonContentBackground': '#ffffff00',
    'merge.commonHeaderBackground': '#ffffff00',
    'merge.currentContentBackground': '#ffffff00',
    'merge.currentHeaderBackground': '#ffffff00',
    'merge.incomingContentBackground': '#ffffff00',
    'merge.incomingHeaderBackground': '#ffffff00',
    'notification.background': '#efe994',
    'notification.buttonBackground': '#5ec4ff',
    'notification.buttonForeground': '#fff',
    'notification.buttonHoverBackground': '#11a5ff',
    'notification.errorBackground': '#b62d65',
    'notification.errorForeground': '#fff',
    'notification.foreground': '#000',
    'notification.infoBackground': '#5ec4ff',
    'notification.infoForeground': '#fff',
    'notification.warningBackground': '#11a5ff',
    'notification.warningForeground': '#000',
    'panel.background': '#171d23',
    'panel.border': '#171d23',
    'panelTitle.activeBorder': '#41505E',
    'panelTitle.activeForeground': '#41505E',
    'panelTitle.inactiveForeground': '#aaa',
    'peekView.border': '#333F4A',
    'peekViewEditor.background': '#1D252C',
    'peekViewEditor.matchHighlightBackground': '#15232d',
    'peekViewEditorGutter.background': '#333F4A',
    'peekViewResult.background': '#15232d',
    'peekViewResult.fileForeground': '#aaa',
    'peekViewResult.lineForeground': '#fff',
    'peekViewResult.matchHighlightBackground': '#333F4A',
    'peekViewResult.selectionBackground': '#333F4A',
    'peekViewResult.selectionForeground': '#fff',
    'peekViewTitle.background': '#15232d',
    'peekViewTitleDescription.foreground': '#aaa',
    'peekViewTitleLabel.foreground': '#008b94',
    'pickerGroup.border': '#333F4A',
    'pickerGroup.foreground': '#aaa',
    'progressBar.background': '#008b94',
    'scrollbar.shadow': '#00000000',
    'scrollbarSlider.activeBackground': '#333F4A',
    'scrollbarSlider.background': '#41505E',
    'scrollbarSlider.hoverBackground': '#41505E',
    'selection.background': '#027dff',
    'sideBar.background': '#171d23',
    'sideBar.border': '#1D252C',
    'sideBar.foreground': '#aaa',
    'sideBarSectionHeader.background': '#1D252C',
    'sideBarSectionHeader.foreground': '#aaaaaa',
    'sideBarTitle.foreground': '#aaaaaa',
    'statusBar.background': '#171d23',
    'statusBar.border': '#1D252C',
    'statusBar.debuggingBackground': '#171d23',
    'statusBar.debuggingForeground': '#333F4A',
    'statusBar.foreground': '#aaa',
    'statusBar.noFolderBackground': '#171d23',
    'statusBar.noFolderForeground': '#aaa',
    'statusBarItem.activeBackground': '#5ec4ff',
    'statusBarItem.hoverBackground': '#333F4A',
    'statusBarItem.prominentBackground': '#171d23',
    'statusBarItem.prominentHoverBackground': '#333F4A',
    'tab.activeBackground': '#1D252C',
    'tab.activeForeground': '#fff',
    'tab.border': '#171d23',
    'tab.activeBorder': '#1D252C',
    'tab.inactiveBackground': '#171d23',
    'tab.inactiveForeground': '#aaa',
    'tab.unfocusedActiveForeground': '#aaa',
    'tab.unfocusedInactiveForeground': '#aaa',
    'terminal.ansiBlack': '#505050',
    'terminal.ansiRed': '#FF5370',
    'terminal.ansiGreen': '#0cfa83',
    'terminal.ansiYellow': '#ff8308',
    'terminal.ansiBlue': '#1e8eff',
    'terminal.ansiMagenta': '#8e37ff',
    'terminal.ansiCyan': '#03c9dd',
    'terminal.ansiWhite': '#d0d0d0',
    'terminal.ansiBrightBlack': '#6a6a6a',
    'terminal.ansiBrightRed': '#ff869a',
    'terminal.ansiBrightGreen': '#3efb9d',
    'terminal.ansiBrightYellow': '#ffb66e',
    'terminal.ansiBrightBlue': '#84c1ff',
    'terminal.ansiBrightMagenta': '#ab6aff',
    'terminal.ansiBrightCyan': '#17e7fc',
    'terminal.ansiBrightWhite': '#ffffff',
    'terminal.background': '#171d23',
    'terminal.foreground': '#b4e1fd',
    'terminalCursor.background': '#0883ff',
    'terminalCursor.foreground': '#0883ff',
    'textBlockQuote.background': '#171d23',
    'textBlockQuote.border': '#171d23',
    'textCodeBlock.background': '#171d23',
    'textLink.activeForeground': '#718ca1',
    'textLink.foreground': '#718ca1',
    'textPreformat.foreground': '#1D252C',
    'textSeparator.foreground': '#1D252C',
    'titleBar.activeBackground': '#171d23',
    'titleBar.activeForeground': '#ffffff',
    'titleBar.inactiveBackground': '#1D252C',
    'titleBar.inactiveForeground': '#ffffff33',
    'walkThrough.embeddedEditorBackground': '#1D252C',
    'welcomePage.buttonBackground': '#1D252C',
    'welcomePage.buttonHoverBackground': '#333F4A',
    'widget.shadow': '#00000026',
  },
};
// fontFamily: 'Arial',
export const createTheme = (monaco: Monaco) => {
  const themeId = 'shaderkit';
  monaco.editor.defineTheme(themeId, themeData);
  monaco.editor.setTheme(themeId);

  // monaco.editor.EditorOptions.fontFamily = 'fira-code';
};
