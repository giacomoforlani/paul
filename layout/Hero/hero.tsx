import React from 'react';
import { Button } from '../../components/Button';
import { Link } from '../../components/Link';
import { Text } from '../../components/Text';
import styles from './hero.module.scss';

const Hero = () => (
  <div className={styles.Hero}>
    <div className={styles.Hero__Greetings}>
      <Text size="h1">
        Hi,
        <br />
        I&apos;m Paolo
      </Text>

      <Text size="h2">
        But you can
        <br />
        call me Paul
      </Text>
    </div>

    <Button className={styles.Hero__Cta}>Play showreel</Button>

    <div className={styles.Hero__Links}>
      <Link>Instagram</Link>
      <Link>Linkedin</Link>
      <Link>Vimeo</Link>
    </div>
  </div>
);

export { Hero };
