import React from "react";

export const ListItem = props => (
  <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
    {props.children}
  </li>
);
