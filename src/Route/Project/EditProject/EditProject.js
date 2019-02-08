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

  handleClick = () => {
    this.setState({
      name_class: "project-name hidden",
      edit_class: "project-edit edit"
    });
    return true;
  };

  blur = () => {
    this.setState({
      name_class: "project-name",
      edit_class: "project-edit"
    });
  };

  submit = (e, Edit_Project) => {
    const code = e.which;
    const { id, userid } = this.props;
    const project = e.target.value.trim();
    if (code === 13) {
      e.preventDefault();
      if (project) {
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
        return true;
      } else {
        this.blur();
        return false;
      }
    }
    return true;
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      name_class: "project-name",
      edit_class: "project-edit"
    });
  }

  componentDidUpdate() {
    const { projectname } = this.props;
    this.textarea.value = projectname;
    this.textarea.focus();
  }

  render() {
    const { projectname } = this.props;
    return (
      <div className="project-header">
        <Mutation mutation={EditProject}>
          {Edit_Project => (
            <div className="project-container" onClick={this.handleClick}>
              <span className={this.state.name_class}>{projectname}</span>
              <TextareaAutosize
                inputRef={tag => (this.textarea = tag)}
                className={this.state.edit_class}
                defaultValue={projectname}
                onKeyPress={e => this.submit(e, Edit_Project)}
                onBlur={this.blur}
              />
            </div>
          )}
        </Mutation>
      </div>
    );
  }
}

Edit.propTypes = {
  projectname: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired
};

export default Edit;
