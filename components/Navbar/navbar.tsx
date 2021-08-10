import React, { useCallback } from 'react';
import { useScroll } from '../../core/hooks';
import { AudioPlayer } from '../AudioPlayer';
import { Logo } from '../Logo';

import styles from './navbar.module.scss';

type NavbarProps = {
  isSticky?: boolean;
};

const Navbar = () => {
  const scroll = useScroll();
  const isSticky = process.browser
    ? scroll > window.innerHeight * 0.1
    : false;

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={[styles.Navbar, isSticky ? styles['Navbar--sticky'] : ''].join(' ')}>
      <Logo
        color={isSticky ? '#ffffff' : '#122031'}
        onClick={scrollToTop}
      />
      <AudioPlayer url="/audio/home.mp3" />
    </div>
  );
};

export type { NavbarProps };

export { Navbar };
