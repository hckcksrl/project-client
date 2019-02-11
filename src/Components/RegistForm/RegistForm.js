import React from "react";
import "../LoginForm/LoginForm.scss";
import Regist from "../../Route/User/Register";

class RegistForm extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="login-sign">
          <div className="login-wrap">
            <div className="login-header">
              <span>회원가입</span>
            </div>
            <div className="login-main-wrap">
              <div className="login-main">
                <Regist props={this.props} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistForm;
