import { GetServerSideProps } from 'next';
import { FC, useEffect, useState } from 'react';
import Canvas from '../../components/Canvas';
import Editor from '../../components/Editor';
import Panes from '../../components/Panes';
import { iShader } from '../../database/models/Shader';

import { getShaderBySlug } from '../../database/shader.controller';

interface iEditorProps extends iShader {}

const EditorPage: FC<iEditorProps> = ({ code, id }) => {
  const [shader, setShader] = useState(code);

  const _handleUpdate = (id: string, shader: string) => {
    fetch('/api/shaders', {
      method: 'POST',
      body: JSON.stringify({ id, shader }),
      headers: { 'Content-Type': 'application/json' },
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => _handleUpdate(id, shader), 500);
    return () => clearTimeout(timeout);
  }, [shader]);
  return <Panes left={<Editor value={shader} onChange={setShader} />} right={<Canvas shader={shader} />} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const shader = await getShaderBySlug(String(params.id));
  if (!shader) return { notFound: true, props: {} };

  return {
    props: JSON.parse(JSON.stringify(shader)),
  };
};

export default EditorPage;
