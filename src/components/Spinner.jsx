import React from "react";
import { Spinner as Example } from "reactstrap";

const Spinner = () => {
  return (
    <div className="spinner text-center">
      <Example style={{ width: "5rem", height: "5rem" }} />
    </div>
  );
};

export default Spinner;
