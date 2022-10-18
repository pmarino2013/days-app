import React from "react";

const BtnEventFail = ({ setFails, fails }) => {
  return (
    <div>
      <span className="nav-link" onClick={() => setFails(!fails)}>
        <i
          className={
            fails
              ? "fa fa-calendar-check-o fa-2x"
              : "fa fa-calendar-times-o fa-2x"
          }
          aria-hidden="true"
        ></i>
      </span>
    </div>
  );
};

export default BtnEventFail;
