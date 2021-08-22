import React, { useState } from "react";

import BasicButton from "../BasicButton";
import { apiAssignmentStyles } from "../../styles/styles";
import buttonStyles from "../../enums/buttonStyles";
import { convertJsonToString } from "../../helperFunctions/jsonHelper";
import { fetchRandomUser } from "../../helperFunctions/axiosHelper";

const UserInfoContainer = () => {
  const [userInfo, setUserInfo] = useState({});

  const displayUserInfo = async () => {
    const { data, success } = await fetchRandomUser();

    if (success) {
      setUserInfo(data);
    }
  };

  return (
    <div className={apiAssignmentStyles.UserInfoContainer}>
      <div className={apiAssignmentStyles.UserInfoDisplayContainer}>
        <div>
          <pre>
            <p>{convertJsonToString(userInfo)}</p>
          </pre>
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
