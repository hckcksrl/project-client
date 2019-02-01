import React from "react";
import "./Overlay.scss";
import ReactDOM from "react-dom";

const Overlay = () => {
  return (
    <div className="pop-main" onClick={e => FocusOut(e)}>
      <div className="pop-up-wrap" id="pop">
        <div className="pop-up">
          <div className="focus-dummy" />
          <div className="details" />
        </div>
      </div>
    </div>
  );
};
const FocusOut = e => {
  if (e.target === document.getElementsByClassName("pop-main")[0]) {
    const element = null;
    ReactDOM.render(element, document.getElementsByClassName("details")[0]);
    document.getElementsByClassName("pop-main")[0].style.display = "none";
  } else {
    return true;
  }
};

export default Overlay;
