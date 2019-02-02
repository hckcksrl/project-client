import gql from "graphql-tag";

export const CreateDetail = gql`
  mutation Create_Detail($detailname: String!, $subprojectid: Int!) {
    CreateDetailProject(detailname: $detailname, subprojectid: $subprojectid) {
      result
      error
    }
  }
`;
