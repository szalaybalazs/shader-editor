import { GetServerSideProps } from 'next';
import { FC } from 'react';
import styled from 'styled-components';
import Canvas from '../../components/Canvas';
import { getShaderBySlug } from '../../database/shader.controller';

interface iFullProps {
  code: string;
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Full: FC<iFullProps> = ({ code }) => {
  return (
    <Wrapper>
      <Canvas shader={code} />
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

export default Full;
