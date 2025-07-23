import MyNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <MyNavbar />
      <div style={{ paddingTop: "80px" }}>
        <h1>¡Bienvenido a Brisa Calzado!</h1>
        {/* Más contenido acá si querés */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
