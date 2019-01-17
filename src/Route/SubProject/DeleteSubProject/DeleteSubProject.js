import React from "react";
import { DeleteSub } from "./queries";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import { GetList } from "../../List/queris";

const Delete = styled.button`
  background-color: transparent;
  background-clip: padding-box;
  background-origin: padding-box;
  border-radius: 3px;
  border: none;
  padding: 4px;
  position: absolute;
  right: 2px;
  top: 4px;
  z-index: 40;
  text-align: center;
  cursor: pointer;
  visibility: hidden;
`;
const DeleteDiv = styled.div``;
const Form = styled.form``;
class DeleteSubProject extends React.Component {
  render() {
    const { subprojectid, userid } = this.props;
    return (
      <DeleteDiv>
        <Mutation mutation={DeleteSub}>
          {Delete_Sub => (
            <Form
              onSubmit={e => {
                e.preventDefault();
                Delete_Sub({
                  refetchQueries: [
                    { query: GetList, variables: { id: userid } }
                  ],
                  variables: { id: subprojectid }
                });
              }}
            >
              <Delete id={`sub_del${subprojectid}`} type="submit">
                삭제
              </Delete>
            </Form>
          )}
        </Mutation>
      </DeleteDiv>
    );
  }
}

DeleteSubProject.propTypes = {
  subprojectid: PropTypes.number.isRequired,
  userid: PropTypes.number.isRequired
};

export default DeleteSubProject;
