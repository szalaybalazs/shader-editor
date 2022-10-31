import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import { FC, Fragment, useId } from 'react';
import CodeEditor from 'react-simple-code-editor';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow-y: scroll;
`;

interface iEditorProps {
  value: string;
  onChange: (value: string) => void;
}
const highlight = (code: string) => (
  <Highlight {...defaultProps} theme={theme} code={code} language='clike'>
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
        }}
      />
    </Wrapper>
  );
};

export default Editor;
