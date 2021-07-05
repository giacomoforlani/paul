import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';

import styles from './cursor.module.scss';
import { useHoverCursor } from './hooks';
import { useMoveCursor } from './hooks/useMoveCursor';
import { useCursorContext } from './services/cursor.provider';

const Cursor = () => {
  const { visible } = useCursorContext();

  const bigCursorRef = useRef<HTMLDivElement>(null);
  const smallCursorRef = useRef<HTMLDivElement>(null);

  const [isCursorFull, setIsCursorFull] = useState(false);

  const moveCursor = useMoveCursor(bigCursorRef, smallCursorRef);
  const hoverCursor = useHoverCursor();

  const onMouseDown = useCallback(() => {
    setIsCursorFull(true);
  }, []);

  const onMouseUp = useCallback(() => {
    setIsCursorFull(false);
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousemove', hoverCursor);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousemove', hoverCursor);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [moveCursor, hoverCursor, onMouseDown, onMouseUp]);

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
