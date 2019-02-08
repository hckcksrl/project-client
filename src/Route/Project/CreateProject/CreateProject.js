import React from "react";
import { Mutation } from "react-apollo";
import { CreateProject } from "./queries";
import { GetList } from "../../List/queris";
import PropTypes from "prop-types";
import "./CreateProject.scss";
import { IoIosAddCircleOutline } from "react-icons/io";

class CreateProjects extends React.Component {
  constructor() {
    super();
    this.state = {
      add_project: "add-project-wrap"
    };
  }

  handleClick = () => {
    this.setState({
      add_project: "add-project-wrap block"
    });
    this.input.value = null;
  };

  blur = e => {
    this.setState({
      add_project: "add-project-wrap"
    });
    this.input.value = null;
  };

  submit = (e, Create_Project) => {
    const code = e.which;
    const { userid } = this.props;
    const project = this.input.value;
    if (code === 13) {
      e.preventDefault();
      if (project) {
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
        return true;
      } else {
        this.blur();
        return false;
      }
    }
    return true;
  };

  handleSubmit = (e, Create_Project) => {
    const { userid } = this.props;
    const project = this.input.value;
    e.preventDefault();
    if (project) {
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
      return true;
    } else {
      this.blur();
      return false;
    }
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      add_project: "add-project-wrap"
    });
  }

  componentDidUpdate() {
    this.input.focus();
  }

  render() {
    return (
      <div className="create-project-pop">
        <div className={this.state.add_project}>
          <div className="add-project-div-wrap">
            <div className="ceate-project-wrap">
              <Mutation mutation={CreateProject}>
                {Create_Project => (
                  <div className="create-wrap">
                    <input
                      ref={node => (this.input = node)}
                      className="create-project"
                      type="text"
                      onKeyDown={e => this.submit(e, Create_Project)}
                      placeholder="Enter Create Project"
                      onBlur={e => this.blur(e)}
                    />
                    <button
                      ref={node => (this.button = node)}
                      className="create-project-btn"
                      onMouseDown={e => this.handleSubmit(e, Create_Project)}
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
        <div className="icon-div">
          <IoIosAddCircleOutline className="icon" onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}
CreateProjects.propTypes = {
  userid: PropTypes.number.isRequired
};

export default CreateProjects;
