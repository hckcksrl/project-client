import React from "react";
import { Mutation } from "react-apollo";
import { EditProject } from "./queries";
import PropTypes from "prop-types";
import { GetList } from "../../List/queris";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

const ProjectEdit = styled(TextareaAutosize)`
  background: transparent;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: 3px;
  top: 7px;
  max-height: 256px;
  padding-left: 6px;
  width: 95.5%;
  position: absolute;
  left: 8px;
  font-size: 20px;
  line-height: 20px;
  text-align: start;
  visibility: hidden;
  resize: none;
  white-space: pre-line;
  z-index: 1;
`;
const Form = styled.form``;
const Button = styled.button`
  visibility: hidden;
  float: right;
`;

const ProjectName = styled.a`
  padding-left: 6px;
  font-size: 20px;
  width: 100%;
  line-height: 14px;
  white-space: pre-wrap;
  z-index: 2;
  line-height: 20px;
  float: left;
`;
const ProjectContainer = styled.div`
  cursor: pointer;
`;

class Edit extends React.Component {
  render() {
    const { projectname, id, userid } = this.props;
    return (
      <Mutation mutation={EditProject}>
        {Edit_Project => (
          <Form
            id={`form${id}`}
            onSubmit={e => this._complete(e, id, Edit_Project, userid)}
          >
            <ProjectContainer
              id={`project${id}`}
              onClick={e => this._style(e, id)}
            >
              <ProjectName id={`name${id}`}>{projectname}</ProjectName>
              <ProjectEdit
                id={`edit${id}`}
                onKeyDown={e => this._press(e, id)}
                onKeyUp={e => this._height(e, id)}
                defaultValue={projectname}
                onBlur={e => this._focusout(e, id, projectname)}
              />
              <Button id={`button${id}`} type="submit">
                확인
              </Button>
            </ProjectContainer>
          </Form>
        )}
      </Mutation>
    );
  }
  _style = (e, key) => {
    e.preventDefault();
    const edit = document.getElementById(`edit${key}`);
    e.target.style.visibility = "hidden";
    edit.style.background = "white";
    edit.style.visibility = "visible";
    edit.focus();
    return true;
  };

  _complete = (e, id, Edit_Project, userid) => {
    e.preventDefault();
    const project = e.target.value;
    Edit_Project({
      refetchQueries: [
        {
          query: GetList,
          variables: { id: userid }
        }
      ],
      variables: {
        projectname: project,
        id: id
      }
    });
  };

  _press = (e, key) => {
    const code = e.which;
    document.getElementById(`main${key}`).style.height = e.target.style.height;
    if (code === 13) {
      e.preventDefault();
      document.getElementById(`button${key}`).click();
      e.target.style.visibility = "hidden";
      e.target.style.background = "transparent";
      document.getElementById(`project${key}`).style.visibility = "visible";
      return true;
    }
    return true;
  };
  _height = (e, key) => {
    e.preventDefault();
    document.getElementById(`main${key}`).style.height = e.target.style.height;
  };

  _focusout = (e, key, projectname) => {
    e.preventDefault();
    e.target.style.visibility = "hidden";
    e.target.value = projectname;
    document.getElementById(`name${key}`).style.visibility = "visible";
    document.getElementById(`project${key}`).style.visibility = "visible";
  };
}

Edit.propTypes = {
  projectname: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired
};

export default Edit;
