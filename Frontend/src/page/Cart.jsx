import React from "react";
import { Link } from "react-router-dom";
import MyNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useCart } from "../context/CartContext";

const PLACEHOLDER = "/producto-placeholder.jpg";

const WHATSAPP_NUMBER = "5493415039633";

function getImageSrc(url) {
  if (!url) return PLACEHOLDER;
  if (String(url).includes("example.com")) return PLACEHOLDER;
  return url;
}

export default function Cart() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalPrice,
    totalItems,
    clearCart,
  } = useCart();

    function buildWhatsAppMessage(items, totalPrice) {
      const lineas = [
        "Hola! Quiero hacer un pedido en *Brisa Calzado*",
        "",
        "*Resumen del carrito:*",
        ...items.map(
          (i) =>
            `• ${i.nombre} x${i.cantidad} — $${(i.precio * i.cantidad).toFixed(2)}`,
        ),
        "",
        `*Total: $${totalPrice.toFixed(2)}*`,
        "",
        "Gracias!",
      ];
      return lineas.join("\n");
    }

    function openWhatsApp(number, text) {
      const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    }

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

          <div className="mt-8 p-4 bg-white border-2 border-pink-200 rounded-xl space-y-4">
            <p className="text-xl font-bold text-gray-800">
              Total:{" "}
              <span className="text-pink-600">${totalPrice.toFixed(2)}</span>
            </p>
            <button
              onClick={() => {
                const mensaje = buildWhatsAppMessage(items, totalPrice);
                openWhatsApp(WHATSAPP_NUMBER, mensaje);
                clearCart(); // vacía el carrito después de enviar
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2"
            >
              <span>Enviar pedido por WhatsApp</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
