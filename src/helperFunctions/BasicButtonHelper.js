import buttonStyles from "../enums/buttonStyles";
import styles from "../styles/buttonStyles.module.css";

export const getButtonStyle = (style) => {
  const classNames = [styles["BasicButton"]];

  switch (style) {
    case buttonStyles.PRIMARY:
      classNames.push(styles["BasicButton-Primary"]);
      break;
    case buttonStyles.INFO:
      classNames.push(styles["BasicButton-Info"]);
      break;
    case buttonStyles.SUCCESS:
      classNames.push(styles["BasicButton-Success"]);
      break;
    case buttonStyles.WARNING:
      classNames.push(styles["BasicButton-Warning"]);
      break;
    case buttonStyles.DANGER:
      classNames.push(styles["BasicButton-Danger"]);
      break;

    default:
      console.warn("[getButtonStyle][default] Style: ", style);
      break;
  }

  return classNames.join(" ");
};
