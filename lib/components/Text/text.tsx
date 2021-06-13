import React, { PropsWithChildren } from 'react';

import style from './text.module.scss';

type Sizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TextProps = PropsWithChildren<PropsWithClass<{
  size?: Sizes;
}>>;

const Text = ({
  children,
  className,
  size = 'h1',
  ...attributes
}: TextProps) => {
  const Element = size;

  return (
    <Element
      {...attributes}
      className={[style.Text, style[`Text--${size}`], className].join(' ')}
    >
      {children}
    </Element>
  );
};

export { Text };
