import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const HomeScreen = () => {
  const [eventos, setEventos] = useState([]);
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    setEventos(JSON.parse(localStorage.getItem("eventos")) || []);
    // setEventList(calcularDias());
  }, []);

  useEffect(() => {
    setEventList(calcularDias());
  }, [eventos]);

  const calcularDias = () => {
    let fecha1 = moment().format();
    const eventosCalculados = eventos.map((item) => {
      let fecha2 = moment(item.fecha);
      let diferencia = fecha2.diff(fecha1, "days");

      return {
        evento: item.evento,
        dias: diferencia,
        label: item.label,
      };
    });

    return eventosCalculados;
  };

  const definirColor = (color) => {
    switch (color) {
      case "azul":
        return "card card-azul";
      case "verde":
        return "card card-verde";
      case "rojo":
        return "card card-rojo";
      case "morado":
        return "card card-morado";
      case "amarillo":
        return "card card-amarillo";
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1>Tus eventos</h1>
          <div className="d-grid">
            <Link to="/add" className="btn btn-primary">
              Nuevo evento
            </Link>
          </div>
        </div>
      </div>
      <div className="row row-cols-1">
        {eventList.map((item, index) => (
          <div className="col my-2" key={index}>
            <div className={`card card-${item.label}`}>
              <div className="card-body">
                <p className="m-0">{item.evento.toUpperCase()}</p>
                <span>Faltan {item.dias} días</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
