import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { gsap, CSSPlugin } from 'gsap';
import AOS from 'aos';

import { BodyProvider } from '../core/services';

import '../styles/globals.scss';
import { Loader } from '../components/Loader';
import { AudioPlayerProvider } from '../components/AudioPlayer';

gsap.registerPlugin(CSSPlugin);

const App = ({ Component, pageProps }: AppProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({});
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <BodyProvider>
      <AudioPlayerProvider>
        <Loader loading={isLoading} />
        <Component {...pageProps} />
      </AudioPlayerProvider>
    </BodyProvider>
  );
};

export default App;
