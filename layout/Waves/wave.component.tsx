import React from 'react';

import styles from './waves.module.scss';

type WavesProps = PropsWithClass<{
  reverse?: boolean;
}>

const Waves = ({
  className,
  reverse = false,
}: WavesProps) => (
  <img
    className={[styles.Waves, className, reverse ? styles['Waves--Reverse'] : ''].join(' ')}
    src="/images/waves.svg"
    alt="waves"
  />
);

export type { WavesProps };

export { Waves };
