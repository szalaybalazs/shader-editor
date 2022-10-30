import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

const Anchor = styled.a`
  font-size: inherit;
  cursor: pointer;
`;

interface iNavLinkProps {
  children: string;
  href: string;
}

const NavLink: FC<iNavLinkProps> = ({ children, href }) => {
  if (href.startsWith('http'))
    return (
      <Anchor target='_blank' rel='noreferrer' href={href}>
        {children}
      </Anchor>
    );
  return (
    <Link href={href} passHref>
      <Anchor>{children}</Anchor>
    </Link>
  );
};

export default NavLink;
