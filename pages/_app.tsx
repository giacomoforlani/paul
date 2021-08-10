/* eslint-disable global-require */

import { gsap } from 'gsap';
import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import TagManager from 'react-gtm-module';

import { BodyProvider } from '../core/services';

import { AudioPlayerProvider } from '../components/AudioPlayer';
import { Loader } from '../components/Loader';
import { Scrollbar } from '../components/Scrollbar';

import '../styles/globals.scss';

const registerGsapPlusings = async () => {
  const CSSPlugin = await require('gsap');
  gsap.registerPlugin(CSSPlugin);
};

const initGoogleAnalytics = () => {
  if (process.env.NEXT_PUBLIC_GTM_ID) {
    TagManager.initialize({
      gtmId: process.env.NEXT_PUBLIC_GTM_ID,
    });
  }
};

const initAos = () => {
  AOS.init({});
};

const App = ({ Component, pageProps }: AppProps) => {
  const isTouchDevice = process.browser
    && (
      'ontouchstart' in window
      || (navigator.maxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0)
    );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initGoogleAnalytics();
  }, []);

  useEffect(() => {
    registerGsapPlusings();
  }, []);

  useEffect(() => {
    initAos();
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
        {!isTouchDevice && <Scrollbar />}
        <Loader loading={isLoading} />
        <Component {...pageProps} />
      </AudioPlayerProvider>
    </BodyProvider>
  );
};

export default App;
