import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import List from "../../Route/List";
import Home from "../../Route/Home";
import PropTypes from "prop-types";

const LoginSection = ({ isLoggedIn }) => {
  return (
    <Switch>
      <Route
        exact={true}
        path={"/"}
        render={props => <Home isLoggedIn={isLoggedIn} {...props} />}
      />
      <Route path={"/list/:userid"} component={List} />
      <Redirect to={"/"} />
    </Switch>
  );
};

LoginSection.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default LoginSection;
