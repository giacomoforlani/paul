import React, { useState } from 'react';

import styles from './projects.module.scss';

import { projects } from '../../data/projects';

import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { useMediaQuery } from '../../core/hooks';

type Project = typeof projects[0];

const Projects = () => {
  const mediaType = useMediaQuery();

  const [activeProject, setActiveProject] = useState<Project | undefined>();

  const selectProject = (project: Project | undefined) => {
    setActiveProject(project);
  };

  return (
    <div className={styles.Projects}>
      <div className={styles.Projects__Cards}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={[
              styles.Projects__Card,
              activeProject?.id === project.id ? styles['Projects__Card--Active'] : '',
            ].join(' ')}
            style={{
              backgroundImage: `${activeProject?.id === project.id
                ? `linear-gradient(
                    to bottom, 
                    rgba(var(--rgb--blue-dark), 0.8), 
                    rgba(var(--rgb--blue-dark), 0.8)
                  ),`
                : ''} 
              url(${project.image})`,
            }}
            onClick={() => selectProject(project)}
            onMouseEnter={() => selectProject(project)}
            onMouseLeave={() => selectProject(undefined)}
          >
            <div className={styles.Projects__Main}>
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
            </div>

            <div className={styles.Projects__Secondary}>
              <Text
                className={styles.Projects__Description}
                size="h5"
              >
                {project.description}
              </Text>

              <Button
                className={styles.Projects__Cta}
                kind="secondary"
                target="_blank"
                url={project.link}
              >
                Play
              </Button>
            </div>
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
};

export { Projects };
