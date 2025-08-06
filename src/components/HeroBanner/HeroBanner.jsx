import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HeroBanner.css";
import LogoBrisa from "../../assets/Image log Brisa.jpg"

function HeroBanner() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section
      className="hero-banner d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80')",
      }}
      data-aos="fade-up"
    >
      <div className="overlay"></div>
      <div className="hero-content container">
        <h1 className="fw-bold display-4 text-white">Bienvenidos a Brisa</h1>
        <p className="lead text-light">
          Moda pensada para destacar tu estilo ✨
        </p>
        <a
          href="#productos"
          className="btn btn-light fw-bold mt-3 px-4 py-2 rounded-pill"
        >
          Ver productos
        </a>
      </div>
    </section>
  );
}

export default HeroBanner;
