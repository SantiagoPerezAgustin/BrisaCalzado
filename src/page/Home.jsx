import React from "react";
import MyNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import Carousels from "../components/Carousels/Carousels";

function Home() {
  return (
    <>
      <MyNavbar />
      <Card />
      <Carousels />
      <Footer />
    </>
  );
}

export default Home;
