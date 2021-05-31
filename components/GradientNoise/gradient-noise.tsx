import React from 'react';
import styles from './gradient-noise.module.scss';

const GradientNoise = () => (
  <div
    style={{
      backgroundImage: 'url(/images/gradient-noise.png)',
      height: '100vh',
      left: 0,
      mixBlendMode: 'soft-light',
      position: 'fixed',
      top: 0,
      width: '100vw',
      zIndex: 0,
    }}
  />
);

export { GradientNoise };
