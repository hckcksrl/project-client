import React, { Component } from "react";
import "./Overlay.scss";
import ReactDOM from "react-dom";

class Overlay extends Component {
  render() {
    return (
      <div
        ref={node => (this.wrap = node)}
        className="pop-main"
        onClick={e => this.blur(e)}
      >
        <div ref={node => (this.details = node)} className="details" />
      </div>
    );
  }
  blur = e => {
    if (e.target === this.wrap) {
      const element = null;
      ReactDOM.render(element, this.details);
      this.wrap.style.display = "none";
    } else {
      return true;
    }
  };
}
export default Overlay;
