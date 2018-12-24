import React from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import { CreateProject } from "./queries";
// import { GetUser } from "../../../LocalQueries";
// import { graphql } from "graphql";

const Project = styled.input`
  padding: 1em;
  margin: 1em;
  color: ${props => props.inputColor || "black"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Form = styled.form``;

class CreateProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectname: ""
    };
  }

  render() {
    const { history } = this.props;
    const { projectname } = this.state;
    return (
      <Mutation mutation={CreateProject}>
        {Create_Project => (
          <Form
            onSubmit={e => {
              e.preventDefault();

              Create_Project({
                variables: {
                  projectname: projectname
                }
              }).then(data => {
                console.log(data.data);
                if (data.data.CreateProject.result) {
                  this.state.projectname = "";
                  history.push("/project");
                } else {
                  console.log(data.data.CreateProject.error);
                }
              });
            }}
          >
            <Project
              placeholder="projectname"
              type="text"
              onChange={this._onInputChange}
              value={projectname}
              name={"projectname"}
            />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Mutation>
    );
  }
  _onInputChange = event => {
    const {
      target: { value, name }
    } = event;
    this.setState({
      [name]: value
    });
  };
}

export default CreateProjects;
