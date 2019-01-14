import React from "react";
import { Query } from "react-apollo";
import { GetList } from "./queris";
import styled from "styled-components";
import HeaderPage from "./ListView/Header";
import ProjectPage from "./ListView/Project";

const Main = styled.div`
  width: 100%;
  height: 100%;
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
    const { history } = this.props;
    return (
      <Query query={GetList} variables={{ id: uid }}>
        {({ data, loading, error }) => {
          if (loading) return <h2>loading</h2>;
          if (error) return <h2>error</h2>;
          const result = data.GetUser.user;
          const project = result.project;
          return (
            <Main>
              <HeaderPage email={result.email} />
              <ProjectPage project={project} history={history} id={uid} />
            </Main>
          );
        }}
      </Query>
    );
  }
}
