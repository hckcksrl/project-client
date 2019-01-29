import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import { CreateSub } from "./queries";
import { GetList } from "../../List/queris";
import "./CreateSubProject.scss";

class CreateSubProject extends React.Component {
  constructor() {
    super();
    this.state = {
      add_sub: "add-sub"
    };
  }
  render() {
    const { projectid } = this.props;
    return (
      <div
        className={this.state.add_sub}
        onClick={() => this._click(projectid)}
      >
        <div className="add-sub-wrap" id={`addwrap${projectid}`}>
          <div className="add-sub-name">
            <span>Add SubProject</span>
          </div>
        </div>
        <div className="add-sub-div" id={`area${projectid}`}>
          <div className="add-sub-txt-wrap">
            <Mutation mutation={CreateSub}>
              {Create_Sub => (
                <textarea
                  className="add-sub-area"
                  id={`txtarea${projectid}`}
                  onKeyDown={e => this._press(e, Create_Sub)}
                  onBlur={e => this._focusout(e, projectid)}
                  placeholder="Enter Submit"
                />
              )}
            </Mutation>
          </div>
        </div>
      </div>
    );
  }
  _click = id => {
    this.setState({
      add_sub: "add-sub hidden"
    });
    window.setTimeout(() => {
      document.getElementById(`txtarea${id}`).focus();
    });
  };
  _complete = (e, Create_Sub, subproject) => {
    e.preventDefault();
    const { projectid, userid } = this.props;
    Create_Sub({
      refetchQueries: [
        {
          query: GetList,
          variables: { id: userid }
        }
      ],
      variables: {
        subprojectname: subproject,
        projectid: projectid
      }
    });
    return true;
  };
  _press = (e, Create_Sub) => {
    const code = e.which;
    const data = e.target.value.trim();
    if (code === 13) {
      if (data === "") {
        this.setState({
          add_sub: "add-sub"
        });
        e.target.value = "";
        return true;
      } else {
        this._complete(e, Create_Sub, data);
        this.setState({
          add_sub: "add-sub"
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
      add_sub: "add-sub"
    });
    e.target.value = "";
  };
}

CreateSubProject.propTypes = {
  projectid: PropTypes.number.isRequired,
  userid: PropTypes.number.isRequired
};

export default CreateSubProject;
