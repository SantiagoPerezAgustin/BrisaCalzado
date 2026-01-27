import React from "react";
import MyNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import Carousels from "../components/Carousels/Carousels";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import BenefitsBuying from "../components/Sections/BenefitsBuying";
import Contacto from "../components/Contacto/Contacto";

function Home() {
  return (
    <>
      <MyNavbar />
      <HeroBanner />
      <Card />
      <Carousels />
      <BenefitsBuying />
      <Footer />
    </>
  );
}

export default Home;
