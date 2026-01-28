import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaHeart } from "react-icons/fa";

function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 border-t-4 border-pink-500 mt-auto w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div whileHover={{ y: -5 }}>
            <h3 className="font-bold text-pink-800 mb-4 text-lg">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-700 hover:text-pink-600 transition font-semibold"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/sobre-nosotros"
                  className="text-gray-700 hover:text-pink-600 transition font-semibold"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="/sobre-nosotros"
                  className="text-gray-700 hover:text-pink-600 transition font-semibold"
                >
                  Sobre Nosotros
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ y: -5 }}>
            <h3 className="font-bold text-pink-800 mb-4 text-lg">
              Información
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-700 font-semibold">
                📞 +54 9 3415 03 9633
              </li>
              <li className="text-gray-700 font-semibold">
                📧 info@brisacalzado.com
              </li>
              <li className="text-gray-700 font-semibold">📍 Argentina</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ y: -5 }}>
            <h3 className="font-bold text-pink-800 mb-4 text-lg">Síguenos</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                href="https://wa.me/5493415039633"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 hover:text-green-500 transition"
              >
                <FaWhatsapp />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/brisacalzados.ind/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 hover:text-pink-600 transition"
              >
                <FaInstagram />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <hr className="border-pink-400 my-6" />

        <div className="text-center text-gray-700 flex items-center justify-center gap-2">
          <span className="font-semibold">
            &copy; {new Date().getFullYear()} Brisa Calzado
          </span>
          <motion.div whileHover={{ scale: 1.2 }} className="text-pink-600">
            <FaHeart />
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
