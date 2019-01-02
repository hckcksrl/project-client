import React from "react";
import { Query } from "react-apollo";
import { GetList } from "./queris";
import styled from "styled-components";
import Logout from "../User/Logout";

const Main = styled.div`
  width: 100%;
  height: 100%;
`;
const UserWrap = styled.div`
  height: auto;
  width: auto;
`;
const User = styled.div`
  justify-content: left;
  align-items: center;
  position: relative;
  padding: 1.5em;
  width: auto;
  margin: 1em;
`;

const UserEmail = styled.span`
  color: white;
  font-size: 18px;
  line-height: 30px;
  font-weight: 600;
`;
const Project = styled.div`
  display: flex;
  position: absolute;
`;
const ProjectMain = styled.div`
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
const ProjectName = styled.span`
  font-size: 20px;
`;

const ProjectHeader = styled.div`
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
  min-height: 0;
`;

const SubProjectMain = styled.a`
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
`;

const SubProjectName = styled.span`
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

const SubProjectDiv = styled.div`
  padding: 6px 8px 2px;
  position: relative;
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
              <UserWrap>
                <User>
                  <UserEmail key={result.id}>{result.email}</UserEmail>
                  <Logout />
                </User>
              </UserWrap>
              <Project>
                {project.map(data => {
                  return (
                    <ProjectMain key={data.id}>
                      <ProjectHeader>
                        <ProjectName>{data.projectname}</ProjectName>
                      </ProjectHeader>
                      <SubProject>
                        {data.subproject.map(data => {
                          return (
                            <SubProjectMain key={data.id}>
                              <SubProjectDiv>
                                <SubProjectName>
                                  {data.subprojectname}
                                </SubProjectName>
                              </SubProjectDiv>
                            </SubProjectMain>
                          );
                        })}
                      </SubProject>
                      <AddSub>
                        <AddSubInner>
                          <span>Add SubProject</span>
                        </AddSubInner>
                      </AddSub>
                    </ProjectMain>
                  );
                })}
                <AddProject>
                  <Add>Add Project</Add>
                </AddProject>
              </Project>
            </Main>
          );
        }}
      </Query>
    );
  }
}
