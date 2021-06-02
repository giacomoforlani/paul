import React from 'react';
import Particles from 'react-particles-js';
import styles from './bubbles.module.scss';

const Bubbles = () => (
  <Particles
    className={styles.Bubbles}
    params={{
      particles: {
        color: {
          value: '#fff',
        },
        line_linked: {
          enable: false,
        },
        move: {
          direction: 'top',
          out_mode: 'out',
          random: true,
          speed: 1,
        },
        number: {
          value: 20,
        },
        size: {
          anim: {
            size_min: 0.3,
            speed: 4,
          },
          random: true,
          value: 10,
        },
      },
    }}
  />
);

export { Bubbles };
