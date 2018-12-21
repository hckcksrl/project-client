import React from "react";
import styled from "styled-components";
import { EmailRegist } from "./queries";
import { Mutation } from "react-apollo";

const Input = styled.input`
  padding: 1em;
  margin: 1em;
  color: ${props => props.inputColor || "black"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Password = styled.input`
  padding: 1em;
  margin: 1em;
  color: ${props => props.inputColor || "black"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Form = styled.form``;

export default class Regist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    const { history } = this.props;
    const { email, password } = this.state;
    return (
      <Mutation
        mutation={EmailRegist}
        variables={{ email: email, password: password }}
        onCompleted={data => {
          console.log(data);
          const { Regist } = data;
          if (Regist.result) {
            localStorage.setItem("token", Regist.token);
            history.push("/");
          } else {
            console.log(Regist.error);
          }
        }}
      >
        {Email_Regist => (
          <Form
            onSubmit={e => {
              e.preventDefault();
              Email_Regist({
                variables: {
                  email: email,
                  password: password
                }
              });
            }}
          >
            <Input
              placeholder="email"
              type="email"
              onChange={this._onInputChange}
              value={email}
              name={"email"}
            />
            <Password
              placeholder="password"
              type="password"
              onChange={this._onInputChange}
              value={password}
              name={"password"}
            />
            <Button type="submit">Regist</Button>
          </Form>
        )}
      </Mutation>
    );
  }
  _onInputChange = event => {
    const {
      target: { value, name }
    } = event;
    this.setState({
      [name]: value
    });
  };
}