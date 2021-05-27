import Head from 'next/head';
import React from 'react';

import { Footer } from '../layout/Footer';
import { Hero } from '../layout/Hero';
import { Presentation } from '../layout/Presentation';
import { Projects } from '../layout/Projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi, I&apos;m Paolo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Presentation />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
