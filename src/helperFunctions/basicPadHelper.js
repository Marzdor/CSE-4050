import { basicPadStyles } from "../styles/styles";

export const getBasicPadStyle = ({ disabled }) => {
  const classNames = [basicPadStyles.BasicPad];

  if (disabled) classNames.push(basicPadStyles.BasicPadDisabled);

  return classNames.join(" ");
};
