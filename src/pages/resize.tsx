import { FC } from 'react';
import styled from 'styled-components';
import Panes from '../components/Panes';

interface iresizeProps {}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
const resize: FC<iresizeProps> = () => {
  return (
    <Wrapper>
      <Panes left={<span>Left</span>} right={<span>Right</span>} />
    </Wrapper>
  );
};

export default resize;
