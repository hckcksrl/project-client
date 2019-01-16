import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CreateSubProject from "../../SubProject/CreateSubProject";
import DeleteSubProject from "../../SubProject/DeleteSubProject";

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
    const { subproject, projectid, userid } = this.props;
    return (
      <SubProject>
        {subproject.map(data => {
          return (
            <SubProjectMain key={data.id}>
              <SubProjectDiv id={`subdiv`}>
                <SubProjectName id={`sub${data.id}`}>
                  {data.subprojectname}
                </SubProjectName>
                <DeleteSubProject subprojectid={data.id} userid={userid} />
              </SubProjectDiv>
            </SubProjectMain>
          );
        })}
        <CreateSubProject projectid={projectid} userid={userid} />
      </SubProject>
    );
  }
  press = (e, key) => {
    const code = e.which;
    const add = document.getElementById(`txtarea${key}`);
    document.getElementById(`area${key}`).style.height = add.style.height + 6;
    if (code === 13) {
      e.preventDefault();
      return;
    }
    return true;
  };
  height = (e, key) => {
    const edit = document.getElementById(`edit${key}`);
    document.getElementById(`main${key}`).style.height = edit.style.height;
  };
}

SubProjectPage.propTypes = {
  subproject: PropTypes.array.isRequired,
  projectid: PropTypes.number.isRequired,
  userid: PropTypes.number.isRequired
};

export default SubProjectPage;
