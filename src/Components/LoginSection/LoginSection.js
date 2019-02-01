import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import List from "../../Route/List";
import Home from "../../Route/Home";
import Footer from "../Footer";
import Header from "../Header";
import "./index.scss";
import Overlay from "../Overlay/Overlay";

const LoginSection = () => {
  return (
    <div className="body">
      <div className="content">
        <Header />
        <section className="section">
          <Switch>
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/list/:userid"} component={List} />
            {/* <Route path={"/:subproject"} component={Footer} /> */}
            <Redirect to={"/"} />
          </Switch>
        </section>
        <Footer />
      </div>
      <Overlay />
    </div>
  );
};

export default LoginSection;
