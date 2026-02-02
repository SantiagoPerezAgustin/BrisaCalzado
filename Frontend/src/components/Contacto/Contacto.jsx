import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaPaperPlane } from "react-icons/fa";

function Contacto() {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(255, 105, 180, 0.3)" },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-16 px-4 bg-gradient-to-r from-pink-100 to-pink-50 text-center"
      id="contacto"
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-pink-800 mb-4"
        >
          ¿Querés hablar con nosotras?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 mb-8"
        >
          ¡Mandanos un mensaje directo! 💬
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.a
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            href="https://wa.me/5493415039633?text=¡Hola!%20Quiero%20hacer%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition"
          >
            <FaWhatsapp size={24} /> WhatsApp
          </motion.a>
          <motion.a
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            href="https://www.instagram.com/brisacalzados.ind/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition"
          >
            <FaInstagram size={24} /> Instagram
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contacto;
