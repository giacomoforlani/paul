import React, { useCallback, useEffect } from 'react';
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
    setTimeout(() => {
      if (loading) {
        addBodyClass(BodyClass.noOverflow);
      } else {
        removeBodyClass(BodyClass.noOverflow);
      }
    });
  }, [addBodyClass, loading, removeBodyClass]);

  return loading ? (
    <div className={styles.Loader}>
      <img
        src="/images/loader.gif"
        alt="Loader"
      />

      <Noise />
    </div>
  ) : null;
};

export type { LoaderProps };

export { Loader };
