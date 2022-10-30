import { FC } from 'react';
import Header from '../Header';
import DocumentHead from './Head';
import styled from 'styled-components';
import Footer from '../Footer';

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
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
