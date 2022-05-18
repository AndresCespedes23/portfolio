/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import NavBar from '../Shared/DesktopNavBar';
import Accordion from './Accordion';
import { projects } from './data';
import styles from './all-projects.module.css';

function AllProjects() {
  const [accordionOpened, setAccordionOpened] = useState(null);

  const toggleAccordionOpened = (accordion) => {
    if (accordionOpened === accordion) {
      setAccordionOpened(null);
    } else {
      setAccordionOpened(accordion);
    }
  };

  return (
    <>
      <section className={styles.main}>
        <h2 className={styles.title}>💼 Portfolio 💼</h2>
        <div>
          {projects?.map((project) => (
            <Accordion
              accordionOpened={accordionOpened}
              setAccordionOpened={toggleAccordionOpened}
              {...project}
            />
          ))}
        </div>
      </section>
      <NavBar />
    </>
  );
}

export default AllProjects;
