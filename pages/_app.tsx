/* eslint-disable global-require */

import { gsap } from 'gsap';
import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';

import { BodyProvider } from '../core/services';

import { AudioPlayerProvider } from '../components/AudioPlayer';
import { Loader } from '../components/Loader';

import '../styles/globals.scss';

const registerGsapPlusings = async () => {
  const CSSPlugin = await require('gsap');
  gsap.registerPlugin(CSSPlugin);
};

const App = ({ Component, pageProps }: AppProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    registerGsapPlusings();
  }, []);

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
