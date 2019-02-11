import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";
import LoginSection from "../LoginSection";
import LogoutSection from "../LogoutSection";
import Footer from "../Footer";
import Header from "../Header";
import Overlay from "../Overlay";
import "./index.scss";

class App extends React.Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <Router>
        <div className="body">
          <div className="content">
            <Header isLoggedIn={isLoggedIn} />
            <section className="section">
              {isLoggedIn ? (
                <LoginSection isLoggedIn={isLoggedIn} />
              ) : (
                <LogoutSection isLoggedIn={isLoggedIn} />
              )}
            </section>
            <Footer />
          </div>
          <Overlay />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default App;
