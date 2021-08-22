import React from "react";
import { getButtonStyle } from "../helperFunctions/BasicButtonHelper";
import styles from "../styles/buttonStyles.module.css";

const BasicButton = ({
  text = "",
  onClick = () => console.log("Default Button Click"),
  buttonStyle,
  style = {},
  ...props
}) => {
  return (
    <div
      className={getButtonStyle(buttonStyle)}
      style={style}
      onClick={onClick}
    >
      <p className={styles["BasicButton-Text"]}>{text}</p>
    </div>
  );
};

export default BasicButton;
