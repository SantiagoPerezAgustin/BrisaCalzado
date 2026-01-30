import React from "react";
import { motion } from "framer-motion";

function HeroBanner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      className="pt-20 w-full h-screen bg-cover bg-center flex items-center justify-center text-center relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1535659513767-f1a7b068ebc1?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container max-w-2xl z-20 relative"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold text-white mb-4"
        >
          Bienvenidos a Brisa
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-100 mb-8"
        >
          Moda pensada para destacar tu estilo ✨
        </motion.p>

        <motion.a
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/products"
          className="inline-block bg-white text-pink-600 font-bold px-8 py-3 rounded-full hover:bg-pink-100 transition-all shadow-lg"
        >
          Ver productos
        </motion.a>
      </motion.div>
    </section>
  );
}

export default HeroBanner;
