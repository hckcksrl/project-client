import React from "react";
import Login from "../../Route/User/Login";
import "./LoginForm.scss";

class LoginForm extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="login-sign">
          <div className="login-wrap">
            <div className="login-header">
              <span>로그인</span>
            </div>
            <div className="login-main-wrap">
              <div className="login-main">
                <Login props={this.props} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
