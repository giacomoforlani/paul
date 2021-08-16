import React from 'react';
import Head from 'next/head';

import { Footer } from '../templates/Footer';
import { Hero } from '../templates/Hero';
import { Presentation } from '../templates/Presentation';
import { Projects } from '../templates/Projects';

import { Cursor, CursorProvider } from '../components/Cursor';
import { Navbar } from '../components/Navbar';
import { Gradient } from '../components/Gradient';

export default function Home() {
  return (
    <CursorProvider>
      <Head>
        <title>Hi, I&apos;m Paolo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />

        <Hero />
        <Presentation />
        <Projects />
        <Footer />

        <Cursor />
        <Gradient />
      </main>
    </CursorProvider>
  );
}
