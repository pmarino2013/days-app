import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import CardEvents from "../components/CardEvents";

const HomeScreen = () => {
  const [eventos, setEventos] = useState([]);
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    setEventos(JSON.parse(localStorage.getItem("eventos")) || []);
  }, []);

  useEffect(() => {
    let dias = calcularDias();
    setEventList(dias);
  }, [eventos]);

  const calcularDias = () => {
    let fecha1 = moment().format();
    const eventosCalculados = eventos.map((item) => {
      let fecha2 = moment(item.fecha);
      let diferencia = fecha2.diff(fecha1, "days");

      return {
        id: item.id,
        evento: item.evento,
        dias: diferencia,
        label: item.label,
      };
    });

    return eventosCalculados.sort((a, b) => a.dias - b.dias);
  };

  const borrarEvento = (indice) => {
    const nuevoArray = [...eventos];
    const index = nuevoArray.findIndex((evento) => {
      return evento.id === indice;
    });
    nuevoArray.splice(index, 1);
    setEventos([...nuevoArray]);
    localStorage.setItem("eventos", JSON.stringify(nuevoArray));
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
      <CardEvents borrarEvento={borrarEvento} eventList={eventList} />
    </div>
  );
};

export default HomeScreen;
