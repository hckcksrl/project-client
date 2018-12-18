import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StartApp from "./StartApp";
import IsLogin from "../../Route/User/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={"/"} component={StartApp} />
          <Route path={"/login"} component={IsLogin} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
