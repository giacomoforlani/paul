import type { AppProps } from 'next/app';
import React from 'react';
import { gsap, CSSPlugin } from 'gsap';

import '../styles/globals.scss';

gsap.registerPlugin(CSSPlugin);

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
