/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./loading.module.css";
import Spinner from "./Spinner";

function Loading() {
  const [isLoading, setLoading] = useState(false);
  const loadingScreen = () => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  };
  window.addEventListener("load", loadingScreen);

  return (
    <motion.section
      animate={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={
        isLoading ? styles.modalContainerHidden : styles.modalContainer
      }
    >
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <Spinner />
        </div>
      </div>
    </motion.section>
  );
}

export default Loading;
