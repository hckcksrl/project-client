import React from "react";
import { Mutation } from "react-apollo";
import { DelProject } from "./queries";
import PropTypes from "prop-types";
import { GetList } from "../../List/queris";
import "./DeleteProject.scss";

class DeleteProject extends React.Component {
  delete = (e, Delete_Project) => {
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

  render() {
    return (
      <div className="delete-project-div">
        <Mutation mutation={DelProject}>
          {Delete_Project => (
            <button
              className="delete-project"
              onClick={e => this.delete(e, Delete_Project)}
              type="submit"
            >
              삭제
            </button>
          )}
        </Mutation>
      </div>
    );
  }
}

DeleteProject.propTypes = {
  projectid: PropTypes.number.isRequired,
  userid: PropTypes.number.isRequired
};

export default DeleteProject;
