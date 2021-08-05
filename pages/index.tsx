import React, {
  useCallback, useMemo, useState,
} from 'react';
import Head from 'next/head';

import { Footer } from '../templates/Footer';
import { Hero } from '../templates/Hero';
import { Presentation } from '../templates/Presentation';
import { Projects } from '../templates/Projects';

import { AudioPlayer } from '../components/AudioPlayer';
import { Cursor, CursorProvider } from '../components/Cursor';
import { Logo } from '../components/Logo';
import { Navbar } from '../components/Navbar';
import { Noise } from '../components/Noise';
import { useScroll } from '../core/hooks';

import styles from './index.module.scss';

export default function Home() {
  const scroll = useScroll();

  const [heroHeight, setHeroHeight] = useState<number>();
  const [footerTop, setFooterTop] = useState<number>();

  const isHeroSurpassed = useMemo(() => heroHeight && scroll >= heroHeight, [heroHeight, scroll]);
  const isFooterReached = useMemo(() => footerTop && scroll >= footerTop, [footerTop, scroll]);
  const isNavbarWhite = useMemo(
    () => isHeroSurpassed && !isFooterReached,
    [isFooterReached, isHeroSurpassed],
  );

  const onInitHeroRef = useCallback((ref: HTMLDivElement | null) => {
    setHeroHeight(ref?.clientHeight);
  }, []);

  const onInitFooterRef = useCallback((ref: HTMLDivElement | null) => {
    setFooterTop(ref?.offsetTop);
  }, []);

  return (
    <CursorProvider>
      <Head>
        <title>Hi, I&apos;m Paolo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar className={isNavbarWhite ? styles['Navbar--white'] : styles['Navbar--blue']}>
          <Logo color={isNavbarWhite ? '#ffffff' : '#122031'} />
          <AudioPlayer url="/audio/home.mp3" />
        </Navbar>

        <Hero ref={onInitHeroRef} />
        <Presentation />
        <Projects />
        <Footer ref={onInitFooterRef} />

        <Cursor />
        <Noise />
      </main>
    </CursorProvider>
  );
}
