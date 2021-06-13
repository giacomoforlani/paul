import React, { PropsWithChildren } from 'react';

import style from './link.module.scss';

type LinkProps = PropsWithChildren<PropsWithClass<{
  target?: string;
  url?: string;
}>>;

const Link = ({
  children,
  className,
  target,
  url,
  ...attributes
}: LinkProps) => (
  <a
    {...attributes}
    className={[style.Link, className].join(' ')}
    href={url || '#'}
    target={target}
  >
    {children}
  </a>
);

export { Link };
