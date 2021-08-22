import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import JsonAssignmentPage from "../pages/JsonAssignmentPage";
import MainPage from "../pages/MainPage";
import React from "react";
import routeNames from "../enums/routeNames";

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path={`/${routeNames.JSON_ASSIGNMENT}`}>
          <JsonAssignmentPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
