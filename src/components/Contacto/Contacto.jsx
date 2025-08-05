import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contacto.css";

function Contacto() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="contacto-rapido-section py-5 text-center bg-white"
      id="contacto"
      data-aos="fade-up" // <-- AOS agregado
    >
      <div className="container">
        <h2 className="text-pink mb-4">¿Querés hablar con nosotras?</h2>
        <p className="mb-5">¡Mandanos un mensaje directo! 💬</p>

        <div className="d-flex justify-content-center gap-4 flex-wrap">
          <a
            href="https://wa.me/5491234567890?text=¡Hola!%20Quiero%20hacer%20una%20consulta%20sobre%20un%20producto"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success px-4 py-2 rounded-pill fw-bold"
          >
            <i className="fab fa-whatsapp me-2"></i> WhatsApp
          </a>
          <a
            href="https://www.instagram.com/brisacalzados.ind/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark px-4 py-2 rounded-pill fw-bold"
          >
            <i className="fab fa-instagram me-2"></i> Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
