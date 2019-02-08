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

  handleClick = () => {
    this.setState({
      add_sub: "add-sub hidden"
    });
  };

  blur = () => {
    this.setState({
      add_sub: "add-sub"
    });
    this.textarea.value = null;
  };

  submit = (e, Create_Sub) => {
    const { projectid, userid } = this.props;
    const code = e.which;
    const subproject = e.target.value.trim();
    if (code === 13) {
      e.preventDefault();
      if (subproject) {
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
      } else {
        this.blur();
        return true;
      }
    }
    return true;
  };

  componentDidUpdate() {
    this.textarea.focus();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      add_sub: "add-sub"
    });
  }

  render() {
    return (
      <div className={this.state.add_sub} onClick={this.handleClick}>
        <div className="add-sub-wrap">
          <div className="add-sub-name">
            <span>Add SubProject</span>
          </div>
        </div>
        <div className="add-sub-div">
          <div className="add-sub-txt-wrap">
            <Mutation mutation={CreateSub}>
              {Create_Sub => (
                <textarea
                  ref={node => (this.textarea = node)}
                  className="add-sub-area"
                  onKeyPress={e => this.submit(e, Create_Sub)}
                  onBlur={this.blur}
                  placeholder="Enter Submit"
                />
              )}
            </Mutation>
          </div>
        </div>
      </div>
    );
  }
}

CreateSubProject.propTypes = {
  projectid: PropTypes.number.isRequired,
  userid: PropTypes.number.isRequired
};

export default CreateSubProject;
