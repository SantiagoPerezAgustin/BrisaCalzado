import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Proyecto from "./components/Proyecto/Proyecto";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SobreNosotrosPage from "./page/SobreNosotrosPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-pink-lighter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyecto/:id" element={<Proyecto />} />
          <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
