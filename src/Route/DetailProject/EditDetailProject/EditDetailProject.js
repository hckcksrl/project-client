import React, { Component } from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import { EditDetail } from "./queries";
import "./EditDetailProject.scss";
import { GetDetail } from "../../List/queris";

class EditDetailProject extends Component {
  constructor() {
    super();
    this.state = {
      detail_name_span: "detail-name-span",
      edit_detail_input: "edit-detail-input",
      edit_detail_value: ""
    };
  }
  render() {
    const { details } = this.props;
    return (
      <div className="detail-list-main">
        <Mutation mutation={EditDetail}>
          {Edit_Detail => (
            <div className="detail-list">
              <span
                className={this.state.detail_name_span}
                id={`detail`}
                onClick={e => this._Click(e)}
              >
                {details.detailname}
              </span>
              <input
                className={this.state.edit_detail_input}
                defaultValue={this.state.edit_detail_value}
                type="text"
                onBlur={e => this._Blur(e)}
                onKeyPress={e => this._Submit(e, Edit_Detail, details.id)}
              />
            </div>
          )}
        </Mutation>
      </div>
    );
  }

  _Click = e => {
    const { details } = this.props;
    this.setState({
      detail_name_span: "detail-name-span hidden",
      edit_detail_input: "edit-detail-input block",
      edit_detail_value: details.detailname
    });
    window.setTimeout(() => {
      document.getElementsByClassName(this.state.edit_detail_input)[0].focus();
    });
  };

  _Blur = e => {
    const { details } = this.props;
    this.setState({
      detail_name_span: "detail-name-span",
      edit_detail_input: "edit-detail-input",
      edit_detail_value: details.detailname
    });
  };

  _Submit = (e, Edit_Detail, id) => {
    const { subprojectid } = this.props;
    if (e.which === 13) {
      if (e.target.value !== "") {
        Edit_Detail({
          refetchQueries: [
            {
              query: GetDetail,
              variables: { subprojectid: subprojectid }
            }
          ],
          variables: {
            id: id,
            detailname: e.target.value
          }
        });
        this._Blur(e);
        return true;
      } else {
        this._Blur(e);
      }
    } else {
      return true;
    }
  };
}

EditDetailProject.propTypes = {
  details: PropTypes.object.isRequired,
  subprojectid: PropTypes.number.isRequired
};

export default EditDetailProject;
