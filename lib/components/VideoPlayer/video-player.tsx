import Vimeo from '@u-wave/react-vimeo';
import React, { useCallback } from 'react';
import { useCursorContext } from '../../../components/Cursor';

import styles from './video-player.module.scss';

type PlayerProps = PropsWithClass<{
  url: string;
}>

const VideoPlayer = ({
  className,
  url,
}: PlayerProps) => {
  const { setVisible: setCursorVisible } = useCursorContext();

  const removeCustomCursor = useCallback(() => {
    setCursorVisible(false);
  }, [setCursorVisible]);

  const showCustomCursor = useCallback(() => {
    setCursorVisible(true);
  }, [setCursorVisible]);

  return (
    <div
      className={styles.VideoPlayer}
      onMouseEnter={removeCustomCursor}
      onMouseLeave={showCustomCursor}
    >
      <Vimeo
        className={className}
        autoplay
        controls
        video={url}
        width={window.innerWidth * 0.8}
      />
    </div>
  );
};

export { VideoPlayer };
