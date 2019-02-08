import React, { Component } from "react";
import { EditSub } from "./queries";
import "./EditSubProject.scss";
import { Mutation } from "react-apollo";
import PropTypes from "prop-types";
import { GetList } from "../../List/queris";

class EditSubProject extends Component {
  constructor() {
    super();
    this.state = {
      d_view_sub: "d-view-sub-name",
      edit_subproject: "edit-subproject"
    };
  }

  handleClick = () => {
    this.setState({
      d_view_sub: "d-view-sub-name hidden",
      edit_subproject: "edit-subproject block"
    });
  };

  blur = () => {
    this.setState({
      d_view_sub: "d-view-sub-name",
      edit_subproject: "edit-subproject"
    });
  };

  submit = (e, Edit_Sub) => {
    const code = e.which;
    const { subproject, userid } = this.props;
    const subprojectname = this.input.value;
    if (code === 13) {
      e.preventDefault();
      if (subprojectname) {
        Edit_Sub({
          refetchQueries: [{ query: GetList, variables: { id: userid } }],
          variables: {
            id: subproject.id,
            subprojectname: this.input.value
          }
        });
        return true;
      } else {
        this.blur();
        return false;
      }
    }
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      d_view_sub: "d-view-sub-name",
      edit_subproject: "edit-subproject"
    });
  }

  componentDidUpdate() {
    const { subproject } = this.props;
    this.input.value = subproject.subprojectname;
    this.input.focus();
  }

  render() {
    const { subproject } = this.props;
    return (
      <Mutation mutation={EditSub}>
        {Edit_Sub => (
          <div className="edit-sub-wrap">
            <span className={this.state.d_view_sub} onClick={this.handleClick}>
              {subproject.subprojectname}
            </span>
            <input
              ref={node => (this.input = node)}
              defaultValue={subproject.subprojectname}
              className={this.state.edit_subproject}
              onBlur={this.blur}
              onKeyPress={e => this.submit(e, Edit_Sub)}
            />
          </div>
        )}
      </Mutation>
    );
  }
}

EditSubProject.propTypes = {
  subproject: PropTypes.object.isRequired,
  userid: PropTypes.number.isRequired
};

export default EditSubProject;
