import React from 'react';

import { ParallaxItem } from '../../lib/components/ParallaxItem';

import styles from './sphere.module.scss';

type SphereProps = PropsWithClass<{
  size: 'small' | 'large';
}>;

const Sphere = ({
  className,
  size,
}: SphereProps) => (
  <ParallaxItem
    className={[
      styles.Sphere,
      styles[`Sphere--${size}`],
      className,
    ].join(' ')}
    speed={-0.2}
  >
    <img
      src="/images/sphere.png"
      alt="sphere"
    />
  </ParallaxItem>
);

export { Sphere };
