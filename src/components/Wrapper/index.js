import React from "react";

function Wrapper(props) {
  return <div className="wrapper" style={props.style}>{props.children}</div>;
}

export default Wrapper;