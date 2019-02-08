import React, { Component } from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import { CreateDetail } from "./queries";
import "./CreateDetailProject.scss";
import { GetDetail } from "../../List/queris";

class CreateDetailProject extends Component {
  constructor() {
    super();
    this.state = {
      create_detail_div: "Create-detail-span",
      add_detail_input: "add-detail-input"
    };
  }
  render() {
    let detailname;
    return (
      <div className="add-detail-wrap">
        <Mutation mutation={CreateDetail}>
          {Create_Detail => (
            <div className="add-detail-div">
              <span
                className={this.state.create_detail_div}
                onClick={e => this._click(e)}
              >
                Create Detail List
              </span>
              <input
                id="create-input"
                className={this.state.add_detail_input}
                ref={node => {
                  detailname = node;
                }}
                onKeyPress={e => this._submit(e, Create_Detail, detailname)}
                type="text"
                placeholder="Enter Press Submit"
                onBlur={e => this._blur(e)}
              />
            </div>
          )}
        </Mutation>
      </div>
    );
  }
  _submit = (e, Create_Detail, detailname) => {
    const { subprojectid } = this.props;
    if (e.which === 13) {
      Create_Detail({
        refetchQueries: [
          {
            query: GetDetail,
            variables: { subprojectid: subprojectid }
          }
        ],
        variables: {
          detailname: detailname.value,
          subprojectid: subprojectid
        }
      });
      this._blur(e);
      return true;
    } else {
      return true;
    }
  };
  _click = e => {
    e.preventDefault();
    this.setState({
      create_detail_div: "Create-detail-span hidden",
      add_detail_input: "add-detail-input block"
    });
    window.setTimeout(() => {
      document.getElementById("create-input").focus();
    });
  };
  _blur = e => {
    this.setState({
      create_detail_div: "Create-detail-span",
      add_detail_input: "add-detail-input"
    });
    e.target.value = null;
  };
}

CreateDetailProject.propTypes = {
  subprojectid: PropTypes.number.isRequired
};

export default CreateDetailProject;
