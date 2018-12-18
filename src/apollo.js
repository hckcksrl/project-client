import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-boost";

const cache = new InMemoryCache();

const getToken = () => {
  const token = localStorage.getItem("jwt");
  if (token) {
    return token;
  } else {
    return null;
  }
};

const auth = new ApolloLink((operation, next) => {
  operation.setContext({
    header: {
      "X-JWT": getToken()
    }
  });
  return next(operation);
});

const http = new HttpLink({
  uri: "http://localhost:4000/"
});

const state = withClientState({
  cache
  //   defaults,
  //   resolvers
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([state, auth, http])
});

export default client;
