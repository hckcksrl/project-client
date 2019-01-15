import gql from "graphql-tag";

export const EditProject = gql`
  mutation Edit_Project($id: Int!, $projectname: String) {
    EditProject(id: $id, projectname: $projectname) {
      result
      error
      project {
        id
        projectname
      }
    }
  }
`;
