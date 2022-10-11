import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import CardEvents from "../components/CardEvents";
import BtnEventFail from "../components/BtnEventFail";

const HomeScreen = () => {
  const [eventos, setEventos] = useState([]);
  const [eventList, setEventList] = useState([]);

  const [fails, setFails] = useState(false);

  useEffect(() => {
    setEventos(JSON.parse(localStorage.getItem("eventos")) || []);
  }, []);

  useEffect(() => {
    let dias = calcularDias();
    let diasHabiles = [];
    if (fails) {
      diasHabiles = dias.filter((dia) => {
        return dia.dias < 0;
      });
    } else {
      diasHabiles = dias.filter((dia) => {
        return dia.dias >= 0;
      });
    }
    setEventList([...diasHabiles]);
  }, [eventos, fails]);

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
    <div className="container ">
      <div className="row mt-5">
        <div className="col-12 col-md-6 offset-md-3">
          <div className="d-flex justify-content-between">
            <h1>Tus eventos {fails ? "Fallidos" : "Activos"}</h1>
            <BtnEventFail setFails={setFails} fails={fails} />
          </div>
          <div className="d-grid">
            <Link to="/add" className="btn btn-primary">
              <i className="fa fa-pencil" aria-hidden="true"></i> Nuevo evento
            </Link>
          </div>
        </div>
      </div>
      <CardEvents borrarEvento={borrarEvento} eventList={eventList} />
    </div>
  );
};

export default HomeScreen;
