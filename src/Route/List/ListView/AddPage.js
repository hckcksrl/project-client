import React from "react";
import styled from "styled-components";
import CreateProject from "../../Project/CreateProject";
import PropTypes from "prop-types";

const ClickAdd = styled.div`
  display: block;
  cursor: pointer;
  margin: 1%;
`;
const Add = styled.span`
  color: black;
`;
const AddDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.12);
  border-radius: 3px;
  box-sizing: border-box;
  flex-direction: column;
  height: 30px;
  position: relative;
  white-space: normal;
  margin: 1%;
  max-width: 600px;
  min-width: 300px;
  flex-shrink: 1;
  flex: auto;
  padding: 1px;
`;

class AddPage extends React.Component {
  render() {
    const { userid } = this.props;
    return (
      <AddDiv id="add">
        <ClickAdd id={`ClickAdd`} onClick={e => this._Click(e)}>
          <Add>Add Project</Add>
        </ClickAdd>
        <CreateProject userid={userid} />
      </AddDiv>
    );
  }
  _Click = e => {
    document.getElementById(`ClickAdd`).style.display = "none";
    document.getElementById(`add_div`).style.display = "block";
    document.getElementById(`addArea`).focus();
    document.getElementById(`add`).style.height = "80px";
  };
}

AddPage.propTypes = {
  userid: PropTypes.number.isRequired
};

export default AddPage;
