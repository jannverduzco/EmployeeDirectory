import React from "react";

function Footer(props) {
  return <div className="footer" style={props.style}>{props.children}</div>;
}

export default Footer;