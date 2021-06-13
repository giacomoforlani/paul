import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';

import { Link } from '../../lib/components/Link';
import { Text } from '../../lib/components/Text';

import styles from './footer.module.scss';

const Footer = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [sectionHeight, setSectionHeight] = useState<number | string | undefined>('100vh');

  const onWindowResize = useCallback(() => {
    setSectionHeight(imgRef.current?.clientHeight);
  }, []);

  useEffect(() => {
    window.addEventListener('load', onWindowResize);
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('load', onWindowResize);
      window.removeEventListener('resize', onWindowResize);
    };
  }, [onWindowResize]);

  return (
    <section
      className={styles.Footer}
      style={{ height: sectionHeight }}
    >
      <img
        ref={imgRef}
        className={styles.Footer__Image}
        src="/images/footer.jpg"
        alt="footer"
      />

      <img
        className={styles.Footer__Waves}
        src="/images/waves.svg"
        alt="waves"
      />

      <img
        className={[
          styles.Footer__Sphere,
          styles['Footer__Sphere--01'],
        ].join(' ')}
        src="/images/sphere.png"
        alt="sphere-02"
      />

      <img
        className={[
          styles.Footer__Sphere,
          styles['Footer__Sphere--02'],
        ].join(' ')}
        src="/images/sphere.png"
        alt="sphere-02"
      />

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
          <span> - </span>
          <br />
          All Rights Reserved © 2020
        </Text>
      </div>
    </section>
  );
};

export { Footer };
