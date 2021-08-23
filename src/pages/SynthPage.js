import BasicPageContainer from "./common/BasicPageContainer";
import React from "react";
import { pageStyles } from "../styles/styles";

const SynthPage = () => {
  return (
    <BasicPageContainer>
      <h1 className={pageStyles.PageTitle}>Synth</h1>
    </BasicPageContainer>
  );
};

export default SynthPage;
