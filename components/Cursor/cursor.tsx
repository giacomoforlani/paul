import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';

import styles from './cursor.module.scss';
import { useCursorVisible, useMouseMove } from './hooks';

const Cursor = () => {
  const bigCursorRef = useRef<HTMLDivElement>(null);
  const smallCursorRef = useRef<HTMLDivElement>(null);

  const visible = useCursorVisible();
  const onMouseMove = useMouseMove(bigCursorRef, smallCursorRef);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const onMouseDown = useCallback(() => {
    setIsMouseDown(true);
  }, []);

  const onMouseUp = useCallback(() => {
    setTimeout(() => setIsMouseDown(false), 250);
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

  return visible ? (
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
  ) : null;
};

export { Cursor };
