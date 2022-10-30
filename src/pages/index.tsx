import { FC } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';
import { getShadersForUser } from '../database/shader.controller';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface iHomeProps {
  shaders: any[];
}

const Home: FC<iHomeProps> = ({ shaders }) => {
  const router = useRouter();
  const _handleCreate = () => {
    fetch('/api/shaders', { method: 'PUT' })
      .then((res) => res.json())
      .then((res) => {
        router.push(`/${res.shader.slug}`);
      });
  };
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <div>Signed in as {session.user.email}</div>
        <ul>
          {shaders.map((shader) => (
            <li key={shader.id}>
              <Link href={`/${shader.slug}`}>{shader.name}</Link>
            </li>
          ))}
          <li>
            <a onClick={_handleCreate}>Create new</a>
          </li>
        </ul>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  if (!session?.user) return { props: {} };

  const shaders = await getShadersForUser(session?.user?.id);

  return { props: { shaders: JSON.parse(JSON.stringify(shaders)) } };
};

export default Home;
