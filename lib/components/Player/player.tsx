import Vimeo from '@u-wave/react-vimeo';
import React, { useCallback } from 'react';
import { useCursorContext } from '../../../components/Cursor';

import styles from './player.module.scss';

const NO_CUSTOM_CURSOR_CLASS = 'no-custom-cursor';

type PlayerProps = PropsWithClass<{
  video: string;
}>

const Player = ({
  className,
  video,
}: PlayerProps) => {
  const { setVisible: setCursorVisible } = useCursorContext();

  const removeCustomCursor = useCallback(() => setCursorVisible(false), [setCursorVisible]);

  const showCustomCursor = useCallback(() => setCursorVisible(true), [setCursorVisible]);

  return (
    <div
      className={styles.Player}
      onMouseEnter={removeCustomCursor}
      onMouseLeave={showCustomCursor}
    >
      <Vimeo
        className={className}
        autoplay
        video={video}
        width={window.innerWidth * 0.8}
      />
    </div>
  );
};

export { Player };
