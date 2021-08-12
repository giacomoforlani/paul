import React from 'react';

import styles from './gradient.module.scss';

type NoiseProps = PropsWithClass<{}>;

const Gradient = ({
  className,
}: NoiseProps) => (
  <div className={[styles.Gradient, className].join(' ')}>
    <div className={styles.Gradient__Background} />
  </div>
);

export { Gradient };
