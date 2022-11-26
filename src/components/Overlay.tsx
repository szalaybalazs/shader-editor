import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  right: 24px;
  bottom: 24px;
  width: 420px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--colour-border);
`;

interface iOverlayProps {
  children: ReactNode;
}

const Overlay: FC<iOverlayProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Overlay;
