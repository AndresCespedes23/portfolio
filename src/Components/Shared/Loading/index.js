/* eslint-disable react/jsx-boolean-value */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Vortex } from "react-loader-spinner";

import styles from "./loading.module.css";

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
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        </div>
      </div>
    </motion.section>
  );
}

export default Loading;
