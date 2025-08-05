import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SobreNosotris.css";

function SobreNosotros() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="sobre-nosotros-section py-5 bg-white"
      style={{ marginTop: "70px" }} // ✅ CAMBIADO
      data-aos="fade-up"
    >
      <div className="container">
        <h2 className="text-center text-pink mb-5">Sobre Nosotros</h2>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://images.unsplash.com/photo-1618354691249-18799a124d3b?auto=format&fit=crop&w=800&q=80" // 
              alt="Moda Brisa"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <p className="lead text-justify">
              En <strong>Brisa Calzado</strong>, nos apasiona ayudarte a
              destacar con tu estilo propio. Cada producto que ofrecemos está
              pensado con amor, buscando combinar calidad, comodidad y
              tendencias actuales.
            </p>
            <p className="text-muted">
              Nuestro objetivo es brindarte una experiencia de compra simple,
              rápida y llena de inspiración. Ya seas fan de las botas, los jeans
              o los accesorios, ¡acá encontrás tu look ideal! 💖
            </p>

            <ul className="list-unstyled mt-4">
              <li className="mb-2">
                <i className="fas fa-shipping-fast text-pink me-2"></i>
                Envíos a todo el país
              </li>
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
