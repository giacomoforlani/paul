import React from 'react';

import { ParallaxItem } from '../../lib/components/ParallaxItem';

import styles from './sphere.module.scss';

type SphereProps = PropsWithClass<{
  size: 'small' | 'large';
  zIndex?: number;
}>;

const Sphere = ({
  className,
  size,
  zIndex = 0,
}: SphereProps) => (
  <ParallaxItem
    className={[
      styles.Sphere,
      styles[`Sphere--${size}`],
      className,
    ].join(' ')}
    position="absolute"
    zIndex={zIndex}
  >
    <img
      src="/images/sphere.png"
      alt="sphere"
    />
  </ParallaxItem>
);

export { Sphere };
