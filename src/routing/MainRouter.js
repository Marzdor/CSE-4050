import { Route, HashRouter as Router, Switch } from "react-router-dom";

import ApiAssignmentPage from "../pages/ApiAssignmentPage";
import JsonAssignmentPage from "../pages/JsonAssignmentPage";
import MainPage from "../pages/MainPage";
import React from "react";
import SynthPage from "../pages/SynthPage";
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
        <Route exact path={`/${routeNames.API_ASSIGNMENT}`}>
          <ApiAssignmentPage />
        </Route>
        <Route exact path={`/${routeNames.SYNTH}`}>
          <SynthPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
