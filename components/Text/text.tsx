import React, { PropsWithChildren } from 'react';

import style from './text.module.scss';

type Sizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TextProps = PropsWithChildren<PropsWithClass<{
  size?: Sizes;
}>>;

const Text = ({
  children,
  className,
  size: Size = 'h1',
}: TextProps) => (
  <Size
    className={[style.Text, style[`Text--${Size}`], className].join(' ')}
  >
    {children}
  </Size>
);

export { Text };
