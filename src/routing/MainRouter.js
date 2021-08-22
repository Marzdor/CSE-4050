import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import MainPage from "../pages/MainPage";
import React from "react";

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
