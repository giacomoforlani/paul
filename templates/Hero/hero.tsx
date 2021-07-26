import React, { useState } from 'react';

import { Button } from '../../lib/components/Button';
import { Link } from '../../lib/components/Link';
import { Modal } from '../../lib/components/Modal';
import { Player } from '../../lib/components/Player';
import { Sphere } from '../../components/Sphere';
import { Text } from '../../lib/components/Text';
import styles from './hero.module.scss';

const DELAY = 200;

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.Hero}>
      <Sphere
        className={styles['Hero__Sphere--01']}
        size="small"
      />

      <Sphere
        className={styles['Hero__Sphere--02']}
        size="large"
      />

      <img
        className={styles.Hero__Image}
        alt="hero"
      />

      <section className={styles.Hero__Section}>
        <div className={styles.Hero__Greetings}>
          <Text
            className={styles.Hero__Name}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay={DELAY}
            size="h1"
          >
            Hi,
            {' '}
            <br />
            I&apos;m Paolo
          </Text>

          <Text
            className={styles.Hero__Nickname}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay={DELAY * 2}
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

          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1500"
            data-aos-delay={DELAY * 3}
          >
            <Button
              className={styles.Hero__Cta}
              onClick={() => setShowModal(true)}
            >
              Play showreel
            </Button>
          </div>
        </div>

        <div
          className={styles.Hero__Links}
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1500"
          data-aos-delay={DELAY * 4}
        >
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
      </section>

      <img
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
    </div>
  );
};

export { Hero };
