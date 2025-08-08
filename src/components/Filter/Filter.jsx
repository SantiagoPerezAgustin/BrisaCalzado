import React from "react";
import { FaTshirt, FaShoePrints, FaUserFriends, FaGem } from "react-icons/fa";

const categorias = [
  { nombre: "Todos", icono: <FaGem /> },
  { nombre: "Botas", icono: <FaShoePrints /> },
  { nombre: "Remeras", icono: <FaTshirt /> },
  { nombre: "Accesorios", icono: <FaUserFriends /> },
];

function Filter({ filtro, setFiltro }) {
  return (
    <div className="text-center mb-5" style={{ paddingTop: "3rem" }}>
      <h2 className="mb-4" style={{ fontWeight: "600", color: "#ff69b4" }}>
        Explorá por categoría 💖
      </h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {categorias.map((cat) => (
          <button
            key={cat.nombre}
            onClick={() => setFiltro(cat.nombre)}
            className={`btn d-flex align-items-center gap-2 px-4 py-2 rounded-pill fw-bold ${
              filtro === cat.nombre ? "btn-pink" : "btn-outline-dark"
            }`}
            style={{
              fontSize: "1rem",
              transition: "all 0.3s ease-in-out",
              ...(filtro !== cat.nombre && {
                border: "2px solid #000",
                color: "#000",
                backgroundColor: "transparent",
              }),
              ...(filtro === cat.nombre && {
                backgroundColor: "#ff69b4",
                color: "white",
                border: "2px solid #ff69b4",
              }),
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#ff1493";
              e.currentTarget.style.color =
                filtro === cat.nombre ? "white" : "#000";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor =
                filtro === cat.nombre ? "#ff69b4" : "transparent";
              e.currentTarget.style.color =
                filtro === cat.nombre ? "white" : "#000";
            }}
          >
            {cat.icono} {cat.nombre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;
