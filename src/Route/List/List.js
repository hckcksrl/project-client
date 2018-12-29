import React from "react";
import { Query } from "react-apollo";
import { GetList } from "./queris";
import styled from "styled-components";

const Project = styled.div`
  display: flex;
  position: absolute;
`;
const Scroll = styled.div`
  position: relative;
`;

const Project_Main = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  white-space: normal;
  margin-left: 8px;
  width: 272px;
`;
const Project_Name = styled.span`
  font-size: 20px;
`;

const Project_Header = styled.div`
  flex: 0 0 auto;
  padding: 10px;
  position: relative;
  min-height: 20px;
`;
const SubProject = styled.div`
  flex: 1 1 auto;
  margin-bottom: 0;
  margin: 0 4px;
  padding: 0 4px;
  z-index: 1;
  min-height: 0;
`;

const SubProject_Main = styled.a`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
  max-width: 300px;
  min-height: 20px;
  position: relative;
  text-decoration: none;
  z-index: 0;
`;

const SubProject_Name = styled.span`
  clear: both;
  display: block;
  margin: 0 0 4px;
  text-decoration: none;
  word-wrap: break-word;
  color: #17394d;
`;

const AddSub = styled.div`
  border-radius: 0 0 3px 3px;
  color: #6b808c;
  display: block;
  flex: 0 0 auto;
  padding: 8px;
  position: relative;
  text-decoration: none;
`;

const AddSubInner = styled.div`
  margin-left: 5px;
`;
const Main = styled.div``;

const User = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
  padding: 1.5em;

  width: 100%;
`;

const UserEmail = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  position: fixed;
`;

const SubProject_Div = styled.div`
  padding: 6px 8px 2px;
  position: relative;
  z-index: 10;
`;

const AddProject = styled.div`
  background-color: rgba(0, 0, 0, 0.12);
  cursor: pointer;
  color: #fff;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  white-space: normal;
  margin-left: 8px;
  width: 272px;
`;
const Add = styled.span`
  padding: 6px 8px;
`;

export default class List extends React.Component {
  constructor(props) {
    super(props);
    if (!props.match.params.userid) {
      props.history.push("/");
    }
  }
  render() {
    const {
      match: {
        params: { userid }
      }
    } = this.props;
    const uid = parseInt(userid);
    return (
      <Query query={GetList} variables={{ id: uid }}>
        {({ data, loading, error }) => {
          if (loading) return <h2>loading</h2>;
          if (error) return <h2>error</h2>;
          const result = data.GetUser.user;
          const project = result.project;
          return (
            <Main>
              <User>
                <UserEmail key={result.id}>{result.email}</UserEmail>
              </User>
              {/* <Scroll> */}
              <Project>
                {project.map(data => {
                  return (
                    <Project_Main key={data.id}>
                      <Project_Header>
                        <Project_Name>{data.projectname}</Project_Name>
                      </Project_Header>
                      <SubProject>
                        {data.subproject.map(data => {
                          return (
                            <SubProject_Main key={data.id}>
                              <SubProject_Div>
                                <SubProject_Name>
                                  {data.subprojectname}
                                </SubProject_Name>
                              </SubProject_Div>
                            </SubProject_Main>
                          );
                        })}
                      </SubProject>
                      <AddSub>
                        <AddSubInner>
                          <span>Add SubProject</span>
                        </AddSubInner>
                      </AddSub>
                    </Project_Main>
                  );
                })}
                <AddProject>
                  <Add>Add Project</Add>
                </AddProject>
              </Project>
              {/* </Scroll> */}
            </Main>
          );
        }}
      </Query>
    );
  }
}

//   <div>
//   {data.detaillist.map(data => {
//     return (
//       <div key={data.id}>
//         <h6 key={data.id}>detailname :{data.detailname}</h6>
//       </div>
//     );
//   })}
// </div>;
