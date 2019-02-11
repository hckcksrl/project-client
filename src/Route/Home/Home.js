import React, { Component } from "react";
import { MyId } from "./queries";
import { Query } from "react-apollo";
import PropTypes from "prop-types";
import back from "./back.png";
import "./Home.scss";

class Home extends Component {
  render() {
    const { isLoggedIn } = this.props;
    console.log(this.props);
    return (
      <div className="home-back">
        <img src={back} className="home-img" alt="Home" />
        {isLoggedIn ? (
          <Query query={MyId}>
            {({ loading, error, data }) => {
              if (loading) return "loading";
              if (error) return "error";
              return (
                <div className="home-form">
                  <span
                    className="home-button"
                    onClick={() => this.submit(data.GetMy.user.id)}
                  >
                    My Project
                  </span>
                </div>
              );
            }}
          </Query>
        ) : null}
      </div>
    );
  }
  submit = id => {
    const { history } = this.props;
    history.push(`/list/${id}`);
  };
}

Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default Home;
