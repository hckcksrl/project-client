import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "./DetailView.scss";
import CreateDetailProject from "../../../DetailProject/CreateDetailProject";
import { ApolloProvider, Query } from "react-apollo";
import client from "../../../../apollo";
import DeleteDetailProject from "../../../DetailProject/DeleteDetailProject";
import EditDetailProject from "../../../DetailProject/EditDetailProject";
import EditSubProject from "../../../SubProject/EditSubProject";
import { GetSub, GetDetail } from "../../queris";

const CreateDetailView = (subprojectid, userid) => {
  const create = (
    <Query query={GetSub} variables={{ id: subprojectid }}>
      {({ loading, error, data }) => {
        if (loading) return "loading";
        if (error) return "error";
        const subproject = data.GetSubProject.subproject;
        return (
          <div className="detail-wrap">
            <div className="header-subproject">
              <EditSubProject subproject={subproject} userid={userid} />
            </div>
            <div className="detail-main">
              <ul className="detail-ul">
                <Query
                  query={GetDetail}
                  variables={{ subprojectid: subproject.id }}
                >
                  {({ loading, data, error }) => {
                    if (loading) return "loading";
                    if (error) return "error";
                    return data.GetDetailList.detail.map(details => (
                      <li key={details.id} className="detailname">
                        <div className="detail-list-wrap">
                          <EditDetailProject
                            details={details}
                            subprojectid={subproject.id}
                          />
                          <DeleteDetailProject
                            id={details.id}
                            subprojectid={subproject.id}
                          />
                        </div>
                      </li>
                    ));
                  }}
                </Query>
              </ul>
            </div>
            <div className="detail-footer">
              <CreateDetailProject subprojectid={subprojectid} />
            </div>
          </div>
        );
      }}
    </Query>
  );
  ReactDOM.render(
    <ApolloProvider client={client}>{create}</ApolloProvider>,
    document.getElementsByClassName("details")[0]
  );
};

CreateDetailView.propTypes = {
  subprojectid: PropTypes.number.isRequired,
  userid: PropTypes.number.isRequired
};

export default CreateDetailView;
