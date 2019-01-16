import gql from "graphql-tag";

export const DeleteSub = gql`
  mutation Delete_Sub($id: Int!) {
    DeleteSubProject(id: $id) {
      result
      error
    }
  }
`;
