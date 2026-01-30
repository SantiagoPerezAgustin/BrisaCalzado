import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaHeart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import LogoBrisa from "../../assets/image transparente.jpg";

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.4 },
    }),
  };

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/products" },
    { label: "Sobre Nosotros", href: "/sobre-nosotros" },
    { label: "Contacto", href: "/#contacto" }, // o "/contacto",
  ];

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed top-0 w-full z-50 bg-gradient-to-r from-pink-100 via-pink-50 to-white shadow-lg border-b-4 border-pink-500 py-3"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="/"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative">
              <motion.div className="rounded-xl bg-white p-1.5 shadow-lg group-hover:shadow-xl transition-shadow">
                <img
                  src={LogoBrisa}
                  alt="Logo Brisa"
                  className="h-10 w-auto object-contain"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col"
            >
              <span className="font-black text-lg text-pink-700">BRISA</span>
              <span className="text-xs text-pink-500 font-semibold">Calzado</span>
            </motion.div>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                href={link.href}
                className="text-gray-700 font-bold px-4 py-2 rounded-full transition-all relative group"
              >
                <span className="relative z-10">{link.label}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 group-hover:w-full transition-all"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              height: "auto",
              transition: { duration: 0.3 },
            },
            closed: {
              opacity: 0,
              height: 0,
              transition: { duration: 0.3 },
            },
          }}
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-sm"
        >
          <motion.div
            className="flex flex-col gap-2 pt-4 pb-4 px-2"
            variants={{
              open: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                variants={{
                  closed: { opacity: 0, x: -10 },
                  open: { opacity: 1, x: 0 },
                }}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 font-bold px-4 py-3 rounded-lg hover:bg-pink-100 transition-all text-center"
              >
                {link.label}
              </motion.a>
            ))}

            {/* Mobile Search */}
            <motion.div
              variants={{
                closed: { opacity: 0, x: -10 },
                open: { opacity: 1, x: 0 },
              }}
              className="flex items-center gap-2 bg-pink-100 rounded-lg px-4 py-2 mt-2 border-2 border-pink-300"
            >
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none flex-1 text-sm"
              />
              <FaSearch className="text-pink-600" />
            </motion.div>

            {/* Mobile Icons */}
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default MyNavbar;