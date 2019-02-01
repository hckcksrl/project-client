import React from "react";
import PropTypes from "prop-types";
import DeleteSubProject from "../../../SubProject/DeleteSubProject";
import "./SubProject.scss";
import CreateDetail from "../../../DetailProject/CreateDetailProject";

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
              onClick={e => this._click(e, data.detaillist)}
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
  _click = (e, detail) => {
    const position = e.target.getBoundingClientRect();
    const pop_up = document.getElementsByClassName("pop-up-wrap")[0];
    document.getElementsByClassName("pop-main")[0].style.display = "block";
    pop_up.style.left = `${position.left}px`;
    pop_up.style.top = `${position.top}px`;
    CreateDetail(detail);
  };
}
SubProjectPage.propTypes = {
  subproject: PropTypes.array.isRequired,
  userid: PropTypes.number.isRequired
};

export default SubProjectPage;
