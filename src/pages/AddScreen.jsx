import React from "react";
import AddEvent from "../components/AddEvent";

const AddScreen = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1>Crea tu evento nuevo</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <AddEvent />
        </div>
      </div>
    </div>
  );
};

export default AddScreen;
