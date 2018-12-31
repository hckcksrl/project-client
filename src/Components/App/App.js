import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Regist from "../../Route/User/Register";
import Login from "../../Route/User/Login";
import CreateProjects from "../../Route/Project/CreateProject";
import LogOut from "../../Route/User/Logout";
import List from "../../Route/List";
import PropTypes from "prop-types";
import Home from "../../Route/Home";

class App extends React.Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <BrowserRouter>
        {isLoggedIn ? (
          <Switch>
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/list/:userid"} component={List} />
            <Route path={"/project"} component={CreateProjects} />
            <Route path={"/logout"} component={LogOut} />
            <Redirect from={"*"} to={"/"} />
          </Switch>
        ) : (
          <Switch>
            <Route exact={true} path={"/"} component={Login} />
            <Route path={"/regist"} component={Regist} />
            <Redirect from={"*"} to={"/"} />
          </Switch>
        )}
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default App;

// const App = isLoggedIn => {
//   console.log(isLoggedIn);
//   return (
//     <BrowserRouter>
//       {isLoggedIn ? (
//         <Switch>
//           <Route exact={true} path={"/"} component={Login} />
//           <Route path={"/regist"} component={Regist} />
//           <Redirect from={"*"} to={"/"} />
//         </Switch>
//       ) : (
//         <Switch>
//           <Route exact={true} path={""} component={CreateProjects} />
//           <Route path={"/list/:userid"} component={List} />
//           <Route path={"/project"} component={CreateProjects} />
//           <Route path={"/logout"} component={LogOut} />
//           <Redirect from={"*"} to={"/"} />
//         </Switch>
//       )}
//     </BrowserRouter>
//   );
// };
// App.propTypes = {
//   isLoggedIn: PropTypes.bool.isRequired
// };
