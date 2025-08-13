import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import proyectos from "../../data/Proyecto";
import "./Card.css";
import { FaTshirt, FaShoePrints, FaUserFriends, FaGem } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export const Card = () => {
  const [filtro, setFiltro] = useState("Todos");

  const proyectosFiltrados =
    filtro === "Todos"
      ? proyectos
      : proyectos.filter((proyecto) => proyecto.categoria === filtro);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="container-fluid px-0 categorias-container">
        {/* Tarjetas */}
        <div className="mt-4" data-aos="zoom-in">
          <div className="row">
            {proyectosFiltrados.map(({ id, imagen, titulo, descripcion }) => (
              <div className="col-md-4 mb-4" key={id}>
                <Link
                  to={`/proyecto/${id}`}
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 border-0 shadow-sm custom-card">
                    <img
                      src={imagen}
                      alt={titulo}
                      className="card-img-top"
                      style={{ objectFit: "cover", height: "300px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{titulo}</h5>
                      <p className="card-text small">{descripcion}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
