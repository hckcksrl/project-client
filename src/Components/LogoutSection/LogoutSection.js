import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "../LoginForm";
import Home from "../../Route/Home";
import RegistForm from "../RegistForm";
import PropTypes from "prop-types";

const LogoutSection = ({ isLoggedIn }) => {
  return (
    <Switch>
      <Route
        exact={true}
        path={"/"}
        render={props => <Home isLoggedIn={isLoggedIn} {...props} />}
      />
      <Route path={"/regist"} component={RegistForm} />
      <Route path={"/login"} component={LoginForm} />
      <Redirect to={"/"} />
    </Switch>
  );
};

LogoutSection.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default LogoutSection;
