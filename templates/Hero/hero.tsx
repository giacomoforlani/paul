import React, { useState } from 'react';

import { Button } from '../../lib/components/Button';
import { Link } from '../../lib/components/Link';
import { Modal } from '../../lib/components/Modal';
import { Player } from '../../lib/components/Player';
import { Sphere } from '../../components/Sphere';
import { Text } from '../../lib/components/Text';
import styles from './hero.module.scss';
import { ParallaxItem } from '../../lib/components/ParallaxItem';

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

      <ParallaxItem
        limit={150}
        speed={-0.5}
        zIndex={1}
      >
        <img
          className={styles.Hero__Waves}
          src="/images/waves.svg"
          alt="waves"
        />
      </ParallaxItem>

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
