import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

    if (label.length > 0) {
      setEventos([...eventos, datos]);
      limpiarForm();
    } else {
      setMensaje("Falta elegir un label");
    }
  };

  const limpiarForm = () => {
    setEvento("");
    setFecha("");
    setLabel("");
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
          <div className="alert alert-danger" role="alert">
            {mensaje}
          </div>
        </div>
      )}
    </>
  );
};

export default AddEvent;
