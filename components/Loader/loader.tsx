import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { BodyClass, useBodyContext } from '../../core/services';
import { Noise } from '../Noise';

import styles from './loader.module.scss';

interface LoaderProps {
  loading: boolean;
}

const Loader = ({
  loading,
}: LoaderProps) => {
  const {
    addBodyClass,
    removeBodyClass,
  } = useBodyContext();

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      if (loading) {
        addBodyClass(BodyClass.noOverflow);
      } else {
        removeBodyClass(BodyClass.noOverflow);
      }
    });
  }, [addBodyClass, loading, removeBodyClass]);

  return (
    <div className={[styles.Loader, loading ? '' : styles.Loaded].join(' ')}>
      <img
        src="/images/loader.gif"
        alt="Loader"
      />
      <Noise />
    </div>
  );
};

export type { LoaderProps };

export { Loader };
