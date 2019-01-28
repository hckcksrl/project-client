import React from "react";
import { Logout } from "../../../LocalQueries";
import { Mutation } from "react-apollo";
import "./Logout.scss";

export default class LogOut extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className="LogoutWrap">
        <Mutation
          mutation={Logout}
          onCompleted={data => {
            history.go();
          }}
        >
          {(UserLogout, { data, loading, error, called, client }) => (
            <form
              onSubmit={e => {
                UserLogout().then(() => client.clearStore());
              }}
            >
              <button className="logout_btn" type="submit">
                Logout
              </button>
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}
