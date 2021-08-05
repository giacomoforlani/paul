import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';

import { Link } from '../Link';
import { Text } from '../Text';

import { useAudioPlayerContext } from './audio-player.provider';
import styles from './audio-player.module.scss';

interface AudioProps {
  url: string;
}

const MIN_VALUE = 0;
const MAX_VALUE = 1;
const STEP_VALUE = 0.025;
const INTERVAL_VALUE = 100;

const AudioPlayer = ({
  url,
}: AudioProps) => {
  const increaseTimer = useRef<NodeJS.Timeout>();
  const decreaseTimer = useRef<NodeJS.Timeout>();

  const { isDisabled } = useAudioPlayerContext();

  const [isPaused, setIsPaused] = useState(true);
  const audio = useMemo(() => (process.browser
    ? new Audio(url)
    : {} as HTMLAudioElement), [url]);

  const fadeInAudio = useCallback(() => {
    const increaseVolume = () => {
      if (audio.volume < MAX_VALUE) {
        const value = audio.volume + STEP_VALUE;
        audio.volume = value < MAX_VALUE ? value : MAX_VALUE;
        increaseTimer.current = setTimeout(() => increaseVolume(), INTERVAL_VALUE);
      }

      if (audio.volume > 0) {
        audio.play();
      }
    };

    if (decreaseTimer.current) {
      clearTimeout(decreaseTimer.current);
    }

    audio.volume = audio.volume >= 1 ? 0 : audio.volume;
    increaseVolume();
  }, [audio]);

  const fadeOutAudio = useCallback(() => {
    const decreaseVolume = () => {
      if (audio.volume > MIN_VALUE) {
        const value = audio.volume - STEP_VALUE;
        audio.volume = value > MIN_VALUE ? value : MIN_VALUE;
        decreaseTimer.current = setTimeout(() => decreaseVolume(), INTERVAL_VALUE / 2);
      }

      if (audio.volume <= 0) {
        audio.pause();
      }
    };

    if (increaseTimer.current) {
      clearTimeout(increaseTimer.current);
    }

    decreaseVolume();
  }, [audio]);

  const toggleAudio = useCallback(() => {
    setIsPaused((value) => {
      setTimeout(() => {
        if (value) {
          fadeInAudio();
        } else {
          fadeOutAudio();
        }
      });

      return !value;
    });
  }, [fadeInAudio, fadeOutAudio]);

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

      <svg
        height="25"
        viewBox="0 0 25 25"
        width="25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={styles.AudioPlayer__Icon}
          d={isPaused ? 'M 0 12.5 h 20' : 'M1205-2238.695h5.229l2.121-4.633,2.679,9.823,3.74-18.139,2.679,24,2.9-11.051h5.581'}
          transform={isPaused ? '' : 'translate(-1204 2252.644)'}
        />
      </svg>
    </div>
  );
};

export { AudioPlayer };
