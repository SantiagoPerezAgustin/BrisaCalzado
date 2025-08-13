import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import proyectos from "../../data/Proyecto";
import MyNavbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Proyecto.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Proyecto() {
  const { id } = useParams();
  const proyecto = proyectos.find((p) => p.id === parseInt(id));

  useEffect(() => {
    // Inicializa AOS
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
    });

    window.scrollTo(0, 0);

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [id]); 

  if (!proyecto) {
    return (
      <Container className="py-5 text-center">
        <h2 className="text-danger">Proyecto no encontrado</h2>
        <Button href="/" variant="outline-danger" className="mt-3">
          Volver al inicio
        </Button>
      </Container>
    );
  }

  return (
    <>
      <MyNavbar />

      {/* Hero Section Minimalista */}
      <Container fluid className="p-0 hero-container">
        <Row className="g-0 align-items-center hero-section">
          <Col md={6} className="p-4 p-md-5" data-aos="fade-right">
            <h1 className="display-5 fw-bold text-pink mb-3">
              {proyecto.titulo}
            </h1>
            <p className="lead" data-aos="fade-right" data-aos-delay="100">
              {proyecto.descripcion}
            </p>
            <div
              className="d-flex gap-3 mt-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Button variant="dark" size="lg">
                Ver colección
              </Button>
              <Button variant="outline-dark" size="lg" href="/sobre-nosotros">
                Contacto
              </Button>
              <Button variant="outline-dark" size="lg" href="/">
                Volver
              </Button>
            </div>
          </Col>
          <Col md={6} className="hero-image-col" data-aos="fade-left">
            <div className="hero-image-wrapper">
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="hero-image img-fluid img-glow"
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Features Section */}
      <Container className="my-5 py-4">
        <h2 className="text-center text-pink mb-5" data-aos="fade-up">
          Características
        </h2>
        <Row className="g-4">
          {[
            { icon: "fa-leaf", title: "Materiales", text: "100% sustentables" },
            { icon: "fa-tshirt", title: "Talles", text: "Inclusivos" },
            {
              icon: "fa-map-marker-alt",
              title: "Origen",
              text: "Hecho en Argentina",
            },
          ].map((feature, index) => (
            <Col
              md={4}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card className="border-0 text-center h-100 feature-card">
                <Card.Body>
                  <div className="icon-container mb-3">
                    <i className={`fas ${feature.icon} text-pink fa-2x`}></i>
                  </div>
                  <Card.Title className="text-pink">{feature.title}</Card.Title>
                  <Card.Text>{feature.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Gallery Section */}
      <Container fluid className="bg-light py-5">
        <Container>
          <h2 className="text-center text-pink mb-4" data-aos="fade-up">
            Galería
          </h2>
          <Row className="g-4">
            {[1, 2, 3].map((item, index) => (
              <Col
                xs={12}
                md={4}
                key={item}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="d-flex align-items-stretch"
              >
                <Card className="border-0 gallery-item shadow-sm">
                  <div className="position-relative overflow-hidden">
                    <Card.Img
                      variant="top"
                      src={`https://source.unsplash.com/random/600x800/?fashion,${item}`}
                      className="img-fluid img-glow"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                    <div className="position-absolute bottom-0 start-0 end-0 p-3 text-white bg-gradient">
                      <h5 className="mb-0">Item {item}</h5>
                      <small>Colección {proyecto.titulo}</small>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      {/* CTA Section */}
      <Container fluid className="bg-pink text-white py-5">
        <Container className="text-center">
          <h2 className="mb-3" data-aos="fade-up">
            ¿Interesado en esta colección?
          </h2>
          <Button
            variant="dark"
            size="lg"
            className="mt-3"
            href="/sobre-nosotros"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Contactanos
          </Button>
        </Container>
      </Container>

      <Footer />
    </>
  );
}

export default Proyecto;
