import React from 'react';

import styles from './logo.module.scss';

type LogoProps = {
  color?: string;
  onClick?: () => void;
}

const Logo = ({
  color = '#122031',
  onClick,
}: LogoProps) => (
  <svg
    className={[styles.Logo, onClick ? styles['Logo--hoverable'] : ''].join(' ')}
    xmlns="http://www.w3.org/2000/svg"
    width="36.582"
    height="54.451"
    viewBox="0 0 36.582 54.451"
    onClick={onClick}
  >
    <circle
      cx="5.018"
      cy="5.018"
      r="5.018"
      fill={color}
    />

    <path
      d="M168.821,864.608H147.075v2.509l36.582,9.145Q182.064,864.61,168.821,864.608Z"
      transform="translate(-147.075 -821.811)"
      fill={color}
    />

    <circle
      cx="11.71"
      cy="11.71"
      r="11.71"
      transform="translate(10.037 9.341)"
      fill={color}
    />
  </svg>
);

export { Logo };
