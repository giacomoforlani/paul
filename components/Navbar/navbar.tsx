import React, { PropsWithChildren } from 'react';

import styles from './navbar.module.scss';

type NavbarProps = PropsWithChildren<PropsWithClass<{}>>;

const Navbar = ({
  children,
  className,
}: NavbarProps) => (
  <div className={[styles.Navbar, className].join(' ')}>
    {children}
  </div>
);

export type { NavbarProps };

export { Navbar };
