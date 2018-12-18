import React from "react";
import Login from "./Login";
import { EmailLogin } from "./queries";
import { Mutation } from "react-apollo";
import bcrypt from "bcrypt";

export default class IsLogin extends React.Component {
  render() {
    return (
      <Mutation mutation={EmailLogin}>
        {Email_Login => {
          this.Email_Login = Email_Login;
          return <Login Login={this._Login} />;
        }}
      </Mutation>
    );
  }
  _Login = (email, password) => {
    fetch;
  };
}
