import React from "react";

const heading = (props) => {
  return (
    <div>
      <div class="main">
        <h1>{props.heading}</h1>
        <hr />
      </div>
    </div>
  );
};

export default heading;
