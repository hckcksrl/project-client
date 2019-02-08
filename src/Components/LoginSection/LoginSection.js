import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import List from "../../Route/List";
import Home from "../../Route/Home";
import Footer from "../Footer";
import Header from "../Header";
import "./index.scss";
import Overlay from "../Overlay/Overlay";
// import LoginForm from "../LoginForm";

const LoginSection = () => {
  return (
    <div className="body">
      <script src="https://unpkg.com/ionicons@4.2.2/dist/ionicons.js" />
      <div className="content">
        <Header />
        <section className="section">
          <Switch>
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/list/:userid"} component={List} />
            <Redirect to={"/"} />
          </Switch>
        </section>
        <Footer />
      </div>
      <Overlay />
      <div className="login-sign">{/* <LoginForm /> */}</div>
    </div>
  );
};

export default LoginSection;
