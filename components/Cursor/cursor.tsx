import { TweenLite, Linear } from 'gsap';
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';

import styles from './cursor.module.scss';

const Cursor = () => {
  const bigCursorRef = useRef(null);
  const smallCursorRef = useRef(null);

  const [isMouseDown, setIsMouseDown] = useState(false);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (bigCursorRef.current) {
        TweenLite.to(bigCursorRef.current, 0.4, {
          x: e.clientX,
          y: e.clientY,
          force3D: true,
          rotation: 0.01,
        });
      }

      if (smallCursorRef.current) {
        TweenLite.to(smallCursorRef.current, 0, {
          x: e.clientX,
          y: e.clientY,
          force3D: true,
          rotation: 0.01,
          ease: Linear.easeNone,
        });
      }
    },
    [],
  );

  const onMouseDown = useCallback(() => {
    setIsMouseDown(true);
  }, []);

  const onMouseUp = useCallback(() => {
    setTimeout(() => setIsMouseDown(false), 300);
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseMove);
      document.removeEventListener('mouseup', onMouseMove);
    };
  }, [onMouseMove, onMouseDown, onMouseUp]);

  return (
    <>
      <div
        className={[
          styles.Cursor__Big,
          isMouseDown ? styles['Cursor__Big--Full'] : '',
        ].join(' ')}
        ref={bigCursorRef}
      />

      <div
        className={styles.Cursor__Small}
        ref={smallCursorRef}
      />
    </>
  );
};

export { Cursor };
