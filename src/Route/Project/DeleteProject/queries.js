import gql from "graphql-tag";

export const DeleteProject = gql`
  mutation Delete_Project($id: Int!) {
    CreateProject(id: $id) {
      result
      error
    }
  }
`;
