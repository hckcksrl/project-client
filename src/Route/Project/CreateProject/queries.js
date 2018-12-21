import gql from "graphql-tag";

export const CreateProject = gql`
  mutation Create_Project($projectname: String!, $userid: Int!) {
    CreateProject(projectname: $projectname, userid: $userid) {
      result
      error
    }
  }
`;
