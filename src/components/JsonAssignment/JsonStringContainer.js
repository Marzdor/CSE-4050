import React, { useState } from "react";
import {
  generateRandomJsonString,
  parseJsonString,
} from "../../helperFunctions/jsonHelper";

import BasicButton from "../BasicButton";
import buttonStyles from "../../enums/buttonStyles";
import { jsonAssignmentStyles } from "../../styles/styles";
import { saveAs } from "file-saver";

const JsonStringContainer = () => {
  const [jsonString, setJsonString] = useState("");

  const getJsonString = () => {
    const string = generateRandomJsonString();

    setJsonString(string);
  };

  const saveJsonString = () => {
    const blob = new Blob([jsonString], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "RawString.txt");
  };

  const saveJsonObject = () => {
    const jsonObj = parseJsonString(jsonString);
    const blob = new Blob([jsonObj], { type: "json;charset=utf-8" });
    saveAs(blob, "ParsedJson.json");
  };

  return (
    <div className={jsonAssignmentStyles.JsonStringContainer}>
      <div className={jsonAssignmentStyles.JsonStringDisplayContainer}>
        <p>{jsonString}</p>
      </div>
      <div className={jsonAssignmentStyles.JsonStringButtonContainer}>
        <BasicButton
          text="Generate Json String"
          onClick={getJsonString}
          buttonStyle={buttonStyles.PRIMARY}
        />
        <BasicButton
          text="Clear Json"
          onClick={() => setJsonString("")}
          buttonStyle={buttonStyles.DANGER}
          disabled={jsonString === ""}
        />
      </div>
      <div className={jsonAssignmentStyles.JsonStringButtonContainer}>
        <BasicButton
          text="Save Raw String"
          onClick={saveJsonString}
          buttonStyle={buttonStyles.SUCCESS}
          disabled={jsonString === ""}
        />
        <BasicButton
          text="Save Parsed Json"
          onClick={saveJsonObject}
          buttonStyle={buttonStyles.SUCCESS}
          disabled={jsonString === ""}
        />
      </div>
    </div>
  );
};

export default JsonStringContainer;
