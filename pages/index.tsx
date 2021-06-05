import React from 'react';
import Head from 'next/head';

import { Noise } from '../layout/Noise';
import { Footer } from '../layout/Footer';
import { Hero } from '../layout/Hero';
import { Presentation } from '../layout/Presentation';
import { Bubbles } from '../layout/Bubbles';
import { Projects } from '../layout/Projects';
import { Spheres } from '../layout/Spheres';
import { Waves } from '../layout/Waves';

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

        <Bubbles />
        <Spheres />
        <Noise />
      </main>
    </>
  );
}
