import React from "react";
import { Link } from "react-router-dom";
import MyNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useCart } from "../context/CartContext";

const PLACEHOLDER = "/producto-placeholder.jpg";

function getImageSrc(url) {
  if (!url) return PLACEHOLDER;
  if (String(url).includes("example.com")) return PLACEHOLDER;
  return url;
}

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } =
    useCart();

  if (items.length === 0) {
    return (
      <>
        <MyNavbar />
        <main className="pt-24 min-h-screen bg-pink-50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-gray-700 font-semibold mb-4">
              Tu carrito está vacío
            </p>
            <Link
              to="/products"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full"
            >
              Ver productos
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <MyNavbar />
      <main className="pt-24 min-h-screen bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold text-pink-800 mb-8">
            Carrito ({totalItems} {totalItems === 1 ? "producto" : "productos"})
          </h1>

          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white border-2 border-pink-100 rounded-xl p-4 flex flex-wrap items-center gap-4"
              >
                <img
                  src={getImageSrc(item.imagen)}
                  alt={item.nombre}
                  className="w-20 h-20 object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = PLACEHOLDER;
                  }}
                />
                <div className="flex-1 min-w-[140px]">
                  <h3 className="font-bold text-gray-800">{item.nombre}</h3>
                  <p className="text-pink-600 font-semibold">${item.precio}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                    className="w-8 h-8 rounded-full bg-pink-200 hover:bg-pink-300 font-bold"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-semibold">
                    {item.cantidad}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                    className="w-8 h-8 rounded-full bg-pink-200 hover:bg-pink-300 font-bold"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 font-semibold text-sm"
                >
                  Quitar
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-white border-2 border-pink-200 rounded-xl">
            <p className="text-xl font-bold text-gray-800">
              Total:{" "}
              <span className="text-pink-600">${totalPrice.toFixed(2)}</span>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
