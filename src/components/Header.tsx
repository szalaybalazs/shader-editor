import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useMemo, useState } from 'react';
import { flushSync } from 'react-dom';
import styled from 'styled-components';

interface iHeaderProps {}

const Placeholder = styled.div`
  height: 120px;
`;

const Wrapper = styled(Placeholder)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 1024;
  pointer-events: none;
`;

const HeaderComponent = styled.header<{ isScrolled: boolean; isMounted: boolean }>`
  pointer-events: all;
  border-bottom: 1px solid var(--border-colour);
  border-color: ${(p) => (p.isScrolled ? 'var(--border-colour)' : 'transparent')};
  background: ${(p) => (p.isScrolled ? 'var(--background-primary-translucent)' : 'transparent')};
  height: ${(p) => (p.isScrolled ? 64 : 120)}px;
  display: flex;
  align-items: center;
  padding-inline: 16px;
  font-size: 14px;
  transition: ${(p) => (p.isMounted ? '320ms ease-in-out' : 'none')};

  backdrop-filter: blur(6px);
`;

const Nav = styled.nav`
  width: 100vw;
  max-width: calc(var(--max-width) + 32px);
  display: flex;
`;

const Spacer = styled.div`
  flex: 1;
`;

const Header: FC<iHeaderProps> = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const _handleScroll = () => flushSync(() => setIsScrolled(window.scrollY > 50));
    _handleScroll();

    setIsMounted(true);
    window.addEventListener('scroll', _handleScroll);
    return () => window.removeEventListener('scroll', _handleScroll);
  }, []);
  return (
    <>
      <Placeholder />
      <Wrapper>
        <HeaderComponent isScrolled={isScrolled} isMounted={isMounted}>
          <Spacer />
          <Nav>
            <ActiveLink href='/' label='Home' />
            <ActiveLink href='/articles' label='Articles' />
            <ActiveLink href='https://twitter.com/szalayme' label='Twitter' />
            <ActiveLink href='/about' label='About' />
          </Nav>
          <Spacer />
        </HeaderComponent>
      </Wrapper>
    </>
  );
};

interface iNavlinkProps {
  readonly active: boolean;
}
const NavLink = styled.div<iNavlinkProps>`
  line-height: 64px;
  height: 100%;
  opacity: ${(props) => (props.active ? 1 : 0.6)};
  color: ${(props) => props.active && 'var(--colour-primary)'};
  &:hover {
    opacity: 1;
    text-decoration: none;
  }
  a {
    display: block;
    line-height: 64px;
    padding-inline: 16px;
    text-decoration: none;
    font-weight: 500;
    color: inherit;
    &:hover {
      opacity: 1;
      text-decoration: none;
    }
  }
`;

interface iActiveLink {
  href: string;
  label: string;
}
const ActiveLink: FC<iActiveLink> = ({ href, label }) => {
  const { asPath } = useRouter();

  const isActive = useMemo(() => {
    if (href.startsWith('http')) return false;

    if (href === '/') return asPath === href;
    return asPath.startsWith(href);
  }, [asPath, href]);

  return (
    <NavLink active={isActive}>
      {href.startsWith('https') ? (
        <a target='_blank' rel='noreferrer' href={href}>
          {label}
        </a>
      ) : (
        <Link href={href} passHref>
          <a>{label}</a>
        </Link>
      )}
    </NavLink>
  );
};

export default Header;
