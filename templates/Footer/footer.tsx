import React, { useCallback } from 'react';
import { Button } from '../../components/Button';

import { Link } from '../../components/Link';
import { Sphere } from '../../components/Sphere';
import { Text } from '../../components/Text';

import styles from './footer.module.scss';

const Footer = () => {
  const goToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
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

      <section className={styles.Footer__Top}>
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

        <div className={styles.Footer__Links}>
          <Link
            className={styles.Footer__Links__Email}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1500"
            url="mailto:info@paolodata.com"
          >
            <Text size="h2">info@paolodata.com</Text>
          </Link>

          <Link
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1500"
            target="_blank"
            url="https://www.instagram.com/paolodata"
          >
            Instagram
          </Link>

          <Link
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1500"
            target="_blank"
            url="https://www.linkedin.com/in/paolodata/"
          >
            Linkedin
          </Link>

          <Link
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1500"
            target="_blank"
            url="https://vimeo.com/paolodata"
          >
            Vimeo
          </Link>
        </div>
      </section>

      <section className={styles.Footer__Bottom}>
        <Text
          className={styles.Footer__Bottom__Developer}
          size="h6"
        >
          Developed by
          <Link
            url="https://www.linkedin.com/in/giacomo-forlani/"
            target="_blank"
          >
            Giacomo Forlani
          </Link>

          <span>
            {' '}
            - All Rights Reserved ©
            {' '}
            {new Date().getFullYear()}
          </span>
        </Text>

        <Text
          size="h6"
          className={styles.Footer__Bottom__Email}
        >
          <Link
            url="mailto:info@paolodata.com"
          >
            info@paolodata.com
          </Link>
        </Text>

        <br />

        <Text
          size="h6"
          className={styles.Footer__Bottom__Copyright}
        >
          All Rights Reserved ©
          {' '}
          {new Date().getFullYear()}
        </Text>

        <Button
          className={styles.Footer__Bottom__BackButton}
          icon="arrow_top"
          kind="secondary"
          onClick={goToTop}
        >
          <span>Back to top</span>
        </Button>
      </section>
    </div>
  );
};

export { Footer };
