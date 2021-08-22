import BasicPageContainer from "./common/BasicPageContainer";
import JsonStringContainer from "../components/JsonAssignment/JsonStringContainer";
import React from "react";
import { pageStyles } from "../styles/styles";

const JsonAssignmentPage = () => {
  return (
    <BasicPageContainer>
      <h1 className={pageStyles.PageTitle}>Json Assignment Page </h1>
      <JsonStringContainer />
    </BasicPageContainer>
  );
};

export default JsonAssignmentPage;
