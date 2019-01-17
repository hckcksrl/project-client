import gql from "graphql-tag";

export const DelProject = gql`
  mutation Delete_Project($id: Int!) {
    DeleteProject(id: $id) {
      result
      error
    }
  }
`;
