import React from "react";
import MyNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SobreNosotros from "../components/SobreNosotros/SobreNosotros";
import Contacto from "../components/Contacto/Contacto";

function SobreNosotrosPage() {
  return (
    <>
      <MyNavbar />
      <SobreNosotros />
      <Contacto />
      <Footer />
    </>
  );
}

export default SobreNosotrosPage;
