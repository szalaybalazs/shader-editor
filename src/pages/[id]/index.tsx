import { GetServerSideProps } from 'next';
import { FC, useState } from 'react';
import styled from 'styled-components';
import Canvas from '../../components/Canvas';
import Editor from '../../components/Editor';
import { getShaderBySlug } from '../../database/shader.controller';

interface iEditorProps {
  shader: string;
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Segment = styled.div`
  height: 100vh;
  flex: 1;
  display: flex;
`;

const EditorPage: FC<iEditorProps> = ({ shader: initialShader }) => {
  const [shader, setShader] = useState(initialShader);
  return (
    <Wrapper>
      <Segment>
        <Editor value={shader} onChange={setShader} />
      </Segment>
      <Segment>
        <Canvas shader={shader} />
      </Segment>
    </Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const shader = await getShaderBySlug(String(params.id));
  if (!shader) return { notFound: true, props: {} };

  return {
    props: JSON.parse(JSON.stringify(shader)),
  };
};

export default EditorPage;
