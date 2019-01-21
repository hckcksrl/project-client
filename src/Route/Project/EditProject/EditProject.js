import React from "react";
import { Mutation } from "react-apollo";
import { EditProject } from "./queries";
import PropTypes from "prop-types";
import { GetList } from "../../List/queris";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

const ProjectEdit = styled(TextareaAutosize)`
  background: ${props => props.inputback};
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: 3px;
  top: 7px;
  max-height: 256px;
  padding-left: 6px;
  width: 85%;
  position: absolute;
  left: 8px;
  font-size: 20px;
  line-height: 20px;
  text-align: start;
  visibility: ${props => props.inputvisible};
  resize: none;
  white-space: pre-line;
  z-index: 1;
`;
const Form = styled.form`
  height: 100%;
  width: 100%;
`;

const Button = styled.button`
  visibility: hidden;
  float: right;
  z-index: 10;
  top: 7px;
`;

const ProjectName = styled.a`
  padding-left: 6px;
  font-size: 20px;
  width: 100%;
  height: 100%;
  line-height: 14px;
  white-space: pre-wrap;
  line-height: 20px;
  float: left;
  padding-top: 7px;
`;
const ProjectContainer = styled.div`
  cursor: pointer;
  height: 100%;
  width: 95%;
  visibility: ${props => props.visible};
`;

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      e_back: "transparent",
      e_visible: "hidden",
      p_visible: "visible"
    };
  }
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
              onClick={() => this._click(id, projectname)}
              visible={this.state.p_visible}
            >
              <ProjectName id={`name${id}`}>{projectname}</ProjectName>
              <ProjectEdit
                defaultValue={projectname}
                id={`edit${id}`}
                onKeyDown={e => this._press(e, id)}
                onKeyUpCapture={e => this._height(e, id)}
                onBlurCapture={e => this._focusout(e, id, projectname)}
                inputback={this.state.e_back}
                inputvisible={this.state.e_visible}
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
  _click = (key, projectname) => {
    this.setState({
      p_visible: "hidden",
      e_back: "white",
      e_visible: "visible"
    });
    window.setTimeout(() => {
      document.getElementById(`edit${key}`).focus();
    });
    return true;
  };
  _complete = (e, id, Edit_Project, userid) => {
    e.preventDefault();
    const project = document.getElementById(`edit${id}`).value;
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
    const edit = document.getElementById(`edit${key}`);
    const height = parseInt(edit.style.height) + 10 + "px";
    document.getElementById(`main${key}`).style.height = height;
    if (code === 13) {
      if (edit.value === "") {
        this.setState({
          p_visible: "visible",
          e_back: "transparent",
          e_visible: "hidden"
        });
        return true;
      } else {
        e.preventDefault();
        document.getElementById(`button${key}`).click();
        this.setState({
          p_visible: "visible",
          e_back: "transparent",
          e_visible: "hidden"
        });
        return true;
      }
    }
    return true;
  };

  _height = (e, key) => {
    e.preventDefault();
    const height = parseInt(e.target.style.height) + 10 + "px";
    document.getElementById(`main${key}`).style.height = height;
  };

  _focusout = (e, key, projectname) => {
    e.preventDefault();
    this.setState({
      p_visible: "visible",
      e_back: "transparent",
      e_visible: "hidden"
    });
    const height = parseInt(e.target.style.height) + 10 + "px";
    window.setTimeout(() => {
      document.getElementById(`main${key}`).style.height = height;
    });
  };
}

Edit.propTypes = {
  projectname: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired
};

export default Edit;
