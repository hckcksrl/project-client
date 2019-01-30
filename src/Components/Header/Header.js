import React from "react";
import { Query } from "react-apollo";
import { GetMy } from "./queries";
import "./Header.scss";
import LogOut from "../../Route/User/Logout";

const Header = () => (
  <Query query={GetMy}>
    {({ loading, data, error }) => {
      if (loading) return "loading";
      if (error) return "something happened";
      return (
        <div className="Header">
          <nav className="Header-nav">
            <div className="Header-height">
              <div className="Header-center">
                <div className="Header-wrap">
                  <span className="Name">{data.GetMy.user.email}</span>
                </div>
                <div>
                  <LogOut />
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
    }}
  </Query>
);

export default Header;
