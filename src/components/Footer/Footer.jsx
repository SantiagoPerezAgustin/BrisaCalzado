import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Navbar/Navbar.css";

function Footer() {
  return (
    <footer
      className="navbar-pink text-dark py-3 mt-auto w-100"
      style={{ width: "100%", position: "relative", left: 0, margin: 0 }}
    >
      <div className="container-fluid d-flex flex-wrap justify-content-center align-items-center gap-4">
        <a href="/" className="text-dark text-decoration-none fw-bold">
          Inicio
        </a>
        <a href="/contacto" className="text-dark text-decoration-none fw-bold">
          Contacto
        </a>
        <a href="/servicios" className="text-dark text-decoration-none fw-bold">
          Servicios
        </a>
        <a
          href="https://instagram.com"
          className="text-dark text-decoration-none fw-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://wa.me/123456789"
          className="text-dark text-decoration-none fw-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
      <div className="text-center mt-2 small text-dark">
        &copy; {new Date().getFullYear()} Brisa Calzado
      </div>
    </footer>
  );
}

export default Footer;
