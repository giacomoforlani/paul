import '../styles/globals.scss';

import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => window.scrollTo(0, 1), []);
  return <Component {...pageProps} />;
};

export default App;
