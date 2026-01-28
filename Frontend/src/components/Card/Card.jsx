import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export const ProductsGrid = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        // Cambia a tu URL del backend .NET
        const response = await fetch("http://localhost:5165/api/Producto");

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setProductos(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching productos:", err);
      } finally {
        setLoading(false);
      }
    };

    const favoritosGuardados =
      JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(favoritosGuardados);

    fetchProductos();
  }, []);

  const toggleFavorito = (e, producto) => {
    e.preventDefault();
    e.stopPropagation();

    const nuevoFavoritos = [...favoritos];
    const existeIndex = nuevoFavoritos.findIndex(
      (fav) => fav.id === producto.id,
    );

    if (existeIndex >= 0) {
      nuevoFavoritos.splice(existeIndex, 1);
      setToastMessage(`"${producto.nombre}" eliminado de favoritos`);
    } else {
      nuevoFavoritos.push(producto);
      setToastMessage(`"${producto.nombre}" agregado a favoritos`);
    }

    setFavoritos(nuevoFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(nuevoFavoritos));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 bg-pink-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-pink-300 border-t-pink-600 rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center bg-pink-50">
        <p className="text-red-500 font-semibold text-lg">Error: {error}</p>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 bg-pink-50" id="productos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-pink-800 mb-12"
        >
          Nuestros Productos
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {productos.map((producto) => (
            <motion.div
              key={producto.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white border-2 border-pink-100 rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:border-pink-400 transition-all"
            >
              <div className="relative overflow-hidden h-48 bg-pink-100">
                <img
                  src={
                    producto.imagen ||
                    "https://via.placeholder.com/300x200?text=Producto"
                  }
                  alt={producto.nombre}
                  className="w-full h-full object-cover"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => toggleFavorito(e, producto)}
                  className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg hover:bg-pink-50"
                >
                  {favoritos.some((fav) => fav.id === producto.id) ? (
                    <FaHeart className="text-pink-500" size={20} />
                  ) : (
                    <FaRegHeart className="text-pink-500" size={20} />
                  )}
                </motion.button>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {producto.nombre}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {producto.descripcion || "Sin descripción"}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-pink-600">
                    ${producto.precio}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all"
                  >
                    Ver
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {productos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 text-lg">
              No hay productos disponibles
            </p>
          </motion.div>
        )}
      </div>

      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-pink-500 text-white px-6 py-3 rounded-lg shadow-lg"
        >
          {toastMessage}
        </motion.div>
      )}
    </section>
  );
};

function Card() {
  return <ProductsGrid />;
}

export default Card;
