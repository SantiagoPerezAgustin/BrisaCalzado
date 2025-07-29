import React from "react";
import MyNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import proyectos from "../data/Proyecto";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <MyNavbar />
      <div className="container py-5 mt-5">
        <div className="row">
          {proyectos.map((proyecto) => (
            <div className="col-md-4 mb-4" key={proyecto.id}>
              <Link
                to={`/proyecto/${proyecto.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "300px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{proyecto.titulo}</h5>
                    <p className="card-text small">{proyecto.descripcion}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
