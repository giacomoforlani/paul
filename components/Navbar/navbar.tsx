import React from 'react';
import { AudioPlayer } from '../AudioPlayer';
import { Logo } from '../Logo';

import styles from './navbar.module.scss';

type NavbarProps = {
  isSticky?: boolean;
};

const Navbar = ({
  isSticky = false,
}: NavbarProps) => (
  <div className={[styles.Navbar, isSticky ? styles['Navbar--sticky'] : ''].join(' ')}>
    <Logo color={isSticky ? '#ffffff' : '#122031'} />
    <AudioPlayer url="/audio/home.mp3" />
  </div>
);

export type { NavbarProps };

export { Navbar };
