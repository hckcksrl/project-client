import React from "react";
import PropTypes from "prop-types";
import { EmailLogin } from "./queries";
import { Mutation } from "react-apollo";
import { Logined } from "../../../LocalQueries";

class Login extends React.Component {
  submit = (e, Email_Login) => {
    const { email, password } = this.props;
    e.preventDefault();
    Email_Login({
      variables: {
        email: email,
        password: password
      }
    });
  };

  render() {
    const { history } = this.props;
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
                history.go();
              } else {
                return Login.error;
              }
            }}
          >
            {Email_Login => (
              <button
                type="submit"
                onSubmit={e => {
                  this.submit(e, Email_Login);
                }}
              >
                Login
              </button>
            )}
          </Mutation>
        )}
      </Mutation>
    );
  }
}

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default Login;
