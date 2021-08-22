import BasicPageContainer from "./common/BasicPageContainer";
import React from "react";
import UserInfoContainer from "../components/JsonAssignment/UserInfoContainer";
import styles from "../styles/pageStyles.module.css";

const JsonAssignmentPage = () => {
  return (
    <BasicPageContainer>
      <h1 className={styles["Page-Title"]}>Json Assignment Page </h1>
      <UserInfoContainer />
    </BasicPageContainer>
  );
};

export default JsonAssignmentPage;
