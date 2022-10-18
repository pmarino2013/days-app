import React from "react";
import moment from "moment";
import imagen from "../assets/notfound.png";

const CardEvents = ({ eventList, borrarEvento }) => {
  if (eventList.length === 0) {
    return (
      <div className="row mt-3">
        <div className="col-12 col-md-6 offset-md-3 animate__animated animate__fadeIn">
          <h3 className="text-center">No hay eventos a mostrar</h3>
          <img className="img-notfound" src={imagen} alt="not found" />
        </div>
      </div>
    );
  }
  return (
    <div className="row row-cols-1 row-cols-md-2 mt-3">
      {eventList.map((item, index) => (
        <div className="col my-2 animate__animated animate__fadeIn" key={index}>
          <div className={`card card-${item.label}`}>
            <div className="card-body d-flex justify-content-between">
              <div>
                <small className="text-muted">
                  {moment(item.fecha).format("L")}
                </small>
                <p className="m-0">{item.evento.toUpperCase()}</p>

                {item.dias < 0 ? (
                  <small className="text-danger">
                    Te pasaste <b>{item.dias * -1}</b> días
                  </small>
                ) : item.dias === 0 ? (
                  <small className="text-danger">Te quedan pocas horas</small>
                ) : (
                  <small>
                    Faltan <b>{item.dias}</b> días
                  </small>
                )}
              </div>
              <div>
                <span
                  className="text-muted"
                  onClick={() => borrarEvento(item.id)}
                >
                  <i className="fa fa-times" aria-hidden="true"></i>
                  {/* <i className="fa fa-trash-o" aria-hidden="true"></i> */}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardEvents;
