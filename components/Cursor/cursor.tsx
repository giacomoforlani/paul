import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useBodyContext } from '../../core/services';

import styles from './cursor.module.scss';
import { useMoveCursor } from './hooks/useMoveCursor';
import { useCursorContext } from './services/cursor.provider';

const Cursor = () => {
  const { visible } = useCursorContext();

  const bigCursorRef = useRef<HTMLDivElement>(null);
  const smallCursorRef = useRef<HTMLDivElement>(null);

  const [isCursorFull, setIsCursorFull] = useState(false);

  const animateCursor = useMoveCursor(bigCursorRef, smallCursorRef);

  const onMouseDown = useCallback(() => {
    setIsCursorFull(true);
  }, []);

  const onMouseUp = useCallback(() => {
    setIsCursorFull(false);
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', animateCursor);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', animateCursor);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseDown, onMouseUp, animateCursor]);

  return visible ? (
    <>
      <div
        className={[
          styles.Cursor__Big,
          isCursorFull ? styles['Cursor__Big--Full'] : '',
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
