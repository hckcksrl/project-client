import React, { Component } from "react";
import { EmailLogin } from "./queries";
import { Mutation } from "react-apollo";
import { Logined } from "../../../LocalQueries";
import PropTypes from "prop-types";
import "./Login.scss";

class Login extends Component {
  submit = (e, Email_Login) => {
    const email = this.email.value;
    const password = this.password.value;
    e.preventDefault();
    Email_Login({
      variables: {
        email: email,
        password: password
      }
    });
  };

  render() {
    const { props } = this.props;
    return (
      <Mutation mutation={Logined}>
        {UserLogin => (
          <Mutation
            mutation={EmailLogin}
            onCompleted={data => {
              const { Login } = data;
              if (Login.result) {
                localStorage.setItem("token", Login.token);
                UserLogin({
                  variables: {
                    token: Login.token
                  }
                });
                props.history.go();
              } else {
                return Login.error;
              }
            }}
          >
            {Email_Login => (
              <form onSubmit={e => this.submit(e, Email_Login)}>
                <div className="login-input">
                  <input
                    ref={node => (this.email = node)}
                    type="email"
                    autoComplete="off"
                    placeholder="email"
                  />
                </div>
                <div className="login-input">
                  <input
                    ref={node => (this.password = node)}
                    type="password"
                    placeholder="password"
                    name="password"
                    autoComplete="off"
                    required={true}
                  />
                </div>
                <div className="login-button-wrap">
                  <button type="submit">Login</button>
                </div>
              </form>
            )}
          </Mutation>
        )}
      </Mutation>
    );
  }
}

Login.propTypes = {
  props: PropTypes.object.isRequired
};
export default Login;
