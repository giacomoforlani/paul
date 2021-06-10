import React from 'react';
import Head from 'next/head';

import { Bubbles } from '../components/Bubbles';
import { Cursor } from '../components/Cursor';
import { Noise } from '../components/Noise';
import { Spheres } from '../components/Spheres';
import { Waves } from '../components/Waves';

import { Footer } from '../templates/Footer';
import { Hero } from '../templates/Hero';
import { Presentation } from '../templates/Presentation';
import { Projects } from '../templates/Projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi, I&apos;m Paolo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Waves />
        <Presentation />
        <Projects />
        <Waves reverse />
        <Footer />

        <Cursor />
        <Bubbles />
        <Spheres />
        <Noise />
      </main>
    </>
  );
}
