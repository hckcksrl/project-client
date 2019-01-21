import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const AddSub = styled.div`
  border-radius: 0 0 3px 3px;
  color: ${props => props.inputColor};
  flex: 0 0 auto;
  padding: 10px;
  position: relative;
  text-decoration: none;
  height: auto;
  display: inline-block;
  cursor: pointer;
  background: ${props => props.inputBackground};
`;

const AddSubInner = styled.div`
  margin-left: 5px;
  height: auto;
`;

const AddSubName = styled.a`
  z-index: 5;
`;

class AddSubPage extends React.Component {
  state = {
    backgroundColor: "",
    color: ""
  };
  render() {
    const { projectid } = this.props;
    return (
      <AddSub
        id={`addwrap${projectid}`}
        onClick={e => this._click(e, projectid)}
        onMouseOver={e => this._onMouse(e, projectid)}
        onMouseLeave={e => this._outMouse(e, projectid)}
        inputBackground={this.state.backgroundColor}
        inputColor={this.state.color}
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
    this.setState({
      backgroundColor: "#798d99",
      color: "#000000"
    });
  };
  _outMouse = (e, id) => {
    e.preventDefault();
    this.setState({
      backgroundColor: "#dfe3e6",
      color: "#6b808c"
    });
  };
}

AddSubPage.propTypes = {
  projectid: PropTypes.number.isRequired
};

export default AddSubPage;
