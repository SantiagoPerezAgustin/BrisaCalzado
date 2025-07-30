import React from "react";
import { Link } from "react-router-dom";
import proyectos from "../../data/Proyecto";

export const Card = () => {
  return (
    <div className="container py-5 mt-5">
      <div className="row">
        {proyectos.map(({ id, imagen, titulo, descripcion }) => (
          <div className="col-md-4 mb-4" key={id}>
            <Link
              to={`/proyecto/${id}`}
              className="text-decoration-none text-dark"
            >
              <div className="card h-100 border-0 shadow-sm">
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
  );
};

export default Card;
