import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MyNavbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Modal,
} from "react-bootstrap";
import "./Proyecto.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Proyecto() {
  const { id } = useParams();
  const [proyecto, setProyecto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    // Inicializa AOS
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
    });

    // Obtener datos del producto específico
    const fetchProyecto = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://localhost:7186/api/Producto/${id}`
        );

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setProyecto(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching proyecto:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProyecto();

    window.scrollTo(0, 0);
  }, [id]);

  // Función para abrir el modal con la imagen seleccionada
  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="pink" />
        <p className="mt-3">Cargando producto...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5 text-center">
        <h2 className="text-danger">Error al cargar el producto</h2>
        <p>{error}</p>
        <Button href="/" variant="outline-danger" className="mt-3">
          Volver al inicio
        </Button>
      </Container>
    );
  }

  if (!proyecto) {
    return (
      <Container className="py-5 text-center">
        <h2 className="text-danger">Producto no encontrado</h2>
        <Button href="/" variant="outline-danger" className="mt-3">
          Volver al inicio
        </Button>
      </Container>
    );
  }

  // Generar imágenes de galería basadas en el producto
  const galleryImages = [
    proyecto.imagen,
    `https://source.unsplash.com/random/600x800/?fashion,${
      proyecto.categoria || "clothing"
    },1`,
    `https://source.unsplash.com/random/600x800/?fashion,${
      proyecto.categoria || "clothing"
    },2`,
    `https://source.unsplash.com/random/600x800/?fashion,${
      proyecto.categoria || "clothing"
    },3`,
    `https://source.unsplash.com/random/600x800/?fashion,${
      proyecto.categoria || "clothing"
    },4`,
    `https://source.unsplash.com/random/600x800/?fashion,${
      proyecto.categoria || "clothing"
    },5`,
  ];

  return (
    <>
      <MyNavbar />

      {/* Hero Section Minimalista */}
      <Container fluid className="p-0 hero-container">
        <Row className="g-0 align-items-center hero-section">
          <Col md={6} className="p-4 p-md-5" data-aos="fade-right">
            <h1 className="display-5 fw-bold text-pink mb-3">
              {proyecto.nombre}
            </h1>
            <p className="lead" data-aos="fade-right" data-aos-delay="100">
              {proyecto.descripcion}
            </p>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0 fw-bold" style={{ color: "#e83e8c" }}>
                ${proyecto.precio?.toLocaleString() || "0"}
              </h5>
              <small className="text-muted">
                {proyecto.categoria?.nombre || proyecto.categoria}
              </small>
            </div>
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
                src={
                  proyecto.imagen ||
                  "https://via.placeholder.com/600x400?text=Producto"
                }
                alt={proyecto.nombre}
                className="hero-image img-fluid img-glow"
                onClick={() => openImageModal(proyecto.imagen)}
                style={{ cursor: "pointer" }}
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
      <Footer />
    </>
  );
}

export default Proyecto;
