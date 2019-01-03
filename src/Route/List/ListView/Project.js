import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SubProjectPage from "./SubProject";
import AddSubPage from "./AddSuPage";
import AddPage from "./AddPage";
import TextareaAutosize from "react-textarea-autosize";
import { Mutation } from "react-apollo";

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
const ProjectEdit = styled(TextareaAutosize)`
  background: transparent;
  border: 1px solid transparent;
  border-radius: 3px;
  margin: -4px 0;
  max-height: 256px;
  padding-left: 6px;
  padding-top : 7px
  width: 90%;
  z-index: 1;
  position: absolute;
  left: 5px;
  font-size: 20px;
  line-height: 14px;
  text-align: start;
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
    const { project } = this.props;
    return (
      <Project>
        {project.map(data => {
          return (
            <ProjectMain key={data.id}>
              <ProjectHeader>
                {/* <ProjectName id={`name${data.id}`}>
                  {data.projectname}
                </ProjectName> */}
                <ProjectEdit
                  id={`edit${data.id}`}
                  onClick={() => this.style(data.id)}
                  onKeyPress={() => this.edit}
                  defaultValue={data.projectname}
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
    return (edit.style.zIndex = "0");
  };
  edit = e => {};
}

ProjectPage.propTypes = {
  project: PropTypes.array.isRequired
};

export default ProjectPage;
