import gql from "graphql-tag";

export const Logined = gql`
  mutation Login($token: String!) {
    UserLogin(token: $token) @client
  }
`;

export const Logout = gql`
  mutation Logout {
    UserLogout @client
  }
`;
