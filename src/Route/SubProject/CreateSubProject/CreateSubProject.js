import React from "react";
import { Mutation } from "react-apollo";
import { CreateSub } from "./queries";
import styled from "styled-components";
import PropTypes from "prop-types";
import { GetList } from "../../List/queris";

const AddArea = styled.textarea`
  background: white;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: 3px;
  width: 95.5%;
  position: absolute;
  left: 8px;
  font-size: 15px;
  text-align: start;
  visibility: visible;
  white-space: pre-line;
  resize: none;
  z-index: 1;
  height: 50px;
`;

const AddDiv = styled.div`
  display: none;
  padding-bottom: 6px;
`;

const Div = styled.div`
  height: 56px;
`;

const Form = styled.form``;

const Button = styled.button`
  visibility: hidden;
  float: right;
`;
class CreateSubProject extends React.Component {
  render() {
    const { projectid, userid } = this.props;
    return (
      <AddDiv id={`area${projectid}`}>
        <Div>
          <Mutation mutation={CreateSub}>
            {Create_Sub => (
              <Form
                onSubmit={e => {
                  this._complete(e, projectid, Create_Sub, userid);
                }}
              >
                <AddArea
                  id={`txtarea${projectid}`}
                  onKeyDown={e => this._press(e, projectid)}
                  placeholder="Enter Submit"
                  onBlur={e => this._focusout(e, projectid)}
                />
                <Button id={`create_sub_btn${projectid}`} type="submit">
                  확인
                </Button>
              </Form>
            )}
          </Mutation>
        </Div>
      </AddDiv>
    );
  }
  _complete = (e, projectid, Create_Sub, userid) => {
    e.preventDefault();
    const subproject = document.getElementById(`txtarea${projectid}`).value;
    if (subproject !== "") {
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
      document.getElementById(`txtarea${projectid}`).value = "";
    } else {
      console.log("error");
    }
  };
  _press = (e, key) => {
    const code = e.which;
    if (code === 13) {
      e.preventDefault();
      document.getElementById(`create_sub_btn${key}`).click();
      document.getElementById(`area${key}`).style.display = "none";
      document.getElementById(`addwrap${key}`).style.display = "block";
      return true;
    }
    return true;
  };

  _focusout = (e, id) => {
    e.preventDefault();
    document.getElementById(`area${id}`).style.display = "none";
    document.getElementById(`addwrap${id}`).style.display = "block";
    document.getElementById(`txtarea${id}`).value = "";
  };
}

CreateSubProject.propTypes = {
  projectid: PropTypes.number.isRequired,
  userid: PropTypes.number.isRequired
};

export default CreateSubProject;
