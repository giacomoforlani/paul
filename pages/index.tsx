import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import Head from 'next/head';

import { Footer } from '../templates/Footer';
import { Hero } from '../templates/Hero';
import { Presentation } from '../templates/Presentation';
import { Projects } from '../templates/Projects';

import { Cursor, CursorProvider } from '../components/Cursor';
import { Navbar } from '../components/Navbar';
import { Noise } from '../components/Noise';
import { useScroll } from '../core/hooks';

const calculateHeroTollerance = (height: number) => (
  window.innerWidth < 500
    ? (height * 0.80)
    : window.innerWidth < 800
      ? (height * 0.40)
      : 0
);

export default function Home() {
  const timer = useRef<NodeJS.Timeout>();
  const scroll = useScroll();

  const [heroHeight, setHeroHeight] = useState<number>(0);
  const [heroTollerance, setHeroTollerance] = useState<number>(0);

  const isHeroSurpassed = useMemo(
    () => (typeof heroHeight === 'number'
      && scroll >= heroHeight - heroTollerance
    ),
    [heroHeight, heroTollerance, scroll],
  );

  const onInitHeroRef = useCallback((ref: HTMLDivElement | null) => {
    if (ref) {
      const height = ref.clientHeight;
      setHeroHeight(height);
      setHeroTollerance(calculateHeroTollerance(height));
    }
  }, []);

  const onWindowResize = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(
      () => setHeroTollerance(calculateHeroTollerance(heroHeight)),
      500,
    );
  }, [heroHeight]);

  useEffect(() => {
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, [onWindowResize]);

  return (
    <CursorProvider>
      <Head>
        <title>Hi, I&apos;m Paolo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar isSticky={isHeroSurpassed} />

        <Hero ref={onInitHeroRef} />
        <Presentation />
        <Projects />
        <Footer />

        <Cursor />
        <Noise />
      </main>
    </CursorProvider>
  );
}
