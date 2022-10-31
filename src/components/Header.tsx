import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

import { ChangeEvent, FC, useCallback } from 'react';
import styled from 'styled-components';

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

const Header: FC<iHeaderProps> = ({ name, onNameChange }) => {
  const { data: session } = useSession();
  const _handleChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      onNameChange(value);
    },
    [onNameChange],
  );

  const _handleLogin = useCallback(() => signIn(), []);

  return (
    <Wrapper>
      <Link href='/'>
        <Logo />
      </Link>
      <Name value={name} onChange={_handleChange} />
      <Spacer />

      {session?.user ? <Avatar src={session.user?.image} /> : <Login onClick={_handleLogin}>Login</Login>}
    </Wrapper>
  );
};

export default Header;
