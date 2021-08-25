import React from "react";
import { basicButtonStyles } from "../styles/styles";
import { getButtonStyle } from "../helperFunctions/basicButtonHelper";

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
      <p className={basicButtonStyles.BasicButtonText}>{text}</p>
    </div>
  );
};

export default BasicButton;
