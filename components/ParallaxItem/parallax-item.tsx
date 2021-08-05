import React, {
  PropsWithChildren, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { motion } from 'framer-motion';

import { useScroll } from '../../core/hooks';

type ParallaxItemProps = PropsWithChildren<PropsWithClass<{
  limit?: number;
  position?: 'relative' | 'absolute' | 'fixed';
  speed?: number;
  zIndex?: number;
}>>;

const ParallaxItem = ({
  children,
  className,
  limit = 200,
  position = 'relative',
  speed = -0.5,
  zIndex = 0,
  ...attributes
}: ParallaxItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const initialScroll = useMemo(
    () => (process.browser ? window.pageYOffset : 0),
    [],
  );

  const initialTop = useMemo(
    () => ref.current?.getBoundingClientRect().top ?? 0 + initialScroll,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [initialScroll, ref.current],
  );

  const scroll = useScroll();

  const y = useMemo(
    () => {
      const windowHeight = (process.browser ? window.innerHeight : 0);
      const offsetValue = initialTop >= windowHeight ? windowHeight : 0;
      const value = (scroll + offsetValue - initialTop) * speed;
      const canAnimate = scroll + offsetValue >= initialTop;
      const multiplier = speed > 0 ? 1 : -1;

      return (
        canAnimate
          ? Math.abs(value) >= limit
            ? limit * multiplier
            : value
          : 0
      );
    },
    [initialTop, limit, scroll, speed],
  );

  return (
    <motion.div
      animate={{ y }}
      className={className}
      ref={ref}
      style={{ position, zIndex }}
      transition={{ type: 'spring', stiffness: 20 }}
      {...attributes}
    >
      {children}
    </motion.div>
  );
};

export { ParallaxItem };
