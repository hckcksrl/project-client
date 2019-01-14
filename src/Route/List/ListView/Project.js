import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SubProjectPage from "./SubProject";
import AddSubPage from "./AddSuPage";
import AddPage from "./AddPage";
import TextareaAutosize from "react-textarea-autosize";
import Edit from "../../Project/EditProject";

const Project = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: auto;
`;

const ProjectMain = styled.div`
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
const ProjectName = styled.span`
  font-size: 20px;
  z-index: ;
`;

const ProjectHeader = styled.div`
  flex: 0 0 auto;
  padding: 10px;
  position: relative;
  min-height: 20px;
`;

class ProjectPage extends React.Component {
  constructor() {
    super();
    this.state = {
      projectname: ""
    };
  }
  render() {
    const { project, history } = this.props;
    return (
      <Project>
        {project.map(data => {
          return (
            <ProjectMain key={data.id}>
              <ProjectHeader>
                {/* <ProjectName
                  id={`name${data.id}`}
                  onClick={() => this.style(data.id)}
                >
                  {data.projectname}
                </ProjectName> */}
                <Edit
                  id={data.id}
                  projectname={data.projectname}
                  history={history}
                />
              </ProjectHeader>
              <SubProjectPage subproject={data.subproject} />
              <AddSubPage />
            </ProjectMain>
          );
        })}
        <AddPage />
      </Project>
    );
  }
  style = key => {
    const edit = document.getElementById(`edit${key}`);
    edit.style.background = "white";
    return true;
  };
  edit = (e, key, history) => {
    const projectname = document.getElementById(`edit${key}`).value;
    const code = e.which;
    if (code === 13) {
      Edit(projectname, key, history);
    }
    return true;
  };
}

ProjectPage.propTypes = {
  project: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired
};

export default ProjectPage;
