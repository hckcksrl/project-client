import gql from "graphql-tag";

export const CreateSub = gql`
  mutation Create_Sub($subprojectname: String!, $projectid: Int!) {
    CreateSubProject(subprojectname: $subprojectname, projectid: $projectid) {
      result
      error
    }
  }
`;
