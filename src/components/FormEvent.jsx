import React from "react";

const FormEvent = ({
  handleSubmit,
  evento,
  fecha,
  setEvento,
  setFecha,
  setLabel,
}) => {
  return (
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
  );
};

export default FormEvent;
