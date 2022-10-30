import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import styled from 'styled-components';
import Canvas from '../../components/Canvas';
import { shaders } from '../../core/shaders';

interface iFullProps {
  shader: string;
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Full: FC<iFullProps> = ({ shader }) => {
  return (
    <Wrapper>
      <Canvas shader={shader} />
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

export default Full;
