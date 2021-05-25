import React from 'react';
import styles from './presentation.module.scss';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';

const Presentation = () => (
  <div className={styles.Presentation}>
    <Text
      className={styles.Presentation__First}
      size="h2"
    >
      I’m a
      {' '}
      <span className={styles.Presentation__Highlight}>creative mind</span>
      {' '}
      in love with
      {' '}
      <span className={styles.Presentation__Highlight}>art direction</span>
      {' '}
      and
      {' '}
      <span className={styles.Presentation__Highlight}>motion design.</span>
    </Text>

    <Text
      className={styles.Presentation__Second}
      size="h3"
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
      <br />
      <br />
      Always dreaming of new, unexplored
      horizons to reach, I’m ready for a
      new journey, new stories, your stories.
    </Text>

    <Button
      className={styles.Presentation__Cta}
      kind="secondary"
    >
      My portfolio
    </Button>
  </div>
);

export { Presentation };
