import React from 'react';

import styles from './noise.module.scss';

type NoiseProps = PropsWithClass<{}>;

const Noise = ({
  className,
}: NoiseProps) => (
  <div className={[styles.Noise, className].join(' ')}>
    <div className={styles.Noise__Background} />
  </div>
);

export { Noise };
