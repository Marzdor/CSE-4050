import React from "react";
import { getButtonStyle } from "../helperFunctions/BasicButtonHelper";
import styles from "../styles/buttonStyles.module.css";

const BasicButton = ({
  text = "",
  onClick = () => console.log("Default Button Click"),
  buttonStyle,
  style = {},
  disabled = false,
  ...props
}) => {
  return (
    <div
      className={getButtonStyle({ buttonStyle, disabled })}
      style={style}
      onClick={!disabled ? onClick : null}
    >
      <p className={styles["BasicButton-Text"]}>{text}</p>
    </div>
  );
};

export default BasicButton;
