import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect fill='%23fce4ec' width='800' height='400'/%3E%3Ctext fill='%23ad1457' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24'%3ECarrusel %23SLIDE%3C/text%3E%3C/svg%3E";

function Carousels() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
      title: "Zapatos modernos",
      desc: "Descubrí la última moda en calzado.",
    },
    {
      img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80",
      title: "Colección primavera",
      desc: "Colores y estilos para todos los gustos.",
    },
    {
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      title: "Accesorios únicos",
      desc: "Combiná tu look con nuestros accesorios.",
    },
  ];

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, []);

  const slideSrc = (s) =>
    s.img && !s.img.includes("example.com")
      ? s.img
      : PLACEHOLDER.replace("%23SLIDE", "1");

  return (
    <section className="py-12 px-4 bg-pink-50">
      <div className="max-w-5xl mx-auto relative group">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={slides[current].img}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = PLACEHOLDER.replace(
                "%23SLIDE",
                String(current + 1),
              );
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-3xl font-bold text-white mb-2">
              {slides[current].title}
            </h3>
            <p className="text-gray-100">{slides[current].desc}</p>
          </div>
        </motion.div>

        <button
          type="button"
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg z-10 transition opacity group-hover:opacity-100 opacity-90"
          aria-label="Anterior"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg z-10 transition opacity group-hover:opacity-100 opacity-90"
          aria-label="Siguiente"
        >
          <FaChevronRight size={24} />
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current
                  ? "bg-pink-600 scale-125"
                  : "bg-pink-300 hover:bg-pink-400"
              }`}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousels;
