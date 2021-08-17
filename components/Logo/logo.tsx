import React from 'react';
import { Link } from '../Link';

import styles from './logo.module.scss';

type LogoProps = {
  color: 'blue' | 'white';
  onClick?: () => void;
}

const Logo = ({
  color = 'blue',
  onClick,
}: LogoProps) => (
  <Link
    className={[styles.Logo, onClick ? styles['Logo--hoverable'] : ''].join(' ')}
    showBorder={false}
    onClick={onClick}
  >
    <img
      className={styles.Logo__Img}
      style={{ opacity: color === 'white' ? 1 : 0 }}
      src="/images/logo-white.gif"
      alt="logo"
    />

    <img
      className={styles.Logo__Img}
      style={{ opacity: color === 'blue' ? 1 : 0 }}
      src="/images/logo-blue.gif"
      alt="logo"
    />
  </Link>
);

export { Logo };
