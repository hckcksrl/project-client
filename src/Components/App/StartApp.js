import React, { Component } from "react";
import { Query } from "react-apollo";
import { Is_Login } from "./queries";
import App from "./App";

class Container extends Component {
  render() {
    return (
      <Query query={Is_Login}>
        {({ data }) => {
          console.log(data.auth.isLoggedIn);
          return <App isLoggedIn={data.auth.isLoggedIn} />;
        }}
      </Query>
    );
  }
}
export default Container;
