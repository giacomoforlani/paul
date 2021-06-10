import React, { useState } from 'react';

import { Button } from '../../lib/Button';
import { Link } from '../../lib/Link';
import { Modal } from '../../lib/Modal';
import { Player } from '../../lib/Player';
import { Text } from '../../lib/Text';

import styles from './hero.module.scss';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className={styles.Hero}>
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

      {showModal && (
        <Modal
          className={styles.Hero__Player}
          onBackdrop={() => setShowModal(false)}
        >
          <Player video="547504346" />
        </Modal>
      )}
    </section>
  );
};

export { Hero };
