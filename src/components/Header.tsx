import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ChangeEvent, FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import FullIcon from './icons/Full';
import Overlay from './icons/Overlay';
import SplitPaneIcon from './icons/SplitPane';

const Logo = styled.div`
  height: 42px;
  width: 42px;
  background-color: var(--colour-primary);
  border-radius: 6px;
  border: 1px solid var(--background-secondary);
`;

const Login = styled.button`
  background-color: var(--colour-primary);
  border-radius: 6px;
  border: 1px solid var(--background-secondary);
  padding: 12px 24px;
  font-family: var(--font-main);
  font-weight: 500;
  cursor: pointer;
  color: white;
  transition: 120ms;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.8);
  }
  &:focus {
    box-shadow: 0 0 0 4px var(--colour-primary-translucent);
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 500px;
  border: 1px solid var(--border-colour);
`;

const Wrapper = styled.header`
  height: 64px;
  border-bottom: 1px solid var(--border-colour);
  width: 100vw;
  display: flex;
  align-items: center;
  padding-inline: 12px;
  gap: 12px;
  box-sizing: border-box;
`;

const Name = styled.input`
  border-radius: 6px;
  background-color: var(--background-secondary);
  border: 1px solid var(--background-secondary);
  height: 42px;
  box-sizing: border-box;
  color: var(--colour-font);
  font-family: var(--font-main);
  padding: 12px 14px;
  width: 240px;
  transition: 120ms;
  &:focus {
    border-color: var(--colour-primary);
    box-shadow: 0 0 0 4px var(--colour-primary-translucent);
  }
`;

interface iHeaderProps {
  name: string;
  onNameChange: (name: string) => void;
}

const ViewSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 4px;
  gap: 2px;
  background-color: var(--background-secondary);
`;

const ViewOption = styled.button<{ active: boolean }>`
  height: 36px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  color: ${(p) => (p.active ? 'var(--colour-primary)' : 'var(--colour-font)')};
  opacity: ${(p) => (p.active ? 1 : 0.8)};
  z-index: 2;
  transition: 160ms;
  cursor: pointer;
  svg {
    height: 16px;
  }
  &:hover {
  }
`;

const Background = styled.div<{ offsetLeft: number }>`
  height: 36px;
  width: 36px;
  transform: translateX(${(p) => p.offsetLeft}px);
  background-color: var(--border-colour);
  position: absolute;
  border-radius: 4px;
  transition: 160ms ease-in-out;
`;

type eViewOption = 'SPLIT' | 'OVERLAY' | 'FULL';

const offsets = {
  SPLIT: 0,
  OVERLAY: 36 + 2,
  FULL: 72 + 4,
};

interface iViewSelectorProps {
  active: eViewOption;
  onViewChange: (view: eViewOption) => void;
}

const ViewSelector: FC<iViewSelectorProps> = ({ active, onViewChange }) => {
  const [activeOption, setActiveOption] = useState(active);

  const _handleHighlight = (view: eViewOption) => () => setActiveOption(view);
  const _handleSelect = (view: eViewOption) => () => onViewChange(view);
  const _handleMouseLeave = () => setActiveOption(active);
  return (
    <ViewSelectorWrapper onMouseLeave={_handleMouseLeave}>
      <ViewOption active={'SPLIT' === active} onMouseEnter={_handleHighlight('SPLIT')} onClick={_handleSelect('SPLIT')}>
        <SplitPaneIcon />
      </ViewOption>
      <ViewOption
        active={'OVERLAY' === active}
        onMouseEnter={_handleHighlight('OVERLAY')}
        onClick={_handleSelect('OVERLAY')}
      >
        <Overlay />
      </ViewOption>
      <ViewOption active={'FULL' === active} onMouseEnter={_handleHighlight('FULL')} onClick={_handleSelect('FULL')}>
        <FullIcon />
      </ViewOption>
      <Background offsetLeft={offsets[activeOption]} />
    </ViewSelectorWrapper>
  );
};

const Header: FC<iHeaderProps> = ({ name, onNameChange }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const _handleChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      onNameChange(value);
    },
    [onNameChange],
  );

  const _handleViewChange = (view: eViewOption) => {
    const { id } = router.query;
    console.log(router);
    if (view === 'FULL') return router.push(`/${id}/full`);
    // router.push(`/${}`)
  };

  const _handleLogin = useCallback(() => signIn(), []);

  return (
    <Wrapper>
      <Link href='/'>
        <Logo />
      </Link>
      <Name value={name} onChange={_handleChange} />
      <Spacer />
      <ViewSelector active='SPLIT' onViewChange={_handleViewChange} />
      {session?.user ? <Avatar src={session.user?.image} /> : <Login onClick={_handleLogin}>Login</Login>}
    </Wrapper>
  );
};

export default Header;
