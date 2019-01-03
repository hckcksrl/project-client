import React from "react";
import styled from "styled-components";
import Logout from "../../User/Logout";
import PropTypes from "prop-types";

const UserWrap = styled.div`
  height: auto;
  width: auto;
`;
const User = styled.div`
  justify-content: left;
  align-items: center;
  position: relative;
  padding: 1.5em;
  width: auto;
  margin: 1em;
`;

const UserEmail = styled.span`
  color: white;
  font-size: 18px;
  line-height: 30px;
  font-weight: 600;
`;

class HeaderPage extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <UserWrap>
        <User>
          <UserEmail>{email}</UserEmail>
          <Logout />
        </User>
      </UserWrap>
    );
  }
}
HeaderPage.propTypes = {
  email: PropTypes.string.isRequired
};

export default HeaderPage;
