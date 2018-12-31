import React from "react";
import ReactDOM from "react-dom";
import Container from "./Components/App";
import { ApolloProvider } from "react-apollo";
import client from "./apollo";

document.body.style.background = "rgb(0, 121, 191)";
ReactDOM.render(
  <ApolloProvider client={client}>
    <Container />
  </ApolloProvider>,
  document.getElementById("root")
);
