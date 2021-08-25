import { basicButtonStyles } from "../styles/styles";
import buttonStyles from "../enums/buttonStyles";

export const getButtonStyle = ({ buttonStyle, disabled }) => {
  const classNames = [basicButtonStyles.BasicButton];

  switch (buttonStyle) {
    case buttonStyles.PRIMARY:
      classNames.push(basicButtonStyles.BasicButtonPrimary);
      break;
    case buttonStyles.INFO:
      classNames.push(basicButtonStyles.BasicButtonInfo);
      break;
    case buttonStyles.SUCCESS:
      classNames.push(basicButtonStyles.BasicButtonSuccess);
      break;
    case buttonStyles.WARNING:
      classNames.push(basicButtonStyles.BasicButtonWarning);
      break;
    case buttonStyles.DANGER:
      classNames.push(basicButtonStyles.BasicButtonDanger);
      break;

    default:
      console.warn("[getButtonStyle][default] Style: ", buttonStyle);
      break;
  }

  if (disabled) classNames.push(basicButtonStyles.BasicButtonDisabled);

  return classNames.join(" ");
};
