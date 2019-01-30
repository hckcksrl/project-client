import React from "react";
import { Mutation } from "react-apollo";
import { EditProject } from "./queries";
import PropTypes from "prop-types";
import { GetList } from "../../List/queris";
import TextareaAutosize from "react-textarea-autosize";
import "./EditProject.scss";

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      name_class: "project-name",
      edit_class: "project-edit"
    };
  }
  render() {
    const { projectname, id } = this.props;
    return (
      <Mutation mutation={EditProject}>
        {Edit_Project => (
          <div
            className="project-container"
            id={`project${id}`}
            onClick={e => this._click(e, id)}
          >
            <span className={this.state.name_class} id={`name${id}`}>
              {projectname}
            </span>
            <TextareaAutosize
              className={this.state.edit_class}
              defaultValue={projectname}
              id={`edit${id}`}
              onKeyDown={e => this._press(e, Edit_Project)}
              onBlur={e => this._focusout(e)}
            />
          </div>
        )}
      </Mutation>
    );
  }
  _click = (e, id) => {
    this.setState({
      name_class: "project-name hidden",
      edit_class: "project-edit edit"
    });
    window.setTimeout(() => {
      document.getElementById(`edit${id}`).focus();
    });
    return true;
  };
  _complete = (e, Edit_Project, project) => {
    e.preventDefault();
    const { id, userid } = this.props;
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
  _press = (e, Edit_Project) => {
    const code = e.which;
    const { projectname } = this.props;
    const data = e.target.value.trim();
    if (code === 13) {
      if (data === "") {
        this.setState({
          name_class: "project-name",
          edit_class: "project-edit"
        });
        e.target.value = projectname;
        return true;
      } else {
        e.preventDefault();
        this._complete(e, Edit_Project, data);
        this.setState({
          name_class: "project-name",
          edit_class: "project-edit"
        });
        return true;
      }
    }
    return true;
  };
  _focusout = e => {
    e.preventDefault();
    this.setState({
      name_class: "project-name",
      edit_class: "project-edit"
    });
  };
}

Edit.propTypes = {
  projectname: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired
};

export default Edit;
