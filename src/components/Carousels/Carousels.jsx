import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";

function Carousels() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-left">
      <Carousel fade>
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
            alt="Zapatos modernos"
            className="d-block w-100"
            style={{
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <Carousel.Caption>
            <h3>Zapatos modernos</h3>
            <p>Descubrí la última moda en calzado.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
            alt="Colección primavera"
            className="d-block w-100"
            style={{
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <Carousel.Caption>
            <h3>Colección primavera</h3>
            <p>Colores y estilos para todos los gustos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
            alt="Accesorios únicos"
            className="d-block w-100"
            style={{
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <Carousel.Caption>
            <h3>Accesorios únicos</h3>
            <p>Combiná tu look con nuestros accesorios.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;
