import React, { Component } from "react";
import PropTypes from "prop-types";
import LogOut from "../../Route/User/Logout";
import { Link } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
  // loginClick = e => {
  //   const position = e.target.getBoundingClientRect();
  //   const pop_up = document.getElementsByClassName("details")[0];
  //   document.getElementsByClassName("pop-main")[0].style.display = "block";
  //   pop_up.style.left = `${position.left}px`;
  //   pop_up.style.top = `${position.top}px`;
  // };

  // signClick = e => {
  //   const position = e.target.getBoundingClientRect();
  // };

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="Header">
        <div className="Header-height">
          <div className="Header-center">
            <div className="Header-wrap">
              <span className="Name">
                <Link to="/">PM</Link>
              </span>
            </div>
            <div className="border" />
            {/* <LogOut /> */}
            {isLoggedIn ? (
              <LogOut />
            ) : (
              <div className="login-logout">
                <div className="login-signup">
                  <Link to={"/login"}> Log in</Link>
                </div>
                <div className="login-signup">
                  <Link to={"/regist"}>Sign Up</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default Header;
