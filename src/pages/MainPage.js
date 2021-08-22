import BasicButton from "../components/BasicButton";
import BasicPageContainer from "./common/BasicPageContainer";
import React from "react";
import buttonStyles from "../enums/buttonStyles";
import routeNames from "../enums/routeNames";
import styles from "../styles/pageStyles.module.css";
import { useHistory } from "react-router-dom";

const MainPage = () => {
  const history = useHistory();

  const openGithubNewTab = () => {
    const github = window.open("https://github.com/Marzdor/CSE-4050", "_blank");
    if (github) {
      //Browser has allowed it to be opened
      github.focus();
    } else {
      //Browser has blocked it
      alert("Please allow popups for this website");
    }
  };

  return (
    <BasicPageContainer>
      <h1 className={styles["Page-Title"]}>
        CSE 4050 Web Application Development
      </h1>
      <div className={styles["MainPage-ButtonContainer"]}>
        <BasicButton
          buttonStyle={buttonStyles.PRIMARY}
          onClick={openGithubNewTab}
          text="Github Link"
        />
        <BasicButton
          onClick={() => history.push(routeNames.JSON_ASSIGNMENT)}
          buttonStyle={buttonStyles.PRIMARY}
          text="Json Assignment"
        />
        <BasicButton
          onClick={() => history.push(routeNames.API_ASSIGNMENT)}
          buttonStyle={buttonStyles.PRIMARY}
          text="Api Assignment"
        />
      </div>
    </BasicPageContainer>
  );
};

export default MainPage;
