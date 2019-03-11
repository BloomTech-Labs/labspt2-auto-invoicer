import React from "react";

const SingleInput = props => {
  return (
    <div>
      <label className="form-label">{props.title}</label>
      <input
        className="form-input"
        name={props.name}
        type={props.inputType}
        value={props.content}
        onChange={props.controlFunc}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default SingleInput;
