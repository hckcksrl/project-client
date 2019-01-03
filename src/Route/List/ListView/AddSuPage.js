import React from "react";
import styled from "styled-components";

const AddSub = styled.div`
  border-radius: 0 0 3px 3px;
  color: #6b808c;
  display: block;
  flex: 0 0 auto;
  padding: 8px;
  position: relative;
  text-decoration: none;
`;

const AddSubInner = styled.div`
  margin-left: 5px;
`;
class AddSubPage extends React.Component {
  render() {
    return (
      <AddSub>
        <AddSubInner>
          <span>Add SubProject</span>
        </AddSubInner>
      </AddSub>
    );
  }
}

export default AddSubPage;
