import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ChangeEvent, FC, useCallback, useEffect } from 'react';
import { useRecoilCallback, useRecoilState } from 'recoil';
import styled from 'styled-components';
import { modalAtom } from '../atoms/modal';
import { viewAtom } from '../atoms/view';
import { eViewOption } from '../types/view';
import ViewSelector from './ViewSelector';

const Logo = styled.div`
  height: 42px;
  width: 42px;
  background-color: var(--colour-primary);
  border-radius: 6px;
`;

const Button = styled.button`
  background-color: var(--background-secondary);
  border-radius: 6px;
  border: none;
  padding: 0 32px;
  height: 42px;
  line-height: 42px;
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
    box-shadow: 0 0 0 4px var(--border-colour);
  }
`;

const ButtonPrimary = styled(Button)`
  background-color: var(--colour-primary);
  &:focus {
    box-shadow: 0 0 0 4px var(--colour-primary-translucent);
  }
`;

const Login = styled(Button)``;

const Spacer = styled.div`
  flex: 1;
  display: flex;
  gap: 12px;
`;

const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 500px;
  border: 1px solid var(--border-colour);
  box-sizing: border-box;
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
  width: 420px;
  transition: 120ms;
  &:focus {
    border-color: var(--colour-primary);
    box-shadow: 0 0 0 4px var(--colour-primary-translucent);
  }
`;

const WIPWrapper = styled.div`
  font-size: 1rem;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 500;
  opacity: 0.6;
`;

interface iHeaderProps {
  name: string;
  onNameChange: (name: string) => void;
  forkable?: boolean;
  onShare?: () => void;
}

const Header: FC<iHeaderProps> = ({ name, onNameChange, forkable, onShare }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [view, setView] = useRecoilState(viewAtom);

  useEffect(() => {
    const view = localStorage.getItem('view');
    if (view) setView(view as eViewOption);
  }, [setView]);

  const _handleChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      onNameChange(value);
    },
    [onNameChange],
  );

  const _handleViewChange = (view: eViewOption) => {
    const { id } = router.query;
    if (view === 'FULL') return router.push(`/${id}/full`);
    else setView(view);
  };

  const _handleLogin = useCallback(() => signIn(), []);

  const _handleFork = useRecoilCallback(
    ({ set }) =>
      () => {
        set(modalAtom, { title: 'Fork', subtitle: 'Fork this shader', content: <></> });
      },
    [],
  );

  return (
    <Wrapper>
      <Spacer>
        <Link href='/'>
          <Logo />
        </Link>
      </Spacer>
      <Name value={name} onChange={_handleChange} />
      <Spacer>
        <Spacer />
        <ViewSelector active={view} onViewChange={_handleViewChange} />
        {forkable && <Button onClick={_handleFork}>Fork</Button>}
        {onShare && <ButtonPrimary onClick={onShare}>Share</ButtonPrimary>}
        {session?.user ? <Avatar src={session.user?.image} /> : <Login onClick={_handleLogin}>Login</Login>}
      </Spacer>
    </Wrapper>
  );
};

export default Header;
