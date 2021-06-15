import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';

import { Button } from '../../lib/components/Button';
import { Link } from '../../lib/components/Link';
import { Modal } from '../../lib/components/Modal';
import { Player } from '../../lib/components/Player';
import { Text } from '../../lib/components/Text';

import styles from './hero.module.scss';

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const wavesRef = useRef<HTMLImageElement>(null);
  const [sectionHeight, setSectionHeight] = useState<number | string>('150rem');

  const [showModal, setShowModal] = useState(false);

  const onWindowResize = useCallback(() => {
    const imageHeight = imageRef.current?.clientHeight || 0;
    setSectionHeight(`calc(${imageHeight}px + 18rem)`);
  }, []);

  useEffect(() => {
    window.addEventListener('load', onWindowResize);
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('orientationchange', onWindowResize);

    return () => {
      window.removeEventListener('load', onWindowResize);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('orientationchange', onWindowResize);
    };
  }, [onWindowResize]);

  return (
    <section
      className={styles.Hero}
      style={{ height: sectionHeight }}
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        ref={imageRef}
        className={styles.Hero__Image}
      />

      <img
        className={[
          styles.Hero__Sphere,
          styles['Hero__Sphere--01'],
        ].join(' ')}
        src="/images/sphere.png"
        alt="sphere-01"
      />

      <img
        className={[
          styles.Hero__Sphere,
          styles['Hero__Sphere--02'],
        ].join(' ')}
        src="/images/sphere.png"
        alt="sphere-02"
      />

      <div className={styles.Hero__Main}>
        <div className={styles.Hero__Greetings}>
          <Text
            className={styles.Hero__Name}
            size="h1"
          >
            Hi,
            {' '}
            <br />
            I&apos;m Paolo
          </Text>

          <Text
            className={styles.Hero__Nickname}
            size="h2"
          >
            But you can
            {' '}
            <br />
            call me
            {' '}
            <span>
              Paul
              <img
                className={styles.Hero__Sign}
                src="/images/sign.svg"
                alt="sign"
              />
            </span>
          </Text>

          <Button
            className={styles.Hero__Cta}
            onClick={() => setShowModal(true)}
          >
            Play showreel
          </Button>
        </div>

        <div className={styles.Hero__Links}>
          <Link
            target="_blank"
            url="https://www.instagram.com/paolodata"
          >
            Instagram
          </Link>
          <Link
            target="_blank"
            url="https://www.linkedin.com/in/paolodata/"
          >
            Linkedin
          </Link>
          <Link
            target="_blank"
            url="https://vimeo.com/paolodata"
          >
            Vimeo
          </Link>
        </div>
      </div>

      <img
        ref={wavesRef}
        className={styles.Hero__Waves}
        src="/images/waves.svg"
        alt="waves"
      />

      <Modal
        className={styles.Hero__Player}
        visible={showModal}
        onBackdrop={() => setShowModal(false)}
      >
        <Player video="547504346" />
      </Modal>
    </section>
  );
};

export { Hero };
