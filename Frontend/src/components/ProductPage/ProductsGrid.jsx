import React from "react";
import { useCart } from "../../context/CartContext";

const PLACEHOLDER = "/producto-placeholder.jpg"; // imagen local en public

function getImageSrc(url) {
  if (!url) return PLACEHOLDER;
  if (String(url).includes("example.com")) return PLACEHOLDER;
  return url;
}

export default function ProductsGrid({ productos, onView }) {
  const { addToCart } = useCart();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {productos.map((producto) => (
        <div
          key={producto.id}
          className="bg-white border-2 border-pink-100 rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:border-pink-400 transition-all"
        >
          <div className="relative overflow-hidden h-48 bg-pink-100">
            <img
              src={getImageSrc(producto.imagen)}
              alt={producto.nombre}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null; // evita bucle
                e.currentTarget.src = PLACEHOLDER;
              }}
            />
          </div>

          <div className="p-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold text-gray-800">
                {producto.nombre}
              </h3>
              <span className="text-sm font-semibold text-pink-600">
                ${producto.precio}
              </span>
            </div>

            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
              {producto.descripcion || "Sin descripción"}
            </p>

            <div className="flex items-center justify-between mt-4">
              <span className="text-xs font-semibold text-gray-500">
                {producto?.categoria?.nombre || "Sin categoría"}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => addToCart(producto)}
                  className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-3 rounded-full text-sm"
                >
                  Agregar
                </button>
                <button
                  onClick={() => onView(producto)}
                  className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all"
                >
                  Ver
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
