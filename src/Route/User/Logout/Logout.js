import React from "react";
import { Logout } from "../../../LocalQueries";
import { Mutation } from "react-apollo";
import styled from "styled-components";

const Form = styled.form`
  float: right;
  font-size: 18px;
  line-height: 30px;
  font-weight: 600;
`;
const Button = styled.button`
  float: right;
  font-size: 18px;
  line-height: 30px;
  font-weight: 600;
`;

export default class LogOut extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <Mutation
        mutation={Logout}
        onCompleted={data => {
          history.go();
        }}
      >
        {(UserLogout, { data, loading, error, called, client }) => (
          <Form
            onSubmit={e => {
              UserLogout().then(() => client.clearStore());
            }}
          >
            <Button type="submit">Logout</Button>
          </Form>
        )}
      </Mutation>
    );
  }
}
