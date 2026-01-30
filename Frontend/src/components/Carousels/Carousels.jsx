import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect fill='%23fce4ec' width='800' height='400'/%3E%3Ctext fill='%23ad1457' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24'%3ECarrusel%3C/text%3E%3C/svg%3E";

function Carousels() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      img: "https://plus.unsplash.com/premium_photo-1744312220342-14fb1ce80d51?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Zapatos modernos",
      desc: "Descubrí la última moda en calzado.",
    },
    {
      img: "https://images.unsplash.com/photo-1643825664857-7e6e4124f289?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Colección primavera",
      desc: "Colores y estilos para todos los gustos.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1744312220280-c470c8692ee5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Accesorios únicos",
      desc: "Combiná tu look con nuestros accesorios.",
    },
  ];

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-800 mb-10">
          Destacados
        </h2>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-200/80 bg-white">
          <div className="aspect-[21/9] min-h-[280px] md:min-h-[380px] relative">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img
                  src={slides[current].img}
                  alt={slides[current].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = PLACEHOLDER;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10">
                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg"
                  >
                    {slides[current].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-gray-100 text-sm md:text-lg max-w-xl"
                  >
                    {slides[current].desc}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={prev}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/95 hover:bg-white text-pink-600 shadow-xl flex items-center justify-center z-10 transition-all hover:scale-110 active:scale-95"
            aria-label="Anterior"
          >
            <FaChevronLeft size={22} className="md:w-6 md:h-6" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/95 hover:bg-white text-pink-600 shadow-xl flex items-center justify-center z-10 transition-all hover:scale-110 active:scale-95"
            aria-label="Siguiente"
          >
            <FaChevronRight size={22} className="md:w-6 md:h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-white"
                    : "w-2 bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Ir a slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousels;
