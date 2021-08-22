import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import ApiAssignmentPage from "../pages/ApiAssignmentPage";
import MainPage from "../pages/MainPage";
import React from "react";
import routeNames from "../enums/routeNames";

const MainRouter = () => {
  return (
    <Router>
      <Switch basename="/CSE-4050/">
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path={`/${routeNames.API_ASSIGNMENT}`}>
          <ApiAssignmentPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
