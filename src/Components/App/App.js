import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StartApp from "./StartApp";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={"/"} component={StartApp} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
