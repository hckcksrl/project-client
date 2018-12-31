import gql from "graphql-tag";

export const MyId = gql`
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
