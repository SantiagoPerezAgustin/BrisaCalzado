import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./page/Home";
import Proyecto from "./components/Proyecto/Proyecto";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SobreNosotrosPage from "./page/SobreNosotrosPage";
import Products from "./page/Products";
import Cart from "./page/Cart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="flex flex-col min-h-screen bg-pink-lighter">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyecto/:id" element={<Proyecto />} />
            <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
