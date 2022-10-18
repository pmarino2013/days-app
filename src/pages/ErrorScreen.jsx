import React from "react";
import { Link } from "react-router-dom";

const ErrorScreen = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1>Not Found 😔</h1>
          <Link to="/" className="nav-link">
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorScreen;
