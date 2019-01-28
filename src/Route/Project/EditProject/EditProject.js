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
    const { projectname, id, userid } = this.props;
    return (
      <Mutation mutation={EditProject}>
        {Edit_Project => (
          <div
            className="project-container"
            id={`project${id}`}
            onClick={e => this._click(e, id)}
          >
            <a className={this.state.name_class}>{projectname}</a>
            <TextareaAutosize
              className={this.state.edit_class}
              defaultValue={projectname}
              id={`edit${id}`}
              onKeyDown={e => this._press(e, id, Edit_Project, userid)}
              onBlurCapture={e => this._focusout(e)}
              onSubmit={e => this._complete(e, id, Edit_Project, userid)}
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
  _press = (e, id, Edit_Project, userid) => {
    const code = e.which;
    if (code === 13) {
      if (e.target.value === "") {
        return true;
      } else {
        e.preventDefault();
        this._complete(e, id, Edit_Project, userid);
        this.setState({
          name_class: "project-name",
          edit_class: "project-edit"
        });
        this._focusout(e);
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
