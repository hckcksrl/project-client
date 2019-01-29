import React from "react";
import PropTypes from "prop-types";
import DeleteSubProject from "../../../SubProject/DeleteSubProject";
import "./SubProject.scss";

class SubProjectPage extends React.Component {
  constructor() {
    super();
    this.state = {
      sub_main_class: "subproject-main"
    };
  }
  render() {
    const { subproject, userid } = this.props;
    return (
      <div className="subproject">
        {subproject.map(data => {
          return (
            <div
              className={this.state.sub_main_class}
              key={data.id}
              id={`sub_div${data.id}`}
              onMouseOver={this._onMouse}
              onMouseOut={e => this._outMouse(e, data.id)}
            >
              <div className="subproject-div">
                <span className="subproject-name" id={`sub${data.id}`}>
                  {data.subprojectname}
                </span>
              </div>
              <DeleteSubProject subprojectid={data.id} userid={userid} />
            </div>
          );
        })}
      </div>
    );
  }
  _outMouse = (e, id) => {
    e.preventDefault();
  };
}

SubProjectPage.propTypes = {
  subproject: PropTypes.array.isRequired,
  userid: PropTypes.number.isRequired
};

export default SubProjectPage;
