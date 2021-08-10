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

const FADE_MIN = 0;
const FADE_MAX = 1;
const FADE_STEP = 0.025;
const FADE_INTERVAL = 0.1;
const LOOP_CUT = 3;

const clearTimer = (timer?: NodeJS.Timeout) => {
  if (timer) {
    clearTimeout(timer);
    clearInterval(timer);
  }
};

const AudioPlayer = ({
  url,
}: AudioProps) => {
  const checkTimer = useRef<NodeJS.Timeout>();
  const increaseTimer = useRef<NodeJS.Timeout>();
  const decreaseTimer = useRef<NodeJS.Timeout>();

  const { isDisabled } = useAudioPlayerContext();
  const [isPaused, setIsPaused] = useState(true);

  const audio = useMemo(() => (process.browser
    ? new Audio(url)
    : {} as HTMLAudioElement), [url]);

  const fadeInAudio = useCallback(() => {
    const increaseVolume = () => {
      if (audio.volume < FADE_MAX) {
        const value = audio.volume + FADE_STEP;
        audio.volume = value < FADE_MAX ? value : FADE_MAX;
        increaseTimer.current = setTimeout(() => increaseVolume(), FADE_INTERVAL * 1000);
      }

      if (audio.volume > 0) {
        audio.play();
      }
    };

    clearTimer(decreaseTimer.current);

    audio.volume = audio.volume >= 1 ? 0 : audio.volume;
    increaseVolume();
  }, [audio]);

  const fadeOutAudio = useCallback(() => {
    const decreaseVolume = () => {
      if (audio.volume > FADE_MIN) {
        const value = audio.volume - FADE_STEP;
        audio.volume = value > FADE_MIN ? value : FADE_MIN;
        decreaseTimer.current = setTimeout(() => decreaseVolume(), FADE_INTERVAL * 1000 / 2);
      }

      if (audio.volume <= 0) {
        audio.pause();
      }
    };

    clearTimer(increaseTimer.current);

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
    audio.loop = true;

    if (isDisabled) {
      audio.pause();
    } else if (!isPaused) {
      audio.play();
    }
  }, [audio, isDisabled, isPaused]);

  useEffect(() => {
    if (!isPaused) {
      checkTimer.current = setInterval(() => {
        audio.currentTime = 0;
      }, (audio.duration - LOOP_CUT) * 1000);
    } else {
      clearTimer(checkTimer.current);
    }

    return () => clearTimer(checkTimer.current);
  }, [audio, isPaused]);

  return (
    <div
      className={styles.AudioPlayer}
      onClick={toggleAudio}
    >
      <Link>
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
          d={isPaused ? 'M 0 12.5 h 20' : 'M1205-2238.695h5.229l2.121-4.633,2.679,9.823,3.74-18.139,2.679,24,2.9-11.051h5.581'}
          transform={isPaused ? '' : 'translate(-1204 2252.644)'}
        />
      </svg>
    </div>
  );
};

export { AudioPlayer };
