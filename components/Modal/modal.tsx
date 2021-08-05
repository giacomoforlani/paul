import { AnimatePresence, motion } from 'framer-motion';
import React, { PropsWithChildren, useEffect } from 'react';

import { BodyClass, useBodyContext } from '../../core/services';
import { fade } from '../../animations';

import styles from './modal.module.scss';

type ModalProps = PropsWithChildren<PropsWithClass<{
  visible: boolean;
  onBackdrop?: () => void;
}>>;

const Modal = ({
  className,
  children,
  visible,
  onBackdrop = () => { },
}: ModalProps) => {
  const {
    addBodyClass,
    removeBodyClass,
  } = useBodyContext();

  useEffect(() => {
    if (visible) {
      addBodyClass(BodyClass.noOverflow);
    } else {
      removeBodyClass(BodyClass.noOverflow);
    }

    return () => removeBodyClass(BodyClass.noOverflow);
  }, [visible, addBodyClass, removeBodyClass]);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            className={styles.Modal__Overlay}
            variants={fade}
            key="overlay"
            initial="fadeOut"
            animate="fadeIn"
            exit="fadeOut"
            onClick={onBackdrop}
          />

          <motion.div
            className={[styles.Modal, className].join(' ')}
            variants={fade}
            key="content"
            initial="fadeOut"
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
