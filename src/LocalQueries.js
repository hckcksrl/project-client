import { gql } from "apollo-boost";

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
  query Get_User {
    GetUser {
      result
      error
      user
    }
  }
`;
