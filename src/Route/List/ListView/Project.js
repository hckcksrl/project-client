import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SubProjectPage from "./SubProject";
import AddSubPage from "./AddSuPage";
import AddPage from "./AddPage";
import Edit from "../../Project/EditProject";

const Project = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: auto;
`;

const ProjectMain = styled.div`
  flex: auto;
  background-color: #dfe3e6;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  width: 300px;
  margin: 1%;
  flex-shrink: 1;
`;

const ProjectHeader = styled.div`
  flex: 0 0 auto;
  padding: 10px;
  position: relative;
  height: 26px;
`;

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
      <Project>
        {project.map(data => {
          return (
            <ProjectMain key={data.id}>
              <ProjectHeader id={`main${data.id}`}>
                <Edit
                  id={data.id}
                  projectname={data.projectname}
                  history={history}
                  userid={id}
                />
              </ProjectHeader>
              <SubProjectPage
                subproject={data.subproject}
                projectid={data.id}
                userid={id}
              />
              <AddSubPage projectid={data.id} />
            </ProjectMain>
          );
        })}
        <AddPage />
      </Project>
    );
  }
}

ProjectPage.propTypes = {
  project: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired
};

export default ProjectPage;
