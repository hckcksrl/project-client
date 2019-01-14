import React from "react";
import { Mutation } from "react-apollo";
import { EditProject } from "./queries";
import PropTypes from "prop-types";
import { GetList } from "../../List/queris";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

const ProjectEdit = styled(TextareaAutosize)`
  background: transparent;
  box-sizing:border-box;
  border: 1px solid transparent;
  border-radius: 3px;
  margin: -4px 0;
  max-height: 256px;
  padding-left: 6px;
  padding-top : 7px
  width: 75%;
  position: absolute;
  left: 8px;
  font-size: 20px;
  line-height: 14px;
  text-align: start;
  visibility: visible;
`;
const Form = styled.form``;
const Button = styled.button`
  float: right;
`;

class Edit extends React.Component {
  render() {
    const { projectname, id, history, userid } = this.props;
    return (
      <Mutation
        mutation={EditProject}
        onCompleted={data => {
          const result = data.EditProject.result;
          if (result === true) {
            history.push(`/list/${userid}`);
          }
        }}
      >
        {Edit_Project => (
          <Form
            onSubmit={e => {
              e.preventDefault();
              Edit_Project({
                refetchQueries: [
                  {
                    query: GetList,
                    variables: { id: userid }
                  }
                ],
                variables: {
                  projectname: projectname,
                  id: id
                }
              });
            }}
          >
            <ProjectEdit
              id={`edit${id}`}
              onClick={() => this.style(id)}
              onKeyPress={e => this.edit(e, id, history)}
              defaultValue={projectname}
            />
            <Button type="submit">확인</Button>
          </Form>
        )}
      </Mutation>
    );
  }
  style = key => {
    const edit = document.getElementById(`edit${key}`);
    edit.style.background = "white";
    return true;
  };
  edit = (e, key, history) => {
    const projectname = document.getElementById(`edit${key}`).value;
    const code = e.which;
    if (code === 13) {
      Edit(projectname, key, history);
    }
    return true;
  };
}

Edit.propTypes = {
  projectname: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired
};

export default Edit;
