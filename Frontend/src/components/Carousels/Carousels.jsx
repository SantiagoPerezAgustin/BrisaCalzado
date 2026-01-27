import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Carousels() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      title: "Zapatos modernos",
      desc: "Descubrí la última moda en calzado.",
    },
    {
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      title: "Colección primavera",
      desc: "Colores y estilos para todos los gustos.",
    },
    {
      img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      title: "Accesorios únicos",
      desc: "Combiná tu look con nuestros accesorios.",
    },
  ];

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <section className="py-12 px-4 bg-pink-50">
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={slides[current].img}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-3xl font-bold text-white mb-2">
              {slides[current].title}
            </h3>
            <p className="text-gray-100">{slides[current].desc}</p>
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg z-10"
        >
          <FaChevronLeft size={24} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg z-10"
        >
          <FaChevronRight size={24} />
        </motion.button>

        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <motion.button
              key={i}
              animate={{
                backgroundColor: i === current ? "#ff69b4" : "#f48fb1",
                scale: i === current ? 1.2 : 1,
              }}
              onClick={() => setCurrent(i)}
              className="w-3 h-3 rounded-full transition-all"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousels;
