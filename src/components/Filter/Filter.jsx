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
              filtro === cat.nombre ? "btn-dark" : "btn-outline-dark"
            }`}
            style={{
              fontSize: "1rem",
              transition: "all 0.3s ease-in-out",
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
