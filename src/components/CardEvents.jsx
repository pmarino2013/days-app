import React from "react";

const CardEvents = ({ eventList, borrarEvento }) => {
  if (eventList.length === 0) {
    return (
      <div className="row mt-3">
        <div className="col-12 col-md-6 offset-md-3">
          <h3>No hay eventos creados</h3>
        </div>
      </div>
    );
  }
  return (
    <div className="row row-cols-1 row-cols-md-2 mt-3">
      {eventList.map((item, index) => (
        <div className="col my-2" key={index}>
          <div className={`card card-${item.label}`}>
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <p className="m-0">{item.evento.toUpperCase()}</p>
                {item.dias <= 0 ? (
                  <small>
                    Te pasaste <b>{item.dias * -1}</b> días
                  </small>
                ) : (
                  <small>
                    Faltan <b>{item.dias}</b> días
                  </small>
                )}
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
