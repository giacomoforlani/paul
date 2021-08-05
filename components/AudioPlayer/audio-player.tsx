import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { Link } from '../../lib/components/Link';
import { Text } from '../../lib/components/Text';

import styles from './audio-player.module.scss';
import { useAudioPlayerContext } from './audio-player.provider';

interface AudioProps {
  url: string;
}

const AudioPlayer = ({
  url,
}: AudioProps) => {
  const { isDisabled } = useAudioPlayerContext();

  const [isPaused, setIsPaused] = useState(true);
  const audio = useMemo(() => (process.browser
    ? new Audio(url)
    : {} as HTMLAudioElement), [url]);

  const toggleAudio = useCallback(() => {
    setIsPaused((value) => {
      setTimeout(() => {
        if (value) {
          audio.play();
        } else {
          audio.pause();
        }
      });

      return !value;
    });
  }, [audio]);

  useEffect(() => {
    if (isDisabled) {
      audio.pause();
    } else if (!isPaused) {
      audio.play();
    }
  }, [audio, isDisabled, isPaused]);

  return (
    <div className={styles.AudioPlayer}>
      <Link onClick={toggleAudio}>
        <Text size="h4">
          Music
          {' '}
          {isPaused ? 'off' : 'on'}
        </Text>
      </Link>

      <img
        src={isPaused ? '/images/frequency-plain.svg' : '/images/frequency.svg'}
        alt="frequency"
      />
    </div>
  );
};

export { AudioPlayer };
