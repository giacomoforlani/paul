import React from 'react';
import Head from 'next/head';

import { Bubbles } from '../components/Bubbles';
import { Cursor, CursorProvider } from '../components/Cursor';
import { Noise } from '../components/Noise';

import { Footer } from '../templates/Footer';
import { Hero } from '../templates/Hero';
import { Presentation } from '../templates/Presentation';
import { Projects } from '../templates/Projects';

export default function Home() {
  return (
    <CursorProvider>
      <Head>
        <title>Hi, I&apos;m Paolo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Presentation />
        <Projects />
        <Footer />

        <Cursor />
        <Bubbles />
        <Noise />
      </main>
    </CursorProvider>
  );
}
