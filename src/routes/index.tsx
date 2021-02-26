import React from "react";
import { Switch, Route } from "react-router-dom";

//import Route from "./Route";

import SignIn from "../pages/SignIn/index";
import SignUp from "../pages/SignUp/index";
import ForgotPassword from "../pages/ForgotPassword/index";
import Dashboard from "../pages/Dashboard/index";
import ResetPassword from "../pages/ResetPassword/index";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
