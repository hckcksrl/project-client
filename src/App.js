import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import client from "./apollo";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>ddd</div>
      </ApolloProvider>
    );
  }
}

export default App;
