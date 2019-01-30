import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Regist from "../../Route/User/Register";
import Login from "../../Route/User/Login";

const LogoutSection = () => {
  return (
    <Switch>
      <Route exact={true} path={"/"} component={Login} />
      <Route path={"/regist"} component={Regist} />
      <Redirect to={"/"} />
    </Switch>
  );
};

export default LogoutSection;
