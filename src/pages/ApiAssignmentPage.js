import BasicPageContainer from "./common/BasicPageContainer";
import React from "react";
import UserInfoContainer from "../components/ApiAssignment/UserInfoContainer";
import { pageStyles } from "../styles/styles";

const ApiAssignmentPage = () => {
  return (
    <BasicPageContainer>
      <h1 className={pageStyles.PageTitle}>Api Assignment Page </h1>
      <UserInfoContainer />
    </BasicPageContainer>
  );
};

export default ApiAssignmentPage;
