import gql from "graphql-tag";

export const GetList = gql`
  query Get_List($id: Int!) {
    GetUser(id: $id) {
      result
      error
      user {
        id
        email
        project {
          id
          projectname
          subproject {
            id
            subprojectname
            detaillist {
              id
              detailname
            }
          }
        }
      }
    }
  }
`;

export const GetSub = gql`
  query Get_Sub($id: Int!) {
    GetSubProject(id: $id) {
      result
      error
      subproject {
        id
        subprojectname
      }
    }
  }
`;

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
