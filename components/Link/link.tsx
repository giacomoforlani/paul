import React, { PropsWithChildren } from 'react';

import style from './link.module.scss';

type LinkProps = PropsWithChildren<PropsWithClass<{
  showBorder?: boolean;
  target?: string;
  url?: string;
  onClick?: () => void;
}>>;

const Link = ({
  children,
  className,
  showBorder = true,
  target,
  url,
  onClick = () => { },
  ...attributes
}: LinkProps) => {
  const Tag = url ? 'a' : 'button';

  return (
    <Tag
      {...attributes}
      className={[style.Link, className, showBorder ? '' : style['Link--borderless']].join(' ')}
      href={url ?? '#'}
      target={target}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};

export { Link };
