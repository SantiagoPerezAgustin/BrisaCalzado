import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Navbar/Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer
      className="navbar-pink text-dark py-3 mt-auto w-100"
      style={{ width: "100%", position: "relative", left: 0, margin: 0 }}
    >
      <div className="container-fluid d-flex justify-content-around align-items-center flex-wrap px-4 gap-3">
        <div className="d-flex gap-4">
          <a href="/" className="text-dark text-decoration-none fw-bold">
            Inicio
          </a>
          <a
            href="/contacto"
            className="text-dark text-decoration-none fw-bold"
          >
            Contacto
          </a>
        </div>

        {/* Íconos de redes sociales */}
        <div className="d-flex gap-3">
          <a
            href="https://wa.me/5493415039633"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark fs-5"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://www.instagram.com/brisacalzados.ind/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark fs-5"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Línea separadora */}
      <hr style={{ borderTop: "1px solid #a05278", margin: "10px 0" }} />

      {/* Texto inferior */}
      <div className="text-center small text-dark">
        &copy; {new Date().getFullYear()} Brisa Calzado
      </div>
    </footer>
  );
}

export default Footer;
