/* eslint-disable quotes */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import Header from "../Shared/Header";
import Accordion from "./Accordion";
import { projects } from "./data";
import styles from "./all-projects.module.css";
import Footer from "../Shared/Footer";

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
      <Header />
      <section className={styles.main}>
        <h2 className={styles.title}>💼 Portfolio 💼</h2>
        <div>
          {projects?.map((project) => (
            <Accordion
              key={project.title}
              accordionOpened={accordionOpened}
              setAccordionOpened={toggleAccordionOpened}
              {...project}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AllProjects;
