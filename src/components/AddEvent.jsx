import React, { useEffect, useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const datos = {
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
    setMensaje("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre del evento</label>
          <input
            className="form-control"
            type="text"
            value={evento}
            onChange={(e) => setEvento(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Fecha del evento</label>
          <input
            className="form-control"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>
        <label>Labels</label>
        <div className="d-flex gap-2">
          <div>
            <button
              className="box item1"
              onClick={() => setLabel("azul")}
              type="button"
            ></button>
          </div>
          <div>
            <button
              className="box item2"
              onClick={() => setLabel("verde")}
              type="button"
            ></button>
          </div>
          <div>
            <button
              className="box item3"
              onClick={() => setLabel("rojo")}
              type="button"
            ></button>
          </div>
          <div>
            <button
              className="box item4"
              onClick={() => setLabel("morado")}
              type="button"
            ></button>
          </div>
          <div>
            <button
              className="box item5"
              onClick={() => setLabel("amarillo")}
              type="button"
            ></button>
          </div>
        </div>
        <div className="d-grid mt-5">
          <button type="submit" className="btn btn-dark">
            Agregar
          </button>
        </div>
      </form>
      {mensaje === 0 && (
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
