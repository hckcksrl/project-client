import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "./DetailView.scss";
import CreateDetailProject from "../../../DetailProject/CreateDetailProject";
import { ApolloProvider, Query } from "react-apollo";
import client from "../../../../apollo";
import DeleteDetailProject from "../../../DetailProject/DeleteDetailProject";
import EditDetailProject from "../../../DetailProject/EditDetailProject";
import { GetDetail } from "./queries";

const CreateDetailView = subproject => {
  const create = (
    <div className="detail-wrap">
      <div className="header-subproject">
        <span>{subproject.subprojectname}</span>
      </div>
      <div className="detail-main">
        <ul className="detail-ul">
          <Query query={GetDetail} variables={{ subprojectid: subproject.id }}>
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
        <CreateDetailProject subprojectid={subproject.id} />
      </div>
    </div>
  );
  ReactDOM.render(
    <ApolloProvider client={client}>{create}</ApolloProvider>,
    document.getElementsByClassName("details")[0]
  );
};

CreateDetailView.propTypes = {
  subproject: PropTypes.object.isRequired
};

export default CreateDetailView;
