import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-boost";

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache
});
