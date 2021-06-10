import React from 'react';

import styles from './spheres.module.scss';

const Spheres = () => (
  <>
    <img
      className={[styles.Spheres__Image, styles['Spheres__Image--01']].join(' ')}
      src="/images/sphere.png"
      alt="sphere-01"
    />

    <img
      className={[styles.Spheres__Image, styles['Spheres__Image--02']].join(' ')}
      src="/images/sphere.png"
      alt="sphere-02"
    />

    <img
      className={[styles.Spheres__Image, styles['Spheres__Image--03']].join(' ')}
      src="/images/sphere.png"
      alt="sphere-03"
    />
  </>
);

export { Spheres };
