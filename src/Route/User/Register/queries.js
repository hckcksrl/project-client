import gql from "graphql-tag";

export const EmailRegist = gql`
  mutation Email_Regist($email: String!, $password: String!) {
    Regist(email: $email, password: $password) {
      result
      error
      token
    }
  }
`;
