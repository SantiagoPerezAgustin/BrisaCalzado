import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoBrisa from "../../assets/Image log Brisa.jpg"
import "./Navbar.css";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="fixed-top navbar-pink shadow-sm py-2">
      <Container fluid>
        <Navbar.Brand
          href="/"
          className="fw-bold text-black d-flex align-items-center gap-2"
        >
          <img src={LogoBrisa} alt="Logo Brisa" className="logo-navbar-img" />
          <span className="ms-2">BRISA</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="border-0" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 gap-2 align-items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/" className="nav-link-custom">
              Inicio
            </Nav.Link>
            <Nav.Link href="/sobre-nosotros" className="nav-link-custom">
              Contacto
            </Nav.Link>
            <NavDropdown
              title="Productos"
              id="navbarScrollingDropdown"
              className="nav-link-custom"
            >
              <NavDropdown.Item href="/primavera" className="dropdown-custom">
                Primavera-Verano
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/otoño-invierno"
                className="dropdown-custom"
              >
                Otoño-Invierno
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/ofertas" className="dropdown-custom">
                Ofertas Especiales
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/sobre-nosotros" className="nav-link-custom">
              Sobre Nosotros
            </Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2 search-navbar"
              aria-label="Search"
            />
            <Button variant="outline-success" className="btn-buscar">
              <i className="fas fa-search"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
