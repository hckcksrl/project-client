import React from "react";
import styled from "styled-components";

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

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    const { email, password } = this.state;
    return (
      <>
        <Input placeholder="email" type="email" ref={email} />
        <Password placeholder="password" type="password" ref={password} />
        <Button onClick="_Login">Login</Button>
      </>
    );
  }
  _Login = () => {
    const { Login } = this.props;
    const { email, password } = this.state;
    Login(email, password);
  };
}
