import * as glslparser from 'prettier-plugin-glsl';
import { format } from 'prettier';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import { FC, Fragment, useEffect, useId } from 'react';
import CodeEditor from 'react-simple-code-editor';
import styled from 'styled-components';
import toast from 'react-hot-toast';

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
  const id = useId();
  useEffect(() => {
    const _handleKeyDown = (e) => {
      const { key, metaKey } = e;
      if (metaKey && key === 'i') {
        onChange(format(value, { parser: 'glsl-parser', plugins: [glslparser], printWidth: 120 }));
        toast.success('Code successfully formatted');
      }
    };

    window.addEventListener('keydown', _handleKeyDown);
    return () => window.removeEventListener('keydown', _handleKeyDown);
  }, []);
  return (
    <Wrapper>
      <CodeEditor
        textareaId={id}
        value={value}
        onValueChange={onChange}
        highlight={highlight}
        padding={16}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          height: 'fit-content',
          width: 'fit-content',
          whiteSpace: 'nowrap',
        }}
      />
    </Wrapper>
  );
};

export default Editor;
