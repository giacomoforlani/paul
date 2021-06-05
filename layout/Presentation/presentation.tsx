import React from 'react';

import { Text } from '../../components/Text';
import { Button } from '../../components/Button';

import styles from './presentation.module.scss';

const Presentation = () => (
  <div className={styles.Presentation}>
    <Text
      className={styles.Presentation__First}
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
        design.
      </span>
    </Text>

    <Text
      className={styles.Presentation__Second}
      size="h4"
    >
      My goal is to communicate
      using beautiful design
      and emotional feelings.
    </Text>

    <Text
      className={styles.Presentation__Third}
      size="h5"
    >
      I’m a goosebumps seeker, a true
      gaming-lover, a cinema enthusiast
      and an amateur actor who loves to
      solve problems with storytelling,
      polished design, motion and emotions.
      {' '}
      <br />
      <br />
      Always dreaming of new, unexplored
      horizons to reach, I’m ready for a
      new journey, new stories, your stories.
    </Text>

    <Button
      className={styles.Presentation__Cta}
      kind="secondary"
      target="_blank"
      url="/documents/Paolo_Data-Portfolio_2020-Video-Social.pdf"
    >
      My portfolio
    </Button>
  </div>
);

export { Presentation };
