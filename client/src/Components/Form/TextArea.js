import React from "react";

export const TextArea = props => (
  <div className="form-group">
    <label {...props} >{props.children}</label>
    <textarea className="form-control" rows="20" {...props} />
  </div>
);
