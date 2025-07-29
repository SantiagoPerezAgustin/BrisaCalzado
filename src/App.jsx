import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Proyecto from "./page/Proyecto";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyecto/:id" element={<Proyecto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
