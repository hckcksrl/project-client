import React from "react";
import PropTypes from "prop-types";
import SubProjectPage from "../SubProject";
import AddSubPage from "../AddSuPage";
import AddPage from "../AddPage";
import Edit from "../../../Project/EditProject";
import DeleteProject from "../../../Project/DeleteProject/DeleteProject";
import "./project.scss";

class ProjectPage extends React.Component {
  constructor() {
    super();
    this.state = {
      projectname: ""
    };
  }
  render() {
    const { project, history, id } = this.props;
    return (
      <main className="main">
        {project.map(data => {
          return (
            <div className="project" key={data.id}>
              <div className="project-header-wrap" id={`main${data.id}`}>
                <div className="project-header-wrap-div">
                  <div className="project-header">
                    <Edit
                      id={data.id}
                      projectname={data.projectname}
                      history={history}
                      userid={id}
                    />
                  </div>
                  <DeleteProject projectid={data.id} userid={id} />
                </div>
              </div>
              <SubProjectPage
                subproject={data.subproject}
                projectid={data.id}
                userid={id}
              />
              <AddSubPage projectid={data.id} />
            </div>
          );
        })}
        <AddPage userid={id} />
      </main>
    );
  }
}

ProjectPage.propTypes = {
  project: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired
};

export default ProjectPage;
