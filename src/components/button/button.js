import React from "react";

const scalingText = (props) => {
  return <div className="Button">
      <button {...props}  >{props.label}</button>
  </div>;
};
export default scalingText;
