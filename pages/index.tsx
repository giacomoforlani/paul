import React from 'react';
import Head from 'next/head';

import { Noise } from '../components/Noise';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Presentation } from '../components/Presentation';
import { Bubbles } from '../components/Bubbles';
import { Projects } from '../components/Projects';
import { Spheres } from '../components/Spheres';
import { Waves } from '../components/Waves';
import { Cursor } from '../components/Cursor';

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
        {/* <Bubbles /> */}
        <Spheres />
        <Noise />
      </main>
    </>
  );
}
