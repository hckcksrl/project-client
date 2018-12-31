import React from "react";
import { MyId } from "./queries";
import { Query } from "react-apollo";
import styled from "styled-components";

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

export default class Home extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <Query query={MyId}>
        {data => {
          console.log(data);
          return (
            <Form
              onSubmit={e => {
                history.push(`/list/${data.data.GetMy.user.id}`);
              }}
            >
              <Button type="submit">List</Button>
            </Form>
          );
        }}
      </Query>
    );
  }
}
