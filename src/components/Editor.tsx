import { format } from 'prettier';
import * as glslparser from 'prettier-plugin-glsl';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import { FC, Fragment, useEffect, useRef } from 'react';
// import CodeEditor from 'react-simple-code-editor';
import CodeEditor, { Monaco } from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import toast from 'react-hot-toast';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { errorAtom, monacoAtom } from '../atoms/shader';
import { createLanguage } from './glsl';
import { createTheme } from './glsl/theme';
// import * as monaco from 'monaco-editor';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: scroll;
`;

interface iEditorProps {
  value: string;
  onChange: (value: string) => void;
}
const highlight = (code: string) => (
  <Highlight {...defaultProps} theme={theme} code={code} language='c'>
    {({ tokens, getLineProps, getTokenProps }) => (
      <Fragment>
        {tokens.map((line, i) => (
          <div key={`line-${i}`} {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span key={`segment-${i}-${key}`} {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </Fragment>
    )}
  </Highlight>
);

const Editor: FC<iEditorProps> = ({ value, onChange }) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const [monaco, setMonaco] = useRecoilState(monacoAtom);
  const errors = useRecoilValue(errorAtom);
  useEffect(() => {
    const _handleKeyDown = (e: KeyboardEvent) => {
      const { key, metaKey } = e;
      if (metaKey && key === 'i') {
        onChange(format(value, { parser: 'glsl-parser', plugins: [glslparser], printWidth: 120 }));
        toast.success('Code successfully formatted');
      }
    };

    window.addEventListener('keydown', _handleKeyDown);
    return () => window.removeEventListener('keydown', _handleKeyDown);
  }, [onChange, value]);

  const _handleEditorWillMount = (monaco: Monaco) => {
    // here is the monaco instance
    // do something before editor is mounted
    // monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    const languages = monaco.languages.getLanguages();
    if (languages.find((l) => l.id === 'glsl')) return;
    createLanguage(monaco);
    createTheme(monaco);
    setMonaco(monaco);

    // monaco.editor.addCommand({
    //   // An unique identifier of the contributed action.
    //   id: 'format',

    //   // A label of the action that will be presented to the user.
    //   // label: 'My Label!!!',

    //   // An optional array of keybindings for the action.
    //   keybindings: [
    //     monaco.KeyMod.CtrlCmd | monaco.KeyCode.F10,
    //     // chord
    //     monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyK, monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyM),
    //   ],

    //   // A precondition for this action.
    //   precondition: null,

    //   // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
    //   keybindingContext: null,

    //   contextMenuGroupId: 'navigation',

    //   contextMenuOrder: 1.5,

    //   // Method that will be executed when the action is triggered.
    //   // @param editor The editor instance is passed in as a convenience
    //   run: function (ed) {
    //     alert("i'm running => " + ed.getPosition());
    //   },
    // });
    // monaco.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyE, () => {
    // monaco.languages.getLanguages()[0].getAction("editor.action.formatDocument")
    // });
    // monaco.languages.set
  };

  const _handleEditorDidMount = (monacoeditor: editor.IStandaloneCodeEditor, monaco: Monaco) => {
    monacoeditor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyK, () => {
      monacoeditor.getAction('editor.action.formatDocument').run();
    });
  };

  useEffect(() => {
    if (!monaco) return;

    const models = monaco.editor.getModels();
    const model = models.find((m) => m.getLanguageId() === 'glsl');
    if (!model) return;
    const markers = errors.map((error) => {
      const marker: editor.IMarkerData = {
        startLineNumber: error.line,
        endLineNumber: error.line,
        startColumn: error.column,
        endColumn: error.column + error.length,
        message: error.message,
        severity: monaco.MarkerSeverity.Error,
      };
      return marker;
    });

    monaco.editor.setModelMarkers(model, 'owner', markers);
  }, [errors, monaco]);

  return (
    <>
      <Wrapper ref={wrapper}>
        <CodeEditor
          beforeMount={_handleEditorWillMount}
          onMount={_handleEditorDidMount}
          options={{
            minimap: { enabled: false },
            fontFamily: 'Fira Code',
            fontLigatures: true,
            // fontSize: 12,
            // fontWeight: '500'
          }}
          language='glsl'
          value={value}
          onChange={onChange}
          theme={'shaderkit'}
        />
      </Wrapper>
    </>
  );
};

export default Editor;
