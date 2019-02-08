import React from "react";
import { DeleteSub } from "./queries";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import { GetList } from "../../List/queris";
import "./DeleteSubProject.scss";

class DeleteSubProject extends React.Component {
  constructor() {
    super();
    this.state = {
      del_btn_class: "delete-sub"
    };
  }
  render() {
    return (
      <div className="delete-sub-div">
        <Mutation mutation={DeleteSub}>
          {Delete_Sub => (
            <div className="delete-sub-wrap">
              <button
                className={this.state.del_btn_class}
                onClick={e => {
                  this._Delete(Delete_Sub);
                }}
                type="submit"
              >
                삭제
              </button>
            </div>
          )}
        </Mutation>
      </div>
    );
  }
  _Delete = Delete_Sub => {
    const { subprojectid, userid } = this.props;
    Delete_Sub({
      refetchQueries: [{ query: GetList, variables: { id: userid } }],
      variables: { id: subprojectid }
    });
  };
}

DeleteSubProject.propTypes = {
  subprojectid: PropTypes.number.isRequired,
  userid: PropTypes.number.isRequired
};

export default DeleteSubProject;
