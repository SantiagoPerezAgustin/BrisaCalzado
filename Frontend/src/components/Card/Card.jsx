import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import proyectos from "../../data/Proyecto";
import "./Card.css";
import {
  FaTshirt,
  FaShoePrints,
  FaUserFriends,
  FaGem,
  FaShoppingCart,
  FaHeart,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Container,
  Row,
  Col,
  Button,
  Card as BootstrapCard,
  Badge,
} from "react-bootstrap";

// Inicializar AOS para animaciones
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
});

export const ProductsGrid = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState("Todos");
  const [hoveredCard, setHoveredCard] = useState(null);

  const categorias = [
    { nombre: "Todos", icono: <FaGem /> },
    { nombre: "Ropa", icono: <FaTshirt /> },
    { nombre: "Calzado", icono: <FaShoePrints /> },
    { nombre: "Accesorios", icono: <FaUserFriends /> },
  ];

  const proyectosFiltrados =
    filtro === "Todos"
      ? proyectos
      : proyectos.filter((proyecto) => proyecto.categoria === filtro);

  useEffect(() => {
    fetch("http://localhost:3000/api/productos")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <Container className="text-center py-5">
        <div className="spinner-border text-pink" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3">Cargando productos...</p>
      </Container>
    );

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 fw-bold" style={{ color: "#d63384" }}>
        Nuestros Productos
      </h2>

      {/* Filtros por categoría */}
      <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
        {categorias.map((cat) => (
          <Button
            key={cat.nombre}
            variant={filtro === cat.nombre ? "pink" : "outline-pink"}
            onClick={() => setFiltro(cat.nombre)}
            className="d-flex align-items-center gap-2 rounded-pill px-4"
          >
            {cat.icono}
            {cat.nombre}
          </Button>
        ))}
      </div>

      {/* Grid de productos */}
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {productos.map((prod) => (
          <Col key={prod.id} data-aos="fade-up">
            <BootstrapCard
              className={`h-100 custom-card ${
                hoveredCard === prod.id ? "shadow-lg" : ""
              }`}
              onMouseEnter={() => setHoveredCard(prod.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                borderColor: hoveredCard === prod.id ? "#ff69b4" : "#f8bbd0",
              }}
            >
              <div className="position-relative">
                <BootstrapCard.Img
                  variant="top"
                  src={
                    prod.imagen ||
                    "https://via.placeholder.com/300x200?text=Producto"
                  }
                  alt={prod.nombre}
                  className="img-fluid product-image"
                />
                <Badge
                  bg={prod.stock > 0 ? "success" : "danger"}
                  className="position-absolute top-0 end-0 m-2"
                >
                  {prod.stock > 0 ? "Disponible" : "Agotado"}
                </Badge>
              </div>

              <BootstrapCard.Body className="d-flex flex-column">
                <BootstrapCard.Title
                  className="fw-bold"
                  style={{ color: "#d63384" }}
                >
                  {prod.nombre}
                </BootstrapCard.Title>
                <BootstrapCard.Text className="text-muted mb-3">
                  {prod.descripcion}
                </BootstrapCard.Text>

                <div className="mt-auto">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0 fw-bold" style={{ color: "#e83e8c" }}>
                      ${prod.precio.toLocaleString()}
                    </h5>
                    <small className="text-muted">
                      {prod.categoria?.nombre || prod.categoriaId}
                    </small>
                  </div>

                  <div className="d-flex gap-2">
                    <Button
                      variant="pink"
                      className="flex-grow-1"
                      href="/sobre-nosotros"
                    >
                      Contactar
                    </Button>
                    <Button variant="outline-pink">
                      <FaHeart />
                    </Button>
                  </div>
                </div>
              </BootstrapCard.Body>
            </BootstrapCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsGrid;
