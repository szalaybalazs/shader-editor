import { FC } from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import DocumentHead from './Head';

interface iLayoutProps {
  title?: string;
  children?: React.ReactNode;
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Layout: FC<iLayoutProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <DocumentHead title={title} />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
