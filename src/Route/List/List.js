import React, { Component } from "react";
import { Query } from "react-apollo";
import { GetList } from "./queris";
import ProjectPage from "./ListView/Project/Project";
import "./list.scss";

export default class List extends Component {
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
            <div className="main-wrap">
              <ProjectPage project={project} history={history} id={uid} />
            </div>
          );
        }}
      </Query>
    );
  }
}
