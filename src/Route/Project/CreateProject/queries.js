import gql from "graphql-tag";

export const CreateProject = gql`
  mutation Create_Project($projectname: String!) {
    CreateProject(projectname: $projectname) {
      result
      error
    }
  }
`;
