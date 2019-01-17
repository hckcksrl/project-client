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
            <SubProjectMain
              key={data.id}
              id={`sub_div${data.id}`}
              onMouseOver={e => this._onMouse(e, data.id)}
              onMouseOut={e => this._outMouse(e, data.id)}
            >
              <SubProjectDiv>
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
  _onMouse = (e, id) => {
    e.preventDefault();
    document.getElementById(`sub_div${id}`).style.backgroundColor = "#f5f6f7";
    document.getElementById(`sub_del${id}`).style.visibility = "visible";
  };
  _outMouse = (e, id) => {
    e.preventDefault();
    document.getElementById(`sub_div${id}`).style.backgroundColor = "#ffffff";
    document.getElementById(`sub_del${id}`).style.visibility = "hidden";
  };
}

SubProjectPage.propTypes = {
  subproject: PropTypes.array.isRequired,
  projectid: PropTypes.number.isRequired,
  userid: PropTypes.number.isRequired
};

export default SubProjectPage;
