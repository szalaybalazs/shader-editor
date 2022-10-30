import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: var(--max-width);
  max-width: calc(100vw - 64px);
  margin: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
`;

interface iContainerProps {
  children: ReactNode;
}

const Container: FC<iContainerProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
