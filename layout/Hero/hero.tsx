import React from 'react';

import { Button } from '../../components/Button';
import { Link } from '../../components/Link';
import { Text } from '../../components/Text';

import styles from './hero.module.scss';

const Hero = () => (
  <div className={styles.Hero}>
    <img
      className={[styles.Hero__Sphere, styles['Hero__Sphere--01']].join(' ')}
      src="/images/sphere.png"
      alt="sphere-01"
    />

    <div className={styles.Hero__Greetings}>
      <Text size="h1">
        Hi,
        {' '}
        <br />
        I&apos;m Paolo
      </Text>

      <Text size="h2">
        But you can
        {' '}
        <br />
        call me Paul
      </Text>
    </div>

    <Button
      className={styles.Hero__Cta}
      target="_blank"
      url="https://vimeo.com/547504346"
    >
      Play showreel
    </Button>

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

    <img
      className={[styles.Hero__Sphere, styles['Hero__Sphere--02']].join(' ')}
      src="/images/sphere.png"
      alt="sphere-02"
    />

    <img
      className={styles.Hero__Waves}
      src="/images/waves.svg"
      alt="waves"
    />
  </div>
);

export { Hero };
