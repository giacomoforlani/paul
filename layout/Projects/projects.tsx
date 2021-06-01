import React from 'react';

import styles from './projects.module.scss';

import { projects } from '../../data/projects';

import { Text } from '../../components/Text';
import { Button } from '../../components/Button';

const Projects = () => (
  <div className={styles.Projects}>
    <div className={styles.Projects__Cards}>
      {projects.map((project) => (
        <div
          key={project.id}
          className={styles.Projects__Card}
          style={{
            backgroundImage: `linear-gradient(
            to bottom, 
            rgba(var(--rgb--blue-dark), 0.8), 
            rgba(var(--rgb--blue-dark), 0.8)
          ), 
          url(${project.image})`,
          }}
        >
          <Text
            className={styles.Projects__Label}
            size="h6"
          >
            {project.label}
          </Text>

          <Text
            className={styles.Projects__Title}
            size="h2"
          >
            {project.name}
          </Text>

          <Text
            className={styles.Projects__Description}
            size="h5"
          >
            {project.description}
          </Text>

          <Button
            kind="secondary"
            target="_blank"
            url={project.link}
          >
            Play
          </Button>
        </div>
      ))}
    </div>

    <Text
      className={styles.Projects__ComingSoon}
      size="h5"
    >
      (More projects coming soon)
    </Text>

    <img
      className={styles.Projects__Waves}
      src="/images/waves.svg"
      alt="waves"
    />
  </div>
);

export { Projects };
