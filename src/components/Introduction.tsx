import { FC } from 'react';
import styled from 'styled-components';
import Container from './blog/Container';

interface iIntroductionProps {}

const Wrapper = styled.div`
  padding-top: 64px;
  padding-bottom: 32px;
`;
const Strong = styled.strong`
  color: var(--colour-font);
  font-weight: 700;
`;
const Content = styled.p`
  font-size: 2rem;
  line-height: 1.75;
  font-weight: 500;
  color: var(--colour-font-translucent);
  letter-spacing: 0.2px;
  margin: 0;
  margin-bottom: 32px;
`;
const SecondaryContent = styled(Content)`
  font-size: 1.5rem;
`;
const Wave = styled.span`
  /* margin-bottom: -20px;
  margin-right: -45px;
  padding-bottom: 20px;
  padding-right: 45px;
  display: inline-block;
  transform: rotate(45deg); */
`;

const Introduction: FC<iIntroductionProps> = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Strong>
            Hi, <Wave>👋🏻</Wave> I&apos;m Balázs, and this is my blog.
          </Strong>{' '}
          Here, I share my experience through my writing as a web engineer and everything I&apos;m learning about on
          React, Serverless, Next.js and WebGL.
        </Content>
        <SecondaryContent>
          When I am not writing this blog, I work as CTO at{' '}
          <a href='https://triyit.co.uk?utm_source=szalayme' target='_blank' rel='noreferrer'>
            Triyit
          </a>{' '}
          or work on{' '}
          <a href='https://undicat.com/?utm_source=szalayme' target='_blank' rel='noreferrer'>
            Undicat
          </a>
          , a privacy-focused analytics tool.
        </SecondaryContent>
        <SecondaryContent>
          Also trying to be fairly active on{' '}
          <a href='https://twitter.com/szalay.me' target='_blank' rel='noreferrer'>
            Twitter
          </a>
          .
        </SecondaryContent>
      </Container>
    </Wrapper>
  );
};

export default Introduction;
