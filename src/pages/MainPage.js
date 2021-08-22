import BasicButton from "../components/BasicButton";
import BasicPageContainer from "./common/BasicPageContainer";
import React from "react";
import buttonStyles from "../enums/buttonStyles";
import styles from "../styles/pageStyles.module.css";

const MainPage = () => {
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
      <h1 className={styles["MainPage-Title"]}>
        CSE 4050 Web Application Development
      </h1>
      <div>
        <BasicButton
          onClick={openGithubNewTab}
          style={buttonStyles.PRIMARY}
          text="Github Link"
        />
      </div>
    </BasicPageContainer>
  );
};

export default MainPage;
