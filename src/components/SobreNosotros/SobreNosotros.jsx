import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SobreNosotris.css";
import BrisaLogo from "../../assets/Image log Brisa.jpg"; // asegurate que esta imagen exista

function SobreNosotros() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="sobre-nosotros-section py-5 bg-white"
      data-aos="fade-up"
    >
      <div className="container">
        <h2 className="text-center text-pink mb-5">Sobre Nosotros</h2>
        <div className="row align-items-center">
          {/* Imagen */}
          <div className="col-lg-6 mb-4 mb-lg-0 text-center">
            <img
              src={BrisaLogo}
              alt="Moda Brisa"
              className="sobre-nosotros-img"
            />
          </div>

          {/* Texto */}
          <div className="col-lg-6">
            <p className="lead text-justify">
              En <strong>Brisa Calzado</strong>, nos apasiona ayudarte a
              destacar con tu estilo propio. Cada producto que ofrecemos está
              pensado con amor, combinando calidad, comodidad y moda actual.
            </p>
            <p className="text-muted">
              Queremos brindarte una experiencia de compra simple, rápida e
              inspiradora. Ya seas fan de las botas, remeras o accesorios...
              ¡acá encontrás tu look ideal! 💖
            </p>

            <ul className="list-unstyled mt-4">
              <li className="mb-2">
                <i className="fas fa-star text-pink me-2"></i>
                Productos seleccionados con calidad premium
              </li>
              <li className="mb-2">
                <i className="fas fa-heart text-pink me-2"></i>
                Atención personalizada siempre 💬
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;
