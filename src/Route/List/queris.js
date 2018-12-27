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
