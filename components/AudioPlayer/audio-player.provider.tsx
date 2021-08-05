import React, {
  createContext, PropsWithChildren, useContext, useState,
} from 'react';

interface AudioPlayerContextValue {
  isDisabled: boolean;
  setIsDisabled: (value: boolean) => void;
}

type AudioPlayerProviderProps = PropsWithChildren<{}>;

const AudioPlayerContext = createContext<AudioPlayerContextValue>({
  isDisabled: false,
  setIsDisabled: () => { },
});

const AudioPlayerProvider = ({
  children,
}: AudioPlayerProviderProps) => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <AudioPlayerContext.Provider value={{
      isDisabled,
      setIsDisabled,
    }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

const useAudioPlayerContext = () => useContext(AudioPlayerContext);

export type {
  AudioPlayerContextValue as AudioContextValue,
  AudioPlayerProviderProps as AudioProviderProps,
};

export {
  AudioPlayerContext,
  AudioPlayerProvider,
  useAudioPlayerContext,
};
