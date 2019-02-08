import gql from "graphql-tag";

export const EditSub = gql`
  mutation Edit_Sub($id: Int!, $subprojectname: String) {
    EditSubProject(id: $id, subprojectname: $subprojectname) {
      result
      error
    }
  }
`;
