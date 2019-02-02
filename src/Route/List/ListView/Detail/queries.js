import gql from "graphql-tag";

export const GetDetail = gql`
  query Get_Detail($subprojectid: Int!) {
    GetDetailList(subprojectid: $subprojectid) {
      result
      error
      detail {
        id
        detailname
      }
    }
  }
`;
