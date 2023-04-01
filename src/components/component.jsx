import React from "react";
const Comp = (prop) => {
  return (
    <div>
      <h1> This is {prop.heading}</h1>
      <p>This is {prop.para} </p>
      <img src={prop.src} alt="this is alt" />
    </div>
  );
};
export default Comp;
