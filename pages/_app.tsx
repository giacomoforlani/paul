import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { gsap, CSSPlugin } from 'gsap';
import AOS from 'aos';

import '../styles/globals.scss';

gsap.registerPlugin(CSSPlugin);

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Component {...pageProps} />;
};

export default App;
