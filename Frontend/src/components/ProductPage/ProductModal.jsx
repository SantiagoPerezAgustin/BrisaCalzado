import React from "react";
import { useCart } from "../../context/CartContext";

const PLACEHOLDER = "/producto-placeholder.jpg";

function getImageSrc(url) {
  if (!url) return PLACEHOLDER;
  if (String(url).includes("example.com")) return PLACEHOLDER;
  return url;
}

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b flex items-center justify-between">
          <h2 className="text-xl font-black text-pink-800">{product.nombre}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 font-bold"
          >
            X
          </button>
        </div>

        <div className="p-5">
          <img
            src={getImageSrc(product.imagen)}
            alt={product.nombre}
            className="w-full h-56 object-cover rounded-xl bg-pink-100"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = PLACEHOLDER;
            }}
          />

          <p className="mt-4 text-gray-700">
            {product.descripcion || "Sin descripción"}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm font-semibold text-gray-600">
              Categoría:{" "}
              <span className="text-gray-900">
                {product?.categoria?.nombre || "Sin categoría"}
              </span>
            </div>
            <div className="text-lg font-black text-pink-600">
              ${product.precio}
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={handleAddToCart}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-5 py-2 rounded-lg"
            >
              Agregar al carrito
            </button>
            <button
              onClick={onClose}
              className="bg-gray-900 hover:bg-black text-white font-bold px-5 py-2 rounded-lg"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
