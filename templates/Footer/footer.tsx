import React from 'react';

import { Link } from '../../components/Link';
import { ParallaxItem } from '../../components/ParallaxItem';
import { Sphere } from '../../components/Sphere';
import { Text } from '../../components/Text';

import styles from './footer.module.scss';

const Footer = () => (
  <div className={styles.Footer}>
    <img
      className={styles.Footer__Waves}
      src="/images/waves.svg"
      alt="waves"
    />

    <Sphere
      className={styles['Footer__Sphere--01']}
      size="sm"
    />

    <Sphere
      className={styles['Footer__Sphere--02']}
      size="lg"
    />

    <img
      className={styles.Footer__Image}
      alt="footer"
    />

    <section className={styles.Footer__Section}>
      <div className={styles.Footer__Top}>
        <Text
          className={styles.Footer__Title}
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1500"
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
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1500"
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
          size="h6"
        >
          Developed by
          {' '}
          <Link
            url="https://www.linkedin.com/in/giacomo-forlani/"
            target="_blank"
          >
            Giacomo Forlani
          </Link>
          <span> - </span>
          <br />
          All Rights Reserved ©
          {' '}
          {new Date().getFullYear()}
        </Text>
      </div>
    </section>
  </div>
);

export { Footer };
