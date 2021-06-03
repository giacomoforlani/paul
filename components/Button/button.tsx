import React, { PropsWithChildren } from 'react';

import styles from './button.module.scss';

type ButtonProps = PropsWithChildren<PropsWithClass<{
  kind?: 'primary' | 'secondary';
  target?: string;
  url?: string;
  onClick?: () => void;
}>>;

const Button = ({
  children,
  className,
  kind = 'primary',
  target,
  url,
  onClick = () => {},
}: ButtonProps) => {
  const Element = url ? 'a' : 'button';

  return (
    <Element
      className={[styles.Button, styles[`Button--${kind}`], className].join(' ')}
      href={url}
      target={target}
      onClick={onClick}
    >
      {children}

      <i className={styles.Button__Icon}>
        <i className={styles.Button__Triangle} />
        <i className={styles.Button__Circle} />
      </i>
    </Element>
  );
};

export { Button };
