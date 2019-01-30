import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";
import LoginSection from "../LoginSection";
import LogoutSection from "../LogoutSection";

class App extends React.Component {
  render() {
    const { isLoggedIn } = this.props;
    return <Router>{isLoggedIn ? <LoginSection /> : <LogoutSection />}</Router>;
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default App;
