import React, { PropsWithChildren } from 'react';

import styles from './button.module.scss';

type ButtonProps = PropsWithChildren<PropsWithClass<{
  kind?: 'primary' | 'secondary';
}>>;

const Button = ({
  children,
  className,
  kind = 'primary',
}: ButtonProps) => (
  <button
    type="button"
    className={[styles.Button, styles[`Button--${kind}`], className].join(' ')}
  >
    {children}

    <i className={styles.Button__Icon}>
      <i className={styles.Button__Triangle} />
      <i className={styles.Button__Circle} />
    </i>
  </button>
);

export { Button };
