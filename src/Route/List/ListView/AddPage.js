import React from "react";
import styled from "styled-components";
const AddProject = styled.div`
  background-color: rgba(0, 0, 0, 0.12);
  cursor: pointer;
  color: #fff;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  white-space: normal;
  margin: 1%;
  width: 300px;
  flex-shrink: 1;
`;
const Add = styled.span`
  padding: 6px 8px;
`;

class AddPage extends React.Component {
  render() {
    return (
      <AddProject>
        <Add>Add Project</Add>
      </AddProject>
    );
  }
}

export default AddPage;
