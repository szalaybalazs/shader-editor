import { GetStaticPaths, GetStaticProps } from 'next';
import { FC, useState } from 'react';
import styled from 'styled-components';
import Canvas from '../../components/Canvas';
import { shaders } from '../../core/shaders';

interface iEditorProps {
  shader: string;
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const Segment = styled.div`
  height: 100vh;
  flex: 1;
  display: flex;
`;

const CodeEditor = styled.textarea`
  width: 100%;
  background-color: transparent;
  color: var(--colour-font);
  border: none;
  outline: none;
  padding: 24px;
  resize: none;
`;

const Editor: FC<iEditorProps> = ({ shader: initialShader }) => {
  const [shader, setShader] = useState(initialShader);
  return (
    <Wrapper>
      <Segment>
        <CodeEditor value={shader} onChange={({ target: { value } }) => setShader(value)} />
      </Segment>
      <Segment>
        <Canvas shader={shader} />
      </Segment>
    </Wrapper>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: shaders.map(({ id }) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (params) => {
  const shader = shaders.find((s) => s.id === params.params.id);
  if (!shader) return { notFound: true };
  return {
    props: shader,
  };
};

export default Editor;
