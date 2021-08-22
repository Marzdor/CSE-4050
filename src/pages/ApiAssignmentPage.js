import BasicPageContainer from "./common/BasicPageContainer";
import React from "react";
import UserInfoContainer from "../components/ApiAssignment/UserInfoContainer";
import styles from "../styles/pageStyles.module.css";

const ApiAssignmentPage = () => {
  return (
    <BasicPageContainer>
      <h1 className={styles["Page-Title"]}>Api Assignment Page </h1>
      <UserInfoContainer />
    </BasicPageContainer>
  );
};

export default ApiAssignmentPage;
