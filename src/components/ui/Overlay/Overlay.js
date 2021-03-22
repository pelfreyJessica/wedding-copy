import React from "react";

import "./overlay.scss";

const Overlay = (props) => {
  return (
    <div
      className={`overlay ${props.open ? "overlay-open" : "overlay-hidden"}`}
    >
      {props.children}
    </div>
  );
};

export default Overlay;
