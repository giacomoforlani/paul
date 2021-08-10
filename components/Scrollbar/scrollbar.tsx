import React, {
  useCallback, useEffect, useRef,
} from 'react';
import { TweenLite, Linear } from 'gsap';

import styles from './scrollbar.module.scss';

type WheelEvent = Event & {
  wheelDeltaY: number
};

const Scrollbar = () => {
  const valueScrollRef = useRef<HTMLDivElement>(null);

  const onMouseWheel = useCallback((event: Event) => {
    const { wheelDeltaY } = event as WheelEvent;
    const windowScroll = window.pageYOffset + wheelDeltaY * 0.2;
    window.scrollTo({ top: windowScroll });

    const pageHeight = document.body.offsetHeight;
    const windowHeight = window.innerHeight;
    const valueScroll = windowScroll / (pageHeight - (windowHeight / 4)) * 100;

    TweenLite.to(valueScrollRef.current, 0.4, {
      force3D: true,
      top: `${valueScroll}%`,
      ease: Linear.easeInOut,
    });
  }, []);

  useEffect(() => {
    document.addEventListener('mousewheel', onMouseWheel);
    return () => document.removeEventListener('mousewheel', onMouseWheel);
  }, [onMouseWheel]);

  return (
    <div
      className={styles.Scrollbar}
    >
      <div
        className={styles.Scrollbar__Value}
        ref={valueScrollRef}
      />
    </div>
  );
};

export { Scrollbar };
