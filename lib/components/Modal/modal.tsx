import { AnimatePresence, motion } from 'framer-motion';
import React, { PropsWithChildren, useEffect } from 'react';

import { fade } from '../../animations';

import styles from './modal.module.scss';

const NO_OVERFLOW_CLASS = 'no-overflow';

type ModalProps = PropsWithChildren<PropsWithClass<{
  visible: boolean;
  onBackdrop?: () => void;
}>>;

const Modal = ({
  className,
  children,
  visible,
  onBackdrop = () => {},
}: ModalProps) => {
  useEffect(() => {
    const body = document.querySelector('body');

    if (visible) {
      body?.classList.add(NO_OVERFLOW_CLASS);
    } else {
      body?.classList.remove(NO_OVERFLOW_CLASS);
    }

    return () => body?.classList.remove(NO_OVERFLOW_CLASS);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            className={styles.Modal__Overlay}
            variants={fade}
            key="overlay"
            initial="fadeIn"
            animate="fadeIn"
            exit="fadeOut"
            onClick={onBackdrop}
          />

          <motion.div
            className={[styles.Modal, className].join(' ')}
            variants={fade}
            key="content"
            initial="fadeIn"
            animate="fadeIn"
            exit="fadeOut"
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export type { ModalProps };

export { Modal };
