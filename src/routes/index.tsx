import * as React from "react";
import { Switch, Redirect } from "react-router-dom";
import { Router } from "react-router";
import { Route, PrivateRoute } from "./helpers";
//Services
import history from "../services/history";
//Components
import { Main, Login } from "../containers";
import { fork } from "child_process";
//Routes

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default Routes;
