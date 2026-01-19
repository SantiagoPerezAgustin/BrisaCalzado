import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import {
  FaTshirt,
  FaShoePrints,
  FaUserFriends,
  FaGem,
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
  Spinner,
  Alert,
  Toast,
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
  const [error, setError] = useState(null);
  const [filtro, setFiltro] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://localhost:7186/api/Producto");

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setProductos(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching productos:", err);
      } finally {
        setLoading(false);
      }
    };

    // Cargar favoritos desde localStorage
    const favoritosGuardados =
      JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(favoritosGuardados);

    fetchProductos();
  }, []);

  // Función para manejar favoritos
  const toggleFavorito = (e, producto) => {
    e.preventDefault(); // Prevenir navegación
    e.stopPropagation(); // Detener propagación del evento

    const nuevoFavoritos = [...favoritos];
    const existeIndex = nuevoFavoritos.findIndex(
      (fav) => fav.id === producto.id
    );

    if (existeIndex >= 0) {
      // Quitar de favoritos
      nuevoFavoritos.splice(existeIndex, 1);
      setToastMessage(`"${producto.nombre}" eliminado de favoritos`);
    } else {
      // Agregar a favoritos
      nuevoFavoritos.push(producto);
      setToastMessage(`"${producto.nombre}" agregado a favoritos`);
    }

    setFavoritos(nuevoFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(nuevoFavoritos));
    setShowToast(true);
  };

  // Función para normalizar categorías
  const normalizarCategoria = (categoria) => {
    if (!categoria) return "Sin categoría";

    if (typeof categoria === "string") {
      return categoria.trim();
    }

    if (typeof categoria === "object" && categoria.nombre) {
      return categoria.nombre.trim();
    }

    return String(categoria);
  };

  // Obtener categorías únicas desde los productos
  const categoriasUnicas = [
    { id: 0, nombre: "Todos" },
    ...Array.from(
      new Map(
        productos
          .filter(
            (p) =>
              p.categoria && typeof p.categoria === "object" && p.categoria.id
          )
          .map((p) => [
            p.categoria.id,
            { id: p.categoria.id, nombre: p.categoria.nombre },
          ])
      ).values()
    ),
  ];

  // Filtrar productos según la categoría seleccionada
  const productosFiltrados =
    filtro === 0
      ? productos
      : productos.filter(
          (producto) =>
            producto.categoria &&
            typeof producto.categoria === "object" &&
            producto.categoria.id === filtro
        );

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="pink" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
        <p className="mt-3">Cargando productos...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger">
          <Alert.Heading>Error al cargar los productos</Alert.Heading>
          <p>{error}</p>
          <Button
            onClick={() => window.location.reload()}
            variant="outline-danger"
          >
            Reintentar
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      {/* Toast para notificaciones */}
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 9999,
          backgroundColor: "#d63384",
          color: "white",
        }}
      >
        <Toast.Header>
          <strong className="me-auto">Favoritos</strong>
        </Toast.Header>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
      <h2 className="text-center mb-4 fw-bold" style={{ color: "#d63384" }}>
        Nuestros Productos
      </h2>
      {/* Mostrar categorías disponibles desde la API (para debugging) */}
      {productos.length > 0 && (
        <div className="text-center mb-3">
          <small className="text-muted">
            Categorías encontradas:{" "}
            {[
              ...new Set(
                productos.map((p) => normalizarCategoria(p.categoria))
              ),
            ].join(", ")}
          </small>
        </div>
      )}
      {/* Filtros por categoría */}
      <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
        {categoriasUnicas.map((cat) => (
          <Button
            key={cat.id}
            variant={filtro === cat.id ? "pink" : "outline-pink"}
            onClick={() => setFiltro(cat.id)}
            className="d-flex align-items-center gap-2 rounded-pill px-4"
          >
            {cat.nombre}
          </Button>
        ))}
      </div>
      {/* Grid de productos */}
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((prod) => {
            const esFavorito = favoritos.some((fav) => fav.id === prod.id);

            return (
              <Col key={prod.id} data-aos="fade-up">
                <Link
                  to={`/proyecto/${prod.id}`}
                  className="text-decoration-none"
                >
                  <BootstrapCard
                    className={`h-100 custom-card ${
                      hoveredCard === prod.id ? "shadow-lg" : ""
                    }`}
                    onMouseEnter={() => setHoveredCard(prod.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      borderColor:
                        hoveredCard === prod.id ? "#ff69b4" : "#f8bbd0",
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
                          <h5
                            className="mb-0 fw-bold"
                            style={{ color: "#e83e8c" }}
                          >
                            ${prod.precio?.toLocaleString() || "0"}
                          </h5>
                          <small className="text-muted">
                            {normalizarCategoria(prod.categoria)}
                          </small>
                        </div>

                        <div className="d-flex gap-2">
                          <Button
                            variant="pink"
                            className="flex-grow-1"
                            as={Link}
                            to="/sobre-nosotros"
                            onClick={(e) => e.stopPropagation()} // Evitar navegación al card
                          >
                            Contactar
                          </Button>
                          <Button
                            variant={esFavorito ? "pink" : "outline-pink"}
                            onClick={(e) => toggleFavorito(e, prod)}
                          >
                            <FaHeart />
                          </Button>
                        </div>
                      </div>
                    </BootstrapCard.Body>
                  </BootstrapCard>
                </Link>
              </Col>
            );
          })
        ) : (
          <Col xs={12} className="text-center py-5">
            <div className="bg-light p-5 rounded">
              <h4 className="text-pink">No hay productos en esta categoría</h4>
              <p className="text-muted">
                No encontramos productos en la categoría "{filtro}".
                {filtro !== "Todos" && (
                  <Button
                    variant="link"
                    className="p-0 ms-1"
                    onClick={() => setFiltro("Todos")}
                  >
                    Ver todos los productos
                  </Button>
                )}
              </p>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ProductsGrid;
