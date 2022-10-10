import React from "react";

const CardEvents = ({ eventList, borrarEvento }) => {
  return (
    <div className="row row-cols-1">
      {eventList.map((item, index) => (
        <div className="col my-2" key={index}>
          <div className={`card card-${item.label}`}>
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <p className="m-0">{item.evento.toUpperCase()}</p>
                <small>
                  Faltan <b>{item.dias}</b> días
                </small>
              </div>
              <div>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => borrarEvento(item.id)}
                >
                  <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardEvents;
