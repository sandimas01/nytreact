// import React from "react";

// // The ...props means, spread all of the passed props onto this element
// // That way we don't have to define them all individually
// const SaveBtn = props => (
// 	<button className="btn btn-primary" {...props}>
// 		Save
// 	</button>
// );

// export default SaveBtn;

import React from "react";
import "./SaveBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveBtn = props => (
  <span className="save-btn text-align-right" {...props}>
    ✔Save
  </span>
);

export default SaveBtn;
