import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import Container from '../components/blog/Container';

interface iNotFoundProps {}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h2`
  font-size: 1.75rem;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  margin: 0;
  margin-top: 1.25rem;
`;

interface iSpacerProps {
  size: number;
}
const Spacer = styled.div<iSpacerProps>`
  flex: ${(props) => props.size};
`;

const NotFound: FC<iNotFoundProps> = () => {
  return (
    <Container>
      <Wrapper>
        <Spacer size={1} />
        <Heading>404 – Page not found</Heading>
        <Subtitle>
          This is not the page you are looking for. Back to the{' '}
          <Link href='/' passHref>
            home page
          </Link>
          .
        </Subtitle>
        <Spacer size={2} />
      </Wrapper>
    </Container>
  );
};

export default NotFound;
