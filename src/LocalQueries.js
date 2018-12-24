import gql from "graphql-tag";

export const Login = gql`
  mutation Login($token: String!) {
    UserLogin(token: $token) @client
  }
`;

export const Logout = gql`
  mutation Logout {
    UserLogout @client
  }
`;

export const GetUser = gql`
  {
    GetMy {
      result
      error
      user {
        id
      }
    }
  }
`;
