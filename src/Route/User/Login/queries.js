import gql from "graphql-tag";

export const EmailLogin = gql`
  mutation Email_Login($email: String!, $password: String!) {
    Login(email: $email, password: $password) {
      result
      error
      token
      id
    }
  }
`;
