import React, { Component } from "react";
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
    return (
      <div className="Header">
        <div className="Header-height">
          <div className="Header-center">
            <div className="Header-wrap">
              <span className="Name">PM</span>
            </div>
            <div className="border" />
            <div className="login-logout">
              <div
                className="login-signup"
                // onClick={e => this.loginClick(e)}
              >
                Log in
              </div>
              <div
                className="login-signup"
                // onClick={e => this.signClick(e)}
              >
                Sign Up
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
