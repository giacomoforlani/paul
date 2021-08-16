import React from 'react';

import { Button } from '../../components/Button';
import { Sphere } from '../../components/Sphere';
import { Text } from '../../components/Text';

import styles from './presentation.module.scss';

const Presentation = () => (
  <div className={styles.Presentation}>
    <Sphere
      className={styles.Presentation__Sphere}
      size="small"
      zIndex={1}
    />

    <section className={styles.Presentation__Section}>
      <Text
        className={styles.Presentation__First}
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1500"
        size="h2"
      >
        I’m a
        <br />
        {' '}
        <span className={styles.Presentation__Highlight}>creative mind</span>
        {' '}
        <br />
        in love with
        {' '}
        <br />
        <span className={styles.Presentation__Highlight}>art direction</span>
        {' '}
        <br />
        and
        {' '}
        <span className={styles.Presentation__Highlight}>
          motion
          {' '}
          <br />
          design
        </span>
        .
      </Text>

      <Text
        className={styles.Presentation__Second}
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1500"
        size="h4"
      >
        My goal is to solve communication
        problems using beautiful design
        and emotional feelings.
      </Text>

      <Text
        className={styles.Presentation__Third}
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1500"
        size="h5"
      >
        I’m a goosebump seeker, true gaming-lover,
        cinema enthusiast and amateur actor who loves
        to polish the style and craft the best story
        with care and attention to every detail.
        {' '}
        <br />
        <br />
        Always dreaming of new,
        unexplored horizons to reach,
        I’m ready for a new journey.

        <img
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1500"
          className={styles.Presentation__Sign}
          src="/images/sign.svg"
          alt="sign"
        />
      </Text>

      <div
        className={styles.Presentation__Cta}
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1500"
      >
        <Button
          kind="secondary"
          target="_blank"
          url="/documents/Paolo_Data-Portfolio_2020-Video-Social.pdf"
        >
          My portfolio
        </Button>
      </div>
    </section>
  </div>
);

export { Presentation };
