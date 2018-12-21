import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-boost";
// import { WebSocketLink } from "apollo-link-ws";

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
      __typename: "AuthToken",
      isLoggedIn: Boolean(localStorage.getItem("jwt"))
    }
  },
  resolvers: {
    Mutation: {
      UserLogin: (_, { token }, { cache }) => {
        localStorage.setItem("token", token);
        cache.writeData({
          data: {
            isAuth: {
              __typename: "AuthToken",
              Logined: true
            }
          }
        });
        console.log(cache);
        return null;
      },
      UserLogout: (_, __, { cache }) => {
        localStorage.removeItem("token");
        cache.writeData({
          data: {
            isAuth: {
              __typename: "AuthToken",
              Logined: false
            }
          }
        });
        console.log("logout");
        return null;
      }
    }
  }
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([state, auth, http])
});

export default client;
