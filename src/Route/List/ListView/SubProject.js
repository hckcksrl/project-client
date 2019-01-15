import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SubProject = styled.div`
  flex: 1 1 auto;
  margin-bottom: 0;
  margin: 0 4px;
  padding: 0 4px;
  min-height: 0;
  float: top;
`;

const SubProjectMain = styled.a`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
  width: 100%;
  min-height: 20px;
  position: relative;
`;

const SubProjectName = styled.span`
  clear: both;
  display: block;
  margin: 0 0 4px;
  text-decoration: none;
  word-wrap: break-word;
  color: #17394d;
`;
const SubProjectDiv = styled.div`
  padding: 6px 8px 2px;
  position: relative;
`;

class SubProjectPage extends React.Component {
  render() {
    const { subproject } = this.props;
    return (
      <SubProject>
        {subproject.map(data => {
          return (
            <SubProjectMain key={data.id}>
              <SubProjectDiv>
                <SubProjectName>{data.subprojectname}</SubProjectName>
              </SubProjectDiv>
            </SubProjectMain>
          );
        })}
      </SubProject>
    );
  }
}

SubProjectPage.propTypes = {
  subproject: PropTypes.array.isRequired
};

export default SubProjectPage;
