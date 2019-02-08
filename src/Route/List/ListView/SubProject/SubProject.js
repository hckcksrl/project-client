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

  handleClick = (e, subprojectid) => {
    const { userid } = this.props;
    const position = e.target.getBoundingClientRect();
    const pop_up = document.getElementsByClassName("details")[0];
    document.getElementsByClassName("pop-main")[0].style.display = "block";
    pop_up.style.left = `${position.left}px`;
    pop_up.style.top = `${position.top}px`;
    DetailView(subprojectid, userid);
  };

  render() {
    const { subproject, userid } = this.props;
    return (
      <ul className="subproject">
        {subproject.map(data => {
          return (
            <li className={this.state.sub_main_class} key={data.id}>
              <div className="subproject-wrap">
                <div className="subproject-div">
                  <span
                    className="subproject-name"
                    onClick={e => this.handleClick(e, data.id)}
                  >
                    {data.subprojectname}
                  </span>
                </div>
                <DeleteSubProject subprojectid={data.id} userid={userid} />
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
SubProjectPage.propTypes = {
  subproject: PropTypes.array.isRequired,
  projectid: PropTypes.number.isRequired,
  userid: PropTypes.number.isRequired
};

export default SubProjectPage;
