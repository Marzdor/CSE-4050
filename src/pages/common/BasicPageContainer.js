import React from "react";
import { pageStyles } from "../../styles/styles";

const BasicPageContainer = ({ children, ...props }) => {
  return (
    <section className={pageStyles.BasicPageMainContainer}>{children}</section>
  );
};

export default BasicPageContainer;
