import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App/index";
import { ApolloProvider } from "react-apollo";
import client from "./apollo";

document.body.style.background = "rgb(0, 121, 191)";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
