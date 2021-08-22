import React from "react";
import styles from "../../styles/pageStyles.module.css";

const BasicPageContainer = ({ children, ...props }) => {
  return (
    <section className={styles["BasicPage-MainContainer"]}>{children}</section>
  );
};

export default BasicPageContainer;
