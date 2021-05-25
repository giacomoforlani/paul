import Head from 'next/head';
import React from 'react';
import { Hero } from '../layout/Hero';
import { Presentation } from '../layout/Presentation';

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
      </main>
    </>
  );
}
