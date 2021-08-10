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
  position = 'relative',
  speed = 0.1,
  zIndex = 0,
  ...attributes
}: ParallaxItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = useScroll();

  const initialTop = useMemo(() => {
    const { top = 0 } = ref.current?.getBoundingClientRect() ?? {};
    return top * Math.abs(speed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  const y = useMemo(
    () => {
      const negativeSpeed = Math.abs(speed) * -1;
      const value = negativeSpeed * scroll;

      return value + initialTop;
    },
    [initialTop, scroll, speed],
  );

  return (
    <motion.div
      animate={{ y }}
      className={className}
      ref={ref}
      style={{
        position,
        zIndex,
      }}
      transition={{
        duration: 0.5,
        stiffness: 20,
        type: 'spring',
      }}
      {...attributes}
    >
      {children}
    </motion.div>
  );
};

export { ParallaxItem };
