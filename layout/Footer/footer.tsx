import React from 'react';

import { Text } from '../../components/Text';
import { Link } from '../../components/Link';

import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.Footer}>
    <div className={styles.Footer__Top}>
      <Text
        className={styles.Footer__Title}
        size="h1"
      >
        Nice
        {' '}
        <br />
        to
        {' '}
        <br />
        meet
        {' '}
        <br />
        you
      </Text>

      <Link
        className={styles.Footer__Email}
        url="mailto:info@paolodata.com"
      >
        <Text size="h2">info@paolodata.com</Text>
      </Link>
    </div>

    <div className={styles.Footer__Bottom}>
      <div className={styles.Footer__Contacts}>
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

      <Text
        className={styles.Footer__Rights}
        size="h5"
      >
        Developed by
        {' '}
        <Link
          url="https://www.linkedin.com/in/giacomo-forlani/"
          target="_blank"
        >
          Giacomo Forlani
        </Link>
        {' '}
        - All Rights Reserved © 2020
      </Text>
    </div>
  </footer>
);

export { Footer };
