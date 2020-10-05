import React from "react";

const scalingText = (props) => {
  return <div className="Button">
      <button {...props}  onClick={props.clicked}>{props.label}</button>
  </div>;
};
export default scalingText;
