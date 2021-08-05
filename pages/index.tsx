import React, { useEffect, useMemo } from 'react';
import Head from 'next/head';

import { Cursor, CursorProvider } from '../components/Cursor';
import { Noise } from '../components/Noise';

import { Footer } from '../templates/Footer';
import { Hero } from '../templates/Hero';
import { Presentation } from '../templates/Presentation';
import { Projects } from '../templates/Projects';
import { AudioPlayer } from '../components/AudioPlayer';

export default function Home() {
  return (
    <CursorProvider>
      <Head>
        <title>Hi, I&apos;m Paolo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AudioPlayer url="/audio/home.mp3" />

        <Hero />
        <Presentation />
        <Projects />
        <Footer />

        <Cursor />
        <Noise />
      </main>
    </CursorProvider>
  );
}
