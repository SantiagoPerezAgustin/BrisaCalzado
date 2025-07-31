import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="fixed-top navbar-pink">
      <Container fluid>
        <Navbar.Brand href="/">BRISA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>

            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/primavera">
                Primavera-Verano
              </NavDropdown.Item>
              <NavDropdown.Item href="/otoño-invierno">
                Otoño-Invierno
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/ofertas">
                Ofertas Especiales
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/acerca" disabled>
              Acerca de
            </Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="btn-buscar">
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
