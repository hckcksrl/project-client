import React, { Component } from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import { DeleteDetail } from "./queries";
import "./DeleteDetailProject.scss";
import { GetDetail } from "../../List/ListView/Detail/queries";

class DeleteDetailProject extends Component {
  render() {
    return (
      <div className="del-detail-wrap">
        <Mutation mutation={DeleteDetail}>
          {Delete_Detail => (
            <button onClick={() => this._submit(Delete_Detail)} type="submit">
              x
            </button>
          )}
        </Mutation>
      </div>
    );
  }
  _submit = Delete_Detail => {
    const { subprojectid, id } = this.props;
    Delete_Detail({
      refetchQueries: [
        {
          query: GetDetail,
          variables: { subprojectid: subprojectid }
        }
      ],
      variables: {
        id: id
      }
    });
  };
}

DeleteDetailProject.propTypes = {
  id: PropTypes.number.isRequired,
  subprojectid: PropTypes.number.isRequired
};

export default DeleteDetailProject;
