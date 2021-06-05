/* eslint-disable react/no-danger */
import React, { useState } from 'react';

import { projects } from '../../data/projects';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';

import styles from './projects.module.scss';
import { Player } from '../../components/Player';

type Project = typeof projects[0];

const Projects = () => {
  const [projectFocused, setProjectFocused] = useState<Project | undefined>();

  const [showModal, setShowModal] = useState(false);
  const [projectOpened, setProjectOpened] = useState<Project | undefined>();

  const focusProject = (project: Project | undefined) => {
    setTimeout(() => setProjectFocused(
      projectFocused?.id === project?.id
        ? undefined
        : project,
    ));
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
                    rgba(var(--rgb--blue-dark), 0.9), 
                    rgba(var(--rgb--blue-dark), 0.9)
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

              <Text size="h2">
                <span
                  className={styles.Projects__Title}
                  dangerouslySetInnerHTML={(() => ({ __html: project.name }))()}
                />
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

      <Text
        className={styles.Projects__ComingSoon}
        size="h5"
      >
        (More projects coming soon)
      </Text>

      {showModal && (
        <Modal
          className={styles.Projects__Player}
          onBackdrop={() => openProject(undefined)}
        >
          <Player video={projectOpened!.video} />
        </Modal>
      )}
    </div>
  );
};

export { Projects };
