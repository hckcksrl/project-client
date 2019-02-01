import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

const CreateDetail = detail => {
  const create = (
    <div className="detail-wrap">
      <div className="detail-box">
        {detail.map(details => (
          <h2 key={details.id}>{details.detailname}</h2>
        ))}
      </div>
    </div>
  );
  ReactDOM.render(create, document.getElementsByClassName("details")[0]);
};
CreateDetail.propTypes = {
  detail: PropTypes.array.isRequired
};

export default CreateDetail;
