import React, { Component } from "react";
import PropTypes from "prop-types";
import SubProjectPage from "../SubProject/SubProject";
import Edit from "../../../Project/EditProject";
import DeleteProject from "../../../Project/DeleteProject/DeleteProject";
import "./project.scss";
import CreateSubProject from "../../../SubProject/CreateSubProject";
import CreateProjects from "../../../Project/CreateProject";

class ProjectPage extends Component {
  render() {
    const { project, history, id } = this.props;
    return (
      <main className="main">
        {project.map(data => {
          return (
            <div className="project" key={data.id}>
              <div className="project-header-wrap">
                <div className="project-header-wrap-div">
                  <Edit
                    id={data.id}
                    projectname={data.projectname}
                    history={history}
                    userid={id}
                  />
                  <DeleteProject projectid={data.id} userid={id} />
                </div>
              </div>
              <SubProjectPage
                subproject={data.subproject}
                projectid={data.id}
                userid={id}
              />
              <CreateSubProject projectid={data.id} userid={id} />
            </div>
          );
        })}
        <CreateProjects userid={id} />
      </main>
    );
  }
}

ProjectPage.propTypes = {
  project: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired
};

export default ProjectPage;
