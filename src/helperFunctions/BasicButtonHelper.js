import buttonStyles from "../enums/buttonStyles";
import styles from "../styles/buttonStyles.module.css";

export const getButtonStyle = ({ buttonStyle, disabled }) => {
  const classNames = [styles.BasicButton];

  switch (buttonStyle) {
    case buttonStyles.PRIMARY:
      classNames.push(styles.BasicButtonPrimary);
      break;
    case buttonStyles.INFO:
      classNames.push(styles.BasicButtonInfo);
      break;
    case buttonStyles.SUCCESS:
      classNames.push(styles.BasicButtonSuccess);
      break;
    case buttonStyles.WARNING:
      classNames.push(styles.BasicButtonWarning);
      break;
    case buttonStyles.DANGER:
      classNames.push(styles.BasicButtonDanger);
      break;

    default:
      console.warn("[getButtonStyle][default] Style: ", buttonStyle);
      break;
  }

  if (disabled) classNames.push(styles.BasicButtonDisabled);

  return classNames.join(" ");
};
