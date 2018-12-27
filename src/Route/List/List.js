import React from "react";
import { Query } from "react-apollo";
import { GetList } from "./queris";
// import styled from "styled-components";

// const Project = styled.div``;

// const Project_Header = styled.div``;

// const SubProject = styled.div``;

// const AddSub = styled.div``;

// const ProjectName = styled.textarea``;

// const SubProjectName = styled.span``;

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
      <Query query={GetList} variables={{ id: 1 }}>
        {({ data, loading, error }) => {
          if (loading) return <h2>loading</h2>;
          if (error) return <h2>error</h2>;
          const result = data.GetUser.user;
          const project = result.project;
          return (
            <div>
              <h1 key={result.id}>email : {result.email}</h1>
              <div>
                {project.map(data => {
                  return (
                    <div>
                      <h3 key={data.id}>projectname : {data.projectname}</h3>
                      <div>
                        {data.subproject.map(data => {
                          return (
                            <div>
                              <h4 key={data.id}>
                                subprojectname : {data.subprojectname}
                              </h4>
                              <div>
                                {data.dataillist.map(data => {
                                  return (
                                    <div>
                                      <h6 key={data.id}>
                                        detailname :{data.detailname}
                                      </h6>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
          {
            /* <h3 key={result.project.subproject.id}>
                subprojectname : {result.project.subprojectname}
              </h3>
              <br />
              <h4 key={result.project.subproject.detaillist.id}>
                detaillist : {result.project.subproject.detaillist.detalname}
              </h4>
              <br /> */
          }

          // <Project>
          //     <Project_Header>
          //         <ProjectName></ProjectName>
          //     </Project_Header>
          //     <SubProject>

          //     </SubProject>
          //     <AddSub></AddSub>
          // </Project>
        }}
      </Query>
    );
  }
}
