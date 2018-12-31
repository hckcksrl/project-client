import gql from "graphql-tag";

export const Is_Login = gql`
  {
    auth {
      isLoggedIn @client
    }
  }
`;
