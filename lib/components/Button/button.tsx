import React, { PropsWithChildren } from 'react';

import styles from './button.module.scss';

type ButtonProps = PropsWithChildren<PropsWithClass<{
  disabled?: boolean;
  kind?: 'primary' | 'secondary';
  target?: string;
  url?: string;
  onClick?: () => void;
}>>;

const Button = ({
  children,
  className,
  disabled = false,
  kind = 'primary',
  target,
  url,
  onClick = () => { },
  ...attributes
}: ButtonProps) => {
  const Element = url ? 'a' : 'button';

  return (
    <Element
      {...attributes}
      className={[styles.Button, styles[`Button--${kind}`], className].join(' ')}
      disabled={disabled}
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
