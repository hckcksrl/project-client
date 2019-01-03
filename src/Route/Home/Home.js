import React from "react";
import { MyId } from "./queries";
import { Query } from "react-apollo";
import styled from "styled-components";

const Button = styled.button`
  font-size: 18px;
  line-height: 30px;
  font-weight: 600;
`;

const Form = styled.form``;

export default class Home extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <Query query={MyId}>
        {data => {
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
