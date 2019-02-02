import gql from "graphql-tag";

export const EditDetail = gql`
  mutation Edit_Detail($id: Int!, $detailname: String) {
    EditDetailProject(id: $id, detailname: $detailname) {
      result
      error
    }
  }
`;
