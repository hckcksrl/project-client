import React from "react";
import ReactDOM from "react-dom";
import Container from "./Components/App";
import { ApolloProvider } from "react-apollo";
import client from "./apollo";
import "./style.css";

document.body.style.background = "rgb(0, 121, 191)";
// document.getElementById("root").style.height = "100%";
// document.getElementById("root").style.width = "100%";
ReactDOM.render(
  <ApolloProvider client={client}>
    <Container />
  </ApolloProvider>,
  document.getElementById("root")
);
