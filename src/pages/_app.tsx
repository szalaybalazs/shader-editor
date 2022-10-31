import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import { RecoilRoot } from 'recoil';
import '../styles/main.scss';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <Toaster />
        <Component {...pageProps} />
      </SessionProvider>
    </RecoilRoot>
  );
}

export default MyApp;
