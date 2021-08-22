import BasicPageContainer from "./common/BasicPageContainer";
import JsonStringContainer from "../components/JsonAssignment/JsonStringContainer";
import React from "react";
import styles from "../styles/pageStyles.module.css";

const JsonAssignmentPage = () => {
  return (
    <BasicPageContainer>
      <h1 className={styles["Page-Title"]}>Api Assignment Page </h1>
      <JsonStringContainer />
    </BasicPageContainer>
  );
};

export default JsonAssignmentPage;
