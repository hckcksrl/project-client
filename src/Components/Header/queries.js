import gql from "graphql-tag";

export const GetMy = gql`
  {
    GetMy {
      result
      error
      user {
        id
        email
      }
    }
  }
`;
