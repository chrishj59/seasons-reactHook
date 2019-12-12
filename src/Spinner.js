import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// define default properties for functional compoent
// name of prop and default value
Spinner.defaultProps = {
  message: "Loading..."
};
export default Spinner;
