import * as React from "react";
import { Switch, Redirect } from "react-router-dom";
import { Router } from "react-router";
import { Route, PrivateRoute } from "./helpers";
//Services
import history from "../services/history";
//Components
import { Main } from "../containers";
//Routes

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default Routes;
