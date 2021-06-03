import React, { PropsWithChildren, useEffect } from 'react';

import styles from './modal.module.scss';

type ModalProps = PropsWithChildren<PropsWithClass<{
  onBackdrop?: () => void;
}>>;

const Modal = ({
  className,
  children,
  onBackdrop = () => {},
}: ModalProps) => {
  useEffect(() => {
    const noOverflowClass = 'no-overflow';
    const body = document.querySelector('body');

    body?.classList.add(noOverflowClass);
    return () => body?.classList.remove(noOverflowClass);
  }, []);

  return (
    <>
      <div
        className={styles.Modal__Overlay}
        onClick={onBackdrop}
      />

      <div className={[styles.Modal, className].join(' ')}>
        {children}
      </div>
    </>
  );
};

export type { ModalProps };

export { Modal };
