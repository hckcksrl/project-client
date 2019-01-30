import React from "react";
import { Mutation } from "react-apollo";
import { CreateProject } from "./queries";
import { GetList } from "../../List/queris";
import PropTypes from "prop-types";
import "./CreateProject.scss";

class CreateProjects extends React.Component {
  constructor() {
    super();
    this.state = {
      add_project: "add-project-wrap"
    };
  }
  render() {
    return (
      <div className={this.state.add_project} id="add">
        <div className="click-add" id={`ClickAdd`} onClick={this._Click}>
          <span>Add Project</span>
        </div>
        <div className="add-project-div-wrap">
          <div className="ceate-project-wrap">
            <Mutation mutation={CreateProject}>
              {Create_Project => (
                <div className="create-wrap">
                  <input
                    id="create-project"
                    type="text"
                    onKeyDown={e => this._press(e, Create_Project)}
                    placeholder="Enter Create Project"
                    onBlur={e => this._focusout(e)}
                  />
                  <button
                    id="create-project-btn"
                    onMouseDown={e => this._Create(e, Create_Project)}
                    type="submit"
                  >
                    Create Project
                  </button>
                </div>
              )}
            </Mutation>
          </div>
        </div>
      </div>
    );
  }
  _Click = () => {
    this.setState({
      add_project: "add-project-wrap click"
    });
    window.setTimeout(() => {
      document.getElementById("create-project").focus();
    });
  };
  _Create = (e, Create_Project) => {
    console.log("a");
    e.preventDefault();
    const { userid } = this.props;
    const project = document.getElementById("create-project").value;
    Create_Project({
      refetchQueries: [
        {
          query: GetList,
          variables: { id: userid }
        }
      ],
      variables: {
        projectname: project
      }
    });
  };
  _press = (e, Create_Project) => {
    const code = e.which;
    const data = e.target.value.trim();
    if (code === 13) {
      e.preventDefault();
      if (data === "") {
        this.setState({
          add_project: "add-project-wrap"
        });
        e.target.value = "";
        return false;
      } else {
        this._Create(e, Create_Project);
        this.setState({
          add_project: "add-project-wrap"
        });
        e.target.value = "";
        return true;
      }
    }
    return true;
  };
  _focusout = e => {
    e.preventDefault();
    this.setState({
      add_project: "add-project-wrap"
    });
    e.target.value = "";
  };
}
CreateProjects.propTypes = {
  userid: PropTypes.number.isRequired
};

export default CreateProjects;
