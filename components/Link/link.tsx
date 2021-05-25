import React, { PropsWithChildren } from 'react';

import style from './link.module.scss';

type LinkProps = PropsWithChildren<PropsWithClass<{
    url?: string;
}>>;

const Link = ({
  children,
  className,
  url,
}: LinkProps) => (
  <a
    className={[style.Link, className].join(' ')}
    href={url || '#'}
  >
    {children}
  </a>
);

export { Link };
