import '../styles/globals.css';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Component pageProps={pageProps} />;
    </SessionProvider>
  );
}

export default MyApp;
