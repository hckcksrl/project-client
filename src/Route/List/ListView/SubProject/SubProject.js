import React from "react";
import PropTypes from "prop-types";
import DeleteSubProject from "../../../SubProject/DeleteSubProject";
import "./SubProject.scss";
import DetailView from "../Detail";

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
            >
              <div
                className="subproject-div"
                onClick={e => this._click(e, data)}
              >
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
  _click = (e, data) => {
    const { userid } = this.props;
    const position = e.target.getBoundingClientRect();
    const pop_up = document.getElementsByClassName("pop-up-wrap")[0];
    document.getElementsByClassName("pop-main")[0].style.display = "block";
    pop_up.style.left = `${position.left}px`;
    pop_up.style.top = `${position.top}px`;
    DetailView(data, userid);
  };
}
SubProjectPage.propTypes = {
  subproject: PropTypes.array.isRequired,
  userid: PropTypes.number.isRequired
};

export default SubProjectPage;
