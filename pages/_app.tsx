import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { gsap, CSSPlugin } from 'gsap';
import AOS from 'aos';

import { BodyProvider } from '../core/services';

import '../styles/globals.scss';
import { Loader } from '../components/Loader';

gsap.registerPlugin(CSSPlugin);

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({ });
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <BodyProvider>
      <Loader loading={isLoading} />
      <Component {...pageProps} />
    </BodyProvider>
  );
};

export default App;
