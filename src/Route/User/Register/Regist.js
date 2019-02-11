import React, { Component } from "react";
import { EmailRegist } from "./queries";
import { Mutation } from "react-apollo";
import { Logined } from "../../../LocalQueries";
import PropTypes from "prop-types";
import "../Login/Login.scss";

class Regist extends Component {
  submit = (e, Email_Regist) => {
    const email = this.email.value;
    const password = this.password.value;
    e.preventDefault();
    Email_Regist({
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
            mutation={EmailRegist}
            onCompleted={data => {
              const { Regist } = data;
              if (Regist.result) {
                localStorage.setItem("token", Regist.token);
                UserLogin({
                  variables: {
                    token: Regist.token
                  }
                });
                props.history.go();
              } else {
                return Regist.error;
              }
            }}
          >
            {Email_Regist => (
              <form onSubmit={e => this.submit(e, Email_Regist)}>
                <div className="login-input">
                  <input
                    ref={node => (this.email = node)}
                    id="email"
                    type="email"
                    placeholder="email"
                    autoComplete="off"
                  />
                </div>
                <div className="login-input">
                  <input
                    ref={node => (this.password = node)}
                    id="password"
                    type="password"
                    placeholder="password"
                    name="password"
                    autoComplete="off"
                    required={true}
                  />
                </div>
                <div className="login-button-wrap">
                  <button type="submit">Regist</button>
                </div>
              </form>
            )}
          </Mutation>
        )}
      </Mutation>
    );
  }
}
Regist.propTypes = {
  props: PropTypes.object.isRequired
};

export default Regist;
