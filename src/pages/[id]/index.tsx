import { useFormik } from 'formik';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { viewAtom } from '../../atoms/view';
import Canvas from '../../components/Canvas';
import Editor from '../../components/Editor';
import Header from '../../components/Header';
import Overlay from '../../components/Overlay';
import Panes from '../../components/Panes';
import { iShader } from '../../database/models/Shader';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

import { getShaderBySlug } from '../../database/shader.controller';

interface iEditorProps extends iShader {}

const EditorPage: FC<iEditorProps> = ({ code, id, name }) => {
  const view = useRecoilValue(viewAtom);
  const formik = useFormik({
    initialValues: {
      name,
      code,
    },
    onSubmit: () => {},
  });

  const _handleShaders = (shader: string) => formik.setFieldValue('code', shader);
  const _handleNameChange = (name: string) => formik.setFieldValue('name', name);

  const _handleUpdate = (id: string, shader: string) => {
    fetch('/api/shaders', {
      method: 'POST',
      body: JSON.stringify({ id, shader }),
      headers: { 'Content-Type': 'application/json' },
    });
  };

  const editor = <Editor value={formik.values.code} onChange={_handleShaders} />;
  const canvas = <Canvas shader={formik.values.code} />;

  return (
    <Wrapper>
      <Header name={formik.values.name} onNameChange={_handleNameChange} />
      {view === 'SPLIT' ? (
        <Panes left={editor} right={canvas} />
      ) : (
        <>
          {editor}
          <Overlay>{canvas}</Overlay>
        </>
      )}
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
