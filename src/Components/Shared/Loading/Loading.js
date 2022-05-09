import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div>
      <Spinner animation="border" role="status">
      </Spinner>
    </div>
  );
};

export default Loading;
