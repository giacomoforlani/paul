import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

enum MediaType {
  desktop,
  mobile,
}

const useMediaQuery = () => {
  const { width } = useWindowSize();
  const [mediaType, setMediaType] = useState(MediaType.desktop);

  useEffect(() => setMediaType(width > 60 * 16 ? MediaType.desktop : MediaType.mobile), [width]);

  return mediaType;
};

export type { MediaType };

export { useMediaQuery };
