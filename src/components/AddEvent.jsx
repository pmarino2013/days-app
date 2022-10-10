import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import FormEvent from "./FormEvent";

const AddEvent = () => {
  const [eventos, setEventos] = useState(
    JSON.parse(localStorage.getItem("eventos")) || []
  );
  const [evento, setEvento] = useState("");
  const [fecha, setFecha] = useState("");
  const [label, setLabel] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    localStorage.setItem("eventos", JSON.stringify(eventos));
  }, [eventos]);

  // useEffect(() => {
  //   if (label.length > 0) {
  //     mostrarLabel(label);
  //   }
  // }, [label]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const datos = {
      id: new Date().getTime(),
      evento,
      fecha,
      label,
    };

    let hoy = moment().format();
    let fechaEvent = moment(datos.fecha);

    let diferencia = fechaEvent.diff(hoy, "days");

    console.log(diferencia);
    if (diferencia <= 0) {
      setMensaje("Fecha inferior a la fecha actual");
      return setTimeout(() => {
        setMensaje("");
      }, 2000);
    }

    if (label.length > 0) {
      setEventos([...eventos, datos]);
      limpiarForm();
      setMensaje("Evento agregado con éxito");
    } else {
      setMensaje("Falta elegir un label");
    }
    setTimeout(() => {
      setMensaje("");
    }, 2000);
  };

  const limpiarForm = () => {
    setEvento("");
    setFecha("");
  };

  // const mostrarLabel = (color) => {
  //   setMensaje(`Elegiste label ${color}`);
  //   setTimeout(() => {
  //     setMensaje("");
  //   }, 3000);
  // };
  return (
    <>
      <FormEvent
        handleSubmit={handleSubmit}
        evento={evento}
        setEvento={setEvento}
        fecha={fecha}
        setFecha={setFecha}
        setLabel={setLabel}
      />
      <div className="d-grid mt-3">
        <Link to="/" className="btn btn-outline-primary">
          Lista de eventos
        </Link>
      </div>
      {mensaje.length !== 0 && (
        <div className="mt-3">
          <div
            className={
              label.length > 0 ? "alert alert-info" : "alert alert-danger"
            }
            role="alert"
          >
            {mensaje}
          </div>
        </div>
      )}
    </>
  );
};

export default AddEvent;
