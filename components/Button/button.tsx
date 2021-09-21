import React, { PropsWithChildren } from 'react';

import styles from './button.module.scss';

type ButtonProps = PropsWithChildren<PropsWithClass<{
  disabled?: boolean;
  icon?: 'arrow_right_circle' | 'arrow_top';
  kind?: 'primary' | 'secondary';
  target?: string;
  url?: string;
  onClick?: () => void;
}>>;

const Button = ({
  children,
  className,
  disabled = false,
  icon = 'arrow_right_circle',
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
      className={[
        styles.Button,
        styles[`Button--${kind}`],
        className,
      ].join(' ')}
      disabled={disabled}
      href={url}
      target={target}
      onClick={onClick}
    >
      {children}

      {icon === 'arrow_right_circle' && (
        <i className={styles.Button__Icon}>
          <i className={styles.Button__ArrowRight} />
          <i className={styles.Button__Circle} />
        </i>
      )}

      {icon === 'arrow_top' && (
        <i className={styles.Button__Icon}>
          <i className={styles.Button__ArrowTop} />
        </i>
      )}
    </Element>
  );
};

export { Button };
