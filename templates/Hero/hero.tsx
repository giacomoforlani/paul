import React, { useState } from 'react';

import { Button } from '../../components/Button';
import { Link } from '../../components/Link';
import { Modal } from '../../components/Modal';
import { ParallaxItem } from '../../components/ParallaxItem';
import { Sphere } from '../../components/Sphere';
import { Text } from '../../components/Text';
import { VideoPlayer } from '../../components/VideoPlayer';

import styles from './hero.module.scss';

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
            size="h2"
          >
            I design
            {' '}
            <br />
            and direct
            {' '}
            <br />
            motion,
            {' '}
            <br />
            with emotions.
          </Text>

          <div
            className={styles.Hero__Cta}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1500"
          >
            <Button
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
        <VideoPlayer url="547504346" />
      </Modal>
    </div>
  );
};

export { Hero };
