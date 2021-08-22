import React, { useState } from "react";

import BasicButton from "../BasicButton";
import buttonStyles from "../../enums/buttonStyles";
import { convertJsonToString } from "../../helperFunctions/JsonHelper";
import { fetchRandomUser } from "../../helperFunctions/AxiosHelper";
import styles from "../../styles/apiAssignmentStyles.module.css";

const UserInfoContainer = () => {
  const [userInfo, setUserInfo] = useState({});

  const displayUserInfo = async () => {
    const { data, success } = await fetchRandomUser();

    if (success) {
      setUserInfo(data);
    }
  };

  return (
    <div className={styles["UserInfo-Container"]}>
      <div className={styles["UserInfo-DisplayContainer"]}>
        <div>
          <p>
            <pre>{convertJsonToString(userInfo)}</pre>
          </p>
        </div>
      </div>
      <BasicButton
        buttonStyle={buttonStyles.PRIMARY}
        onClick={displayUserInfo}
        text="Get Random User"
        style={{ alignSelf: "center" }}
      />
    </div>
  );
};

export default UserInfoContainer;
