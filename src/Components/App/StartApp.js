import React, { Component } from "react";
import { Link } from "react-router-dom";

class StartApp extends Component {
  render() {
    return <Link to={"/login"}>a</Link>;
  }
  _click = () => {
    this.render("/login");
  };
}

export default StartApp;
