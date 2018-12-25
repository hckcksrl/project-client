import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-boost";
// import { setContext } from "apollo-link-context";
// import { WebSocketLink } from "apollo-link-ws";

const cache = new InMemoryCache();

const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    return null;
  }
};
const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: getToken()
    }
  }));

  return forward(operation);
});

const http = new HttpLink({
  uri: "http://localhost:4000/graphql"
});

// const wsLink = new WebSocketLink({
//   options: {
//     connectionParams: {
//       "X-JWT": getToken()
//     },
//     reconnect: true
//   },
//   uri: "http://localhost:4000/graphql"
// });

const state = withClientState({
  cache,
  defaults: {
    auth: {
      __typename: "Auth",
      isLoggedIn: Boolean(localStorage.getItem("token"))
    }
  },
  resolvers: {
    Mutation: {
      UserLogin: (_, { token }, { cache }) => {
        localStorage.setItem("token", token);
        cache.writeData({
          data: {
            auth: {
              __typename: "Auth",
              isLoggedIn: true
            }
          }
        });
        console.log("login");
        return null;
      },
      UserLogout: (_, __, { cache }) => {
        localStorage.removeItem("token");
        cache.writeData({
          data: {
            auth: {
              __typename: "Auth",
              isLoggedIn: false
            }
          }
        });
        console.log(cache.data);
        return null;
      }
    }
  }
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([state, authMiddleware, http])
});

export default client;
