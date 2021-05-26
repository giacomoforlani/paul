import React from 'react';
import styles from './footer.module.scss';
import { Text } from '../../components/Text';
import { Link } from '../../components/Link';

const Footer = () => (
  <footer className={styles.Footer}>
    <Text
      className={styles.Footer__Title}
      size="h1"
    >
      Nice
      <br />
      to
      <br />
      meet
      <br />
      you
    </Text>

    <Link
      className={styles.Footer__Email}
      url="mailto:info@paolodata.co"
    >
      <Text size="h2">info@paolodata.com</Text>
    </Link>

    <div className={styles.Footer__Contacts}>
      <Link>Instagram</Link>
      <Link>Linkedin</Link>
      <Link>Vimeo</Link>
    </div>

    <Text
      className={styles.Footer__Rights}
      size="h5"
    >
      All Rights Reserved © 2020
    </Text>
  </footer>
);

export { Footer };