import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StartApp from "./StartApp";
import Regist from "../../Route/User/Register";
import Login from "../../Route/User/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={"/"} component={StartApp} />
          <Route path={"/login"} component={Login} />
          <Route path={"/regist"} component={Regist} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
