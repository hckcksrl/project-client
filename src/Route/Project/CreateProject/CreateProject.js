import React from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import { CreateProject } from "./queries";
import { GetList } from "../../List/queris";
import PropTypes from "prop-types";

const Div = styled.div`
  flex: auto;
  background-color: #dfe3e6;
  border-radius: 3px;
  box-sizing: border-box;
  display: none;
  height: 100%;
  flex-direction: column;
  position: relative;
`;

const Form = styled.form`
  height: 100%;
  width: 100%;
`;

const Div2 = styled.div`
  width: 100%;
  height: 50%;
`;
const Div3 = styled.div`
  width: 100%;
  height: 50%;
`;

const AddArea = styled.input`
  background: white;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: 3px;
  top: 7px;
  max-height: 256px;
  padding-left: 6px;
  width: 95.5%;
  position: absolute;
  left: 8px;
  font-size: 15px;
  line-height: 20px;
  text-align: start;
  resize: none;
  white-space: pre-line;
  z-index: 1;
`;

const Button = styled.button`
  background-color: green;
  box-shadow: 0 1px 0 0 #3f6f21;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  font-size: 15px;
  padding: 6px 12px;
  text-align: center;
  margin-left: 8px;
  top: 7px;
`;

class CreateProjects extends React.Component {
  render() {
    const { userid } = this.props;
    return (
      <Div id={`add_div`}>
        <Mutation mutation={CreateProject}>
          {Create_Project => (
            <Form onSubmit={e => this._Create(e, userid, Create_Project)}>
              <Div2 id={`c-p-wrap`}>
                <AddArea
                  type="text"
                  id={`addArea`}
                  onKeyDown={e => this._press(e)}
                  placeholder="Enter Create Project"
                  onBlur={e => this._focusout(e)}
                />
              </Div2>
              <Div3>
                <Button id={`c_p_btn`} type="submit">
                  Create Project
                </Button>
              </Div3>
            </Form>
          )}
        </Mutation>
      </Div>
    );
  }
  _Create = (e, userid, Create_Project) => {
    e.preventDefault();
    const project = document.getElementById(`addArea`).value;
    Create_Project({
      refetchQueries: [
        {
          query: GetList,
          variables: { id: userid }
        }
      ],
      variables: {
        projectname: project
      }
    });
  };
  _press = e => {
    const code = e.which;
    if (code === 13) {
      e.preventDefault();
      if (document.getElementById(`addArea`).value === "") {
        document.getElementById(`add_div`).style.display = "none";
        document.getElementById(`ClickAdd`).style.display = "none";

        return false;
      } else {
        document.getElementById(`c_p_btn`).click();
        document.getElementById(`add_div`).style.display = "none";
        document.getElementById(`ClickAdd`).style.display = "none";
        e.target.value = "";
        return true;
      }
    }
    return true;
  };

  _focusout = e => {
    e.preventDefault();
    document.getElementById(`ClickAdd`).style.display = "block";
    document.getElementById(`add_div`).style.display = "none";
    document.getElementById(`add`).style.height = "30px";
    document.getElementById(`addArea`).value = "";
  };
}

CreateProject.propTypes = {
  userid: PropTypes.number.isRequired
};

export default CreateProjects;

// render() {
//   const { projectid, userid } = this.props;
//   return (
//     <AddDiv id={`area${projectid}`}>
//       <Div>
//         <Mutation mutation={CreateSub}>
//           {Create_Sub => (
//             <Form
//               onSubmit={e => {
//                 this._complete(e, projectid, Create_Sub, userid);
//               }}
//             >
//               <AddArea
//                 id={`txtarea${projectid}`}
//                 onKeyDown={e => this._press(e, projectid)}
//                 placeholder="Enter Submit"
//                 onBlur={e => this._focusout(e, projectid)}
//               />
//               <Button id={`create_sub_btn${projectid}`} type="submit">
//                 확인
//               </Button>
//             </Form>
//           )}
//         </Mutation>
//       </Div>
//     </AddDiv>
//   );
// }
// _complete = (e, projectid, Create_Sub, userid) => {
//   e.preventDefault();
//   const subproject = document.getElementById(`txtarea${projectid}`).value;
//   if (subproject !== "") {
//     Create_Sub({
//       refetchQueries: [
//         {
//           query: GetList,
//           variables: { id: userid }
//         }
//       ],
//       variables: {
//         subprojectname: subproject,
//         projectid: projectid
//       }
//     });
//     document.getElementById(`txtarea${projectid}`).value = "";
//   } else {
//     console.log("error");
//   }
// };
// _press = (e, key) => {
//   const code = e.which;
//   if (code === 13) {
//     e.preventDefault();
//     document.getElementById(`create_sub_btn${key}`).click();
//     document.getElementById(`area${key}`).style.display = "none";
//     document.getElementById(`addwrap${key}`).style.display = "block";
//     return true;
//   }
//   return true;
// };

// _focusout = (e, id) => {
//   e.preventDefault();
//   document.getElementById(`area${id}`).style.display = "none";
//   document.getElementById(`addwrap${id}`).style.display = "block";
//   document.getElementById(`txtarea${id}`).value = "";
// };
