import React, { useState } from 'react';

import Vimeo from '@u-wave/react-vimeo';

import { useWindowSize } from 'react-use';
import { projects } from '../../data/projects';

import { Text } from '../../components/Text';
import { Button } from '../../components/Button';

import { useMediaQuery } from '../../core/hooks';

import styles from './projects.module.scss';
import { Modal } from '../../components/Modal';

type Project = typeof projects[0];

const Projects = () => {
  const { width } = useWindowSize();

  const [projectFocused, setProjectFocused] = useState<Project | undefined>();

  const [showModal, setShowModal] = useState(false);
  const [projectOpened, setProjectOpened] = useState<Project | undefined>();

  const focusProject = (project: Project | undefined) => {
    setProjectFocused(project);
  };

  const openProject = (project: Project | undefined) => {
    setShowModal(!!project);
    setProjectOpened(project);
  };

  return (
    <div className={styles.Projects}>
      <div className={styles.Projects__Cards}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={[
              styles.Projects__Card,
              projectFocused?.id === project.id ? styles['Projects__Card--Active'] : '',
            ].join(' ')}
            style={{
              backgroundImage: `${projectFocused?.id === project.id
                ? `linear-gradient(
                    to bottom, 
                    rgba(var(--rgb--blue-dark), 0.8), 
                    rgba(var(--rgb--blue-dark), 0.8)
                  ),`
                : ''} 
              url(${project.image})`,
            }}
            onClick={() => focusProject(project)}
            onMouseEnter={() => focusProject(project)}
            onMouseLeave={() => focusProject(undefined)}
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
                onClick={() => openProject(project)}
              >
                Play
              </Button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <Modal onBackdrop={() => openProject(undefined)}>
          <Vimeo
            autoplay
            video={projectOpened!.video}
            width={width * 0.8}
          />
        </Modal>
      )}

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
