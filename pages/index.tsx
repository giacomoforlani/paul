import React from 'react';
import Head from 'next/head';
import { Noise } from '../components/Noise';
import { Footer } from '../layout/Footer';
import { Hero } from '../layout/Hero';
import { Presentation } from '../layout/Presentation';
import { Projects } from '../layout/Projects';
import { Bubbles } from '../components/Bubbles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi, I&apos;m Paolo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Bubbles />

        <Hero />
        <Presentation />
        <Projects />
        <Footer />

        <Noise />
      </main>
    </>
  );
}
