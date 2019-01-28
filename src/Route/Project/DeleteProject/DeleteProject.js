import React from "react";
import { Mutation } from "react-apollo";
import { DelProject } from "./queries";
import PropTypes from "prop-types";
import { GetList } from "../../List/queris";
import "./DeleteProject.scss";

class DeleteProject extends React.Component {
  render() {
    const { projectid } = this.props;
    return (
      <div className="delete-div">
        <Mutation mutation={DelProject}>
          {Delete_Project => (
            <button
              className="delete"
              onClick={e => this._delete(e, Delete_Project)}
              id={`p-del${projectid}`}
              type="submit"
            >
              삭제
            </button>
          )}
        </Mutation>
      </div>
    );
  }
  _delete = (e, Delete_Project) => {
    const { projectid, userid } = this.props;
    e.preventDefault();
    Delete_Project({
      refetchQueries: [
        {
          query: GetList,
          variables: { id: userid }
        }
      ],
      variables: {
        id: projectid
      }
    });
  };
}

DeleteProject.propTypes = {
  projectid: PropTypes.number.isRequired,
  userid: PropTypes.number.isRequired
};

export default DeleteProject;
