import { useFormik } from 'formik';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import { FC, useRef } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { modalAtom } from '../../atoms/modal';
import { viewAtom } from '../../atoms/view';
import Canvas from '../../components/Canvas';
import DocumentHead from '../../components/document/Head';
import Editor from '../../components/Editor';
import Header from '../../components/Header';
import Overlay from '../../components/Overlay';
import Panes from '../../components/Panes';
import Share from '../../components/Share';
import progress from '../../core/progress';
import { record } from '../../core/record';
import { iShader } from '../../database/models/Shader';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

import { getShaderBySlug } from '../../database/shader.controller';

interface iEditorProps extends iShader {}

const EditorPage: FC<iEditorProps> = ({ code, id, name, slug, user }) => {
  const { data: session } = useSession();
  const timeout = useRef<any>(null);
  const view = useRecoilValue(viewAtom);
  const formik = useFormik({
    initialValues: {
      name,
      code,
    },
    onSubmit: async ({ name, code }) => {
      try {
        progress.start();
        await fetch('/api/shaders', {
          method: 'POST',
          body: JSON.stringify({ id, name, code }),
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error) {
      } finally {
        progress.done();
      }
    },
  });

  const _handleSave = () => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => formik.handleSubmit(), 500);
  };

  const _handleShaders = (shader: string) => {
    formik.setFieldValue('code', shader);
    _handleSave();
  };
  const _handleNameChange = (name: string) => {
    formik.setFieldValue('name', name);
    _handleSave();
  };

  const _handleShare = useRecoilCallback(
    ({ set }) =>
      () => {
        set(modalAtom, {
          title: 'Share',
          subtitle: 'Share your shader with your friends',
          content: <Share code={formik.values.code} />,
        });
      },
    [formik.values.code],
  );
  const editor = <Editor value={formik.values.code || ''} onChange={_handleShaders} />;
  const canvas = <Canvas shader={formik.values.code} />;

  return (
    <>
      <DocumentHead
        image={`https://shader-editor.vercel.app/api/og/${slug}`}
        title={`${formik.values.name} by ${user?.name}`}
      />
      <Wrapper>
        <Header
          onShare={_handleShare}
          forkable={user.id !== session?.user?.id}
          name={formik.values.name}
          onNameChange={_handleNameChange}
        />
        {view === 'SPLIT' ? (
          <Panes left={editor} right={canvas} />
        ) : (
          <>
            {editor}
            <Overlay>{canvas}</Overlay>
          </>
        )}
      </Wrapper>
    </>
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
