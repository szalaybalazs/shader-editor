import Link from 'next/link';
import { FC } from 'react';
import styled, { isStyledComponent } from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 160px;
  grid-gap: 32px;
  margin-bottom: 96px;
  grid-template-areas:
    'undi undi'
    'undi undi'
    'a b'
    'c d'
    'wallit wallit'
    'e f';

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'undi'
      'undi'
      'a'
      'b'
      'c'
      'd'
      'wallit'
      'e'
      'f';
  }
`;

interface iProjectsProps {}

const Projects: FC<iProjectsProps> = () => {
  return (
    <Wrapper>
      <Undicat />
      <Wallit />

      <Project
        title='UndiORM'
        subtitle='An advanced PostgreSQL focused ORM, Query Builder and type generator'
        url='https://github.com/szalaybalazs/orm'
      />
      <Project
        title='Solar System'
        subtitle="Proof of concept three.js site, displaying our solar system in it's true scale"
        url='https://github.com/szalaybalazs/solar-system'
      />
      <Project
        title='Next.js S3'
        subtitle='Tiny CLI utility to deploy any Next.js app on S3'
        url='https://github.com/szalaybalazs/next-s3'
      />
      <Project
        title='Airtable i18n'
        url='https://github.com/szalaybalazs/airtable-i18n'
        subtitle='CLI utility tool to generate i18n translations from airtable'
      />
      <Project
        title='Raycast Thesaurus'
        subtitle='Plugin to easily search for synonyms and antonyms for any word, using Thesaurus'
        url='https://github.com/szalaybalazs/thesaurus'
      />
      {/* <Project
        title='WebGL Game of life'
        subtitle='Game of life on the web, using only shaders'
        url='https://github.com/szalaybalazs/webgl-game-of-life'
      /> */}
      <Project title='UTM Chrome Extension' subtitle='Generate all your utm tags for any url' />
      {/* <Project
        title='Weather app'
        url='https://github.com/szalaybalazs/weather-app'
        subtitle='Proof of concept react-native weather app'
      />
      <Project title='Crocode' /> */}
    </Wrapper>
  );
};

const UndicatWrapper = styled.a`
  display: block;
  grid-area: undi;
  background-color: var(--background-secondary);
  border-radius: 8px;
  background: url(/projects/undicat-min.png);
  background-size: cover;
  background-position-x: right;
  padding: 64px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    * {
      opacity: 0.6;
    }
  }
`;
const UndicatTitle = styled.h2`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  transition: 120ms;
`;
const UndicatDescription = styled.p`
  margin: 0;
  margin-top: 8px;
  font-size: 1.125rem;
  font-weight: 400;
  color: white;
  max-width: 60%;
  transition: 120ms;
`;
const Undicat = () => {
  return (
    <UndicatWrapper href='https://undi.cat' target='_blank' rel='noreferrer'>
      <UndicatTitle>Undicat Analytics</UndicatTitle>
      <UndicatDescription>A trully transparent analytics tool.</UndicatDescription>
    </UndicatWrapper>
  );
};

const WallitWrapper = styled.a`
  grid-area: wallit;
  background-color: rgb(37, 37, 38);
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 32px;
  color: white;
  &:hover {
    text-decoration: none;
    * {
      opacity: 0.6;
    }
  }
`;
const WallitTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
`;
const WallitSubtitle = styled.p`
  margin: 0;
  margin-top: 8px;
  font-size: 0.875rem;
  font-weight: 400;
  opacity: 0.8;
  margin-right: 12px;
`;
const WallitContainer = styled.div``;
const WallitLogo = styled.img`
  height: 100%;
  aspect-ratio: 1;
  width: 136px;
  flex-shrink: 0;
`;
const Wallit = () => {
  return (
    <WallitWrapper
      href='https://apps.apple.com/us/app/wallit-no-more-plastic-cards/id1580440106'
      target='_blank'
      rel='noreferrer'
    >
      <WallitLogo height={136} width={123} alt='Wallit app icon' src='/projects/wallit-min.png' />
      <WallitContainer>
        <WallitTitle>Wallit App</WallitTitle>
        <WallitSubtitle>
          A small application to scan and store all your plastic cards in the Apple Wallet.
        </WallitSubtitle>
      </WallitContainer>
    </WallitWrapper>
  );
};

const ProjectWrapper = styled.a`
  background-color: var(--background-secondary);
  border-radius: 8px;
  border: 1px solid var(--border-colour);
  padding: 24px;
  cursor: pointer;
  color: inherit;
  &:hover {
    text-decoration: none;
    * {
      opacity: 0.8;
    }
  }
`;
const ProjectTitle = styled.strong`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
`;
const ProjectSubtitle = styled.p`
  margin: 0;
  margin-top: 8px;
`;
interface iProjectProps {
  title: string;
  subtitle?: string;
  url?: string;
}
const Project: FC<iProjectProps> = ({ title, subtitle, url }) => {
  return (
    <ProjectWrapper href={url} target='_blank' rel='noreferrer'>
      <ProjectTitle>{title}</ProjectTitle>
      {subtitle && <ProjectSubtitle>{subtitle}</ProjectSubtitle>}
    </ProjectWrapper>
  );
};

export default Projects;
