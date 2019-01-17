import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const AddSub = styled.div`
  border-radius: 0 0 3px 3px;
  color: #6b808c;
  flex: 0 0 auto;
  padding: 10px;
  position: relative;
  text-decoration: none;
  height: auto;
  display: inline-block;
  cursor: pointer;
`;

const AddSubInner = styled.div`
  margin-left: 5px;
  height: auto;
`;

const AddSubName = styled.a`
  z-index: 5;
`;

class AddSubPage extends React.Component {
  render() {
    const { projectid } = this.props;
    return (
      <AddSub
        id={`addwrap${projectid}`}
        onClick={e => this._click(e, projectid)}
        onMouseOver={e => this._onMouse(e, projectid)}
        onMouseLeave={e => this._outMouse(e, projectid)}
      >
        <AddSubInner>
          <AddSubName>Add SubProject</AddSubName>
        </AddSubInner>
      </AddSub>
    );
  }
  _click = (e, id) => {
    document.getElementById(`addwrap${id}`).style.display = "none";
    document.getElementById(`area${id}`).style.display = "block";
    document.getElementById(`txtarea${id}`).focus();
  };
  _onMouse = (e, id) => {
    e.preventDefault();
    document.getElementById(`addwrap${id}`).style.backgroundColor = "#798d99";
    document.getElementById(`addwrap${id}`).style.color = "#000000";
  };
  _outMouse = (e, id) => {
    e.preventDefault();
    document.getElementById(`addwrap${id}`).style.backgroundColor = "#dfe3e6";
    document.getElementById(`addwrap${id}`).style.color = "#6b808c";
  };
}

AddSubPage.propTypes = {
  projectid: PropTypes.number.isRequired
};

export default AddSubPage;
