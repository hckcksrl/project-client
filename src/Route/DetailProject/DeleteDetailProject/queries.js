import gql from "graphql-tag";

export const DeleteDetail = gql`
  mutation Delete_Detail($id: Int!) {
    DeleteDetailProject(id: $id) {
      result
      error
    }
  }
`;
