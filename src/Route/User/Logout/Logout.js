import React from "react";
import { Logout } from "../../../LocalQueries";
import styled from "styled-components";
import { Mutation } from "react-apollo";

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

export default class LogOut extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <Mutation
        mutation={Logout}
        onCompleted={data => {
          history.push("/");
        }}
      >
        {UserLogout => (
          <Form
            onSubmit={e => {
              UserLogout();
            }}
          >
            <Button type="submit">Logout</Button>
          </Form>
        )}
      </Mutation>
    );
  }
}
