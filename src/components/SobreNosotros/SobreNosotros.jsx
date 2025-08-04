import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function SobreNosotros() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5 bg-white" data-aos="fade-right">
      <div className="container">
        <h2 className="mb-4 text-pink text-center">Sobre Nosotros</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p style={{ fontSize: "1.2rem" }}>
              Somos <b>Brisa Calzado</b>, una tienda dedicada a ofrecerte los
              mejores productos de moda y calzado. Nos apasiona la atención
              personalizada, la calidad y la innovación en cada colección.
              Nuestro equipo trabaja día a día para que vivas la mejor
              experiencia de compra, con envíos rápidos y opciones de pago
              flexibles.
            </p>
            <p style={{ fontSize: "1.1rem" }}>
              ¡Gracias por elegirnos y ser parte de nuestra comunidad!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;
