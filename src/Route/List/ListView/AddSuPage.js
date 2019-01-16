import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const AddSub = styled.div`
  border-radius: 0 0 3px 3px;
  color: #6b808c;
  display: inline-block;
  flex: 0 0 auto;
  padding: 10px;
  position: relative;
  text-decoration: none;
  height: auto;
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
        onClick={() => this.click(projectid)}
        on={() => this.focusout(projectid)}
      >
        <AddSubInner>
          <AddSubName>Add SubProject</AddSubName>
        </AddSubInner>
      </AddSub>
    );
  }
  click = id => {
    document.getElementById(`area${id}`).style.display = "block";
    document.getElementById(`addwrap${id}`).style.display = "none";
    document.getElementById(`txtarea${id}`).focus();
  };
  focusout = id => {
    document.getElementById(`addwrap${id}`).style.display = "block";
    document.getElementById(`area${id}`).style.display = "none";
    document.getElementById(`txtarea${id}`);
  };
}

AddSubPage.propTypes = {
  projectid: PropTypes.number.isRequired
};

export default AddSubPage;
