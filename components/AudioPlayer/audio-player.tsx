import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { Link } from '../../lib/components/Link';
import { Text } from '../../lib/components/Text';

import styles from './audio-player.module.scss';

interface AudioProps {
    url: string;
}

const AudioPlayer = ({
  url,
}: AudioProps) => {
  const [paused, setPaused] = useState(true);
  const audio = useMemo(() => (process.browser
    ? new Audio(url)
    : {} as HTMLAudioElement),
  [url]);

  const toggleAudio = useCallback(() => {
    setPaused((value) => {
      setTimeout(() => {
        if (value) {
          audio.pause();
        } else {
          audio.play();
        }
      });

      return !value;
    });
  }, [audio]);

  useEffect(() => {
    audio.loop = true;
    audio.autoplay = true;

    const listener = () => {
      if (paused) {
        audio.play();
        setPaused(false);
      }
    };

    document.addEventListener('click', listener);
    return () => document.removeEventListener('click', listener);
  }, [audio, paused]);

  return (
    <div className={styles.AudioPlayer}>
      <Link onClick={toggleAudio}>
        <Text size="h4">
          Music
          {' '}
          {paused ? 'off' : 'on'}
        </Text>
      </Link>

      <img src="/images/frequency.svg" alt="frequency" />
    </div>
  );
};

export { AudioPlayer };
