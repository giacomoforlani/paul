/* eslint-disable react/no-danger */
import React, { useCallback, useMemo, useState } from 'react';
import { isTouchDevice } from '../../core/utilities';

import { projects } from '../../data/projects';

import { Button } from '../../lib/components/Button';
import { Modal } from '../../lib/components/Modal';
import { Player } from '../../lib/components/Player';
import { Text } from '../../lib/components/Text';

import styles from './projects.module.scss';

type Project = typeof projects[0];

const Projects = () => {
  const [focused, setFocused] = useState<Project | undefined>();

  const [showModal, setShowModal] = useState(false);
  const [opened, setOpened] = useState<Project | undefined>();

  const focus = useCallback((project: Project | undefined) => {
    setFocused(
      focused?.id === project?.id
        ? undefined
        : project,
    );
  }, [focused]);

  const open = useCallback((project: Project | undefined) => {
    setShowModal(!!project);
    setOpened(project);
  }, []);

  const clickHandler = useMemo(() => (isTouchDevice ? focus : () => {}), [focus]);

  const hoverHandler = useMemo(() => (isTouchDevice ? () => {} : focus), [focus]);

  return (
    <section className={styles.Projects}>
      <div
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        className={styles.Cards}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className={[styles.Card, focused?.id === project.id ? styles.Focus : ''].join(' ')}
            style={{ backgroundImage: `url(${project.image})` }}
            onClick={() => clickHandler(project)}
            onMouseEnter={() => hoverHandler(project)}
            onMouseLeave={() => hoverHandler(undefined)}
          >
            <div className={styles.Card__Info}>
              <div className={styles.Card__Top}>
                <Text
                  className={styles.Card__Label}
                  size="h6"
                >
                  {project.label}
                </Text>

                <Text size="h2">
                  <span
                    className={styles.Card__Title}
                    dangerouslySetInnerHTML={(() => ({ __html: project.name }))()}
                  />
                </Text>
              </div>

              <div className={styles.Card__Bottom}>
                <Text
                  className={styles.Card__Description}
                  size="h5"
                >
                  {project.description}
                </Text>

                <Button
                  className={styles.Card__Cta}
                  kind="secondary"
                  onClick={() => open(project)}
                >
                  Play
                </Button>
              </div>
            </div>
          </div>
        ))}

        <Text
          className={styles.ComingSoon}
          data-aos="fade-up"
          data-aos-once="true"
          size="h5"
        >
          (More projects coming soon)
        </Text>
      </div>

      <Modal
        className={styles.Player}
        visible={showModal}
        onBackdrop={() => open(undefined)}
      >
        {opened && <Player video={opened!.video} />}
      </Modal>
    </section>
  );
};

export { Projects };
