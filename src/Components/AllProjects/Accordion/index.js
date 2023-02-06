/* eslint-disable quotes */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import styles from "./accordion.module.css";

function Accordion({
  setAccordionOpened,
  accordionOpened,
  image,
  logo,
  title,
  techStack,
  body,
  sourceCode,
  liveProject,
}) {
  const isOpened = title === accordionOpened;
  return (
    <div className={styles.accordion}>
      <div
        onClick={() => setAccordionOpened(title)}
        className={styles.accordionHeader}
      >
        <img alt="logo" src={logo} className={styles.projectLogo} />
        <div className={styles.accordionIndicator}>{isOpened ? "-" : "+"}</div>
      </div>
      {isOpened && (
        <div className={styles.accordionBody}>
          <div>
            <h2>Preview:</h2>
            <img alt="project" className={styles.accordionImage} src={image} />
          </div>
          <div className={styles.tech}>
            <h3 className={styles.techTitle}>Tech:</h3>
            {techStack?.map((data) => (
              <img
                alt="project"
                className={styles.techImg}
                src={data.url}
                key={data.title}
                {...data}
              />
            ))}
          </div>
          <h4 className={styles.projectDescription}>Project Description:</h4>
          {body}
          <div className={styles.btns}>
            <div className={styles.btn}>
              <a href={sourceCode} target="_blank" rel="noreferrer">
                <img
                  className={styles.projectsLinks}
                  alt="github"
                  src={`${process.env.PUBLIC_URL}/img/icons/github.png`}
                />
              </a>
            </div>
            <div className={styles.btn}>
              <a href={liveProject} target="_blank" rel="noreferrer">
                <img
                  className={styles.projectsLinks}
                  alt="live project"
                  src={`${process.env.PUBLIC_URL}/img/icons/share.png`}
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
