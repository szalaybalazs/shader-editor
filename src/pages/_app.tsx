import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import '../styles/main.scss';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Toaster />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
