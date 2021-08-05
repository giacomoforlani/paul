import Vimeo from '@u-wave/react-vimeo';
import React, { useCallback, useEffect } from 'react';
import { useAudioPlayerContext } from '../AudioPlayer';
import { useCursorContext } from '../Cursor';

import styles from './video-player.module.scss';

type PlayerProps = PropsWithClass<{
  url: string;
}>

const VideoPlayer = ({
  className,
  url,
}: PlayerProps) => {
  const { setIsDisabled: setAudioPlayerDisabled } = useAudioPlayerContext();
  const { setVisible: setCursorVisible } = useCursorContext();

  const removeCustomCursor = useCallback(() => {
    setCursorVisible(false);
  }, [setCursorVisible]);

  const showCustomCursor = useCallback(() => {
    setCursorVisible(true);
  }, [setCursorVisible]);

  useEffect(() => {
    setAudioPlayerDisabled(true);

    return () => setAudioPlayerDisabled(false);
  }, [setAudioPlayerDisabled]);

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
