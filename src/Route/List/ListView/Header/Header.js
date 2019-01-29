import React from "react";
import Logout from "../../../User/Logout";
import PropTypes from "prop-types";
import "./header.scss";

class HeaderPage extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <nav className="Header-nav">
        <div className="Header">
          <div className="Header-center">
            <div className="Header-wrap">
              <span className="Name">{email}</span>
            </div>
            <div>
              <Logout />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
HeaderPage.propTypes = {
  email: PropTypes.string.isRequired
};

export default HeaderPage;
