import React from "react";
import { Mutation } from "react-apollo";
import { DelProject } from "./queries";
import styled from "styled-components";
import PropTypes from "prop-types";
import { GetList } from "../../List/queris";

const Div = styled.div`
  position: absolute;
  right: 5px;
  top: 10px;
`;
const Delete = styled.button`
  font-size: 15px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Form = styled.form``;

class DeleteProject extends React.Component {
  render() {
    const { projectid } = this.props;
    return (
      <Div>
        <Mutation mutation={DelProject}>
          {Delete_Project => (
            <Form onSubmit={e => this._delete(e, Delete_Project)}>
              <Delete id={`p-del${projectid}`} type="submit">
                삭제
              </Delete>
            </Form>
          )}
        </Mutation>
      </Div>
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
