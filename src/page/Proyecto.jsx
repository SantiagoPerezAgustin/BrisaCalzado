import React from "react";
import { useParams } from "react-router-dom";
import proyectos from "../data/Proyecto";
import MyNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Proyecto() {
  const { id } = useParams();
  const proyecto = proyectos.find((p) => p.id === parseInt(id));

  if (!proyecto) return <p>Proyecto no encontrado</p>;

  return (
    <>
      <MyNavbar />
      <div className="container py-5 mt-5">
        <h2>{proyecto.titulo}</h2>
        <img
          src={proyecto.imagen}
          alt={proyecto.titulo}
          className="img-fluid my-4"
        />
        <p>{proyecto.descripcion}</p>
        {/* Podés agregar más contenido acá, como más imágenes o video */}
      </div>
      <Footer />
    </>
  );
}

export default Proyecto;
