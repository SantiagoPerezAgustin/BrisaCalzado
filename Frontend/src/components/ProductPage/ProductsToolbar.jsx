import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export default function ProductsToolbar({
  categoriasConProductos,
  categoriaActiva,
  onCategoriaClick,
  searchQuery,
  onSearchChange,
  ordenarPor,
  onOrdenarChange,
  ordenarOpciones,
}) {
  useEffect(() => {
    if (categoriaActiva) {
      const el = document.getElementById(
        `seccion-${categoriaActiva.replace(/\s+/g, "-")}`,
      );
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [categoriaActiva]);

  return (
    <div className="flex flex-col gap-6 mb-10">
      <div>
        <h1 className="text-4xl font-bold text-pink-800">Productos</h1>
        <p className="text-gray-600 mt-1">
          Explorá por categoría. Cada sección tiene su propio tipo de productos.
        </p>
      </div>

      {/* Navegación por categorías - cada "lugar" */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoriaClick(null)}
          className={`px-5 py-2.5 rounded-xl font-semibold transition-all ${
            !categoriaActiva
              ? "bg-pink-500 text-white shadow-md"
              : "bg-white border-2 border-pink-200 text-gray-700 hover:border-pink-400"
          }`}
        >
          Ver todas
        </button>
        {categoriasConProductos.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoriaClick(cat)}
            className={`px-5 py-2.5 rounded-xl font-semibold transition-all ${
              categoriaActiva === cat
                ? "bg-pink-500 text-white shadow-md"
                : "bg-white border-2 border-pink-200 text-gray-700 hover:border-pink-400 hover:border-pink-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-center gap-2 bg-white/90 rounded-xl px-4 py-2 border-2 border-pink-200 focus-within:border-pink-500 transition-colors max-w-md">
          <FaSearch className="text-pink-500 shrink-0" size={18} />
          <input
            type="text"
            placeholder="Buscar por nombre, descripción o categoría..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none w-full py-1 text-sm"
          />
        </div>

        {ordenarOpciones && (
          <div className="flex items-center gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Ordenar:
            </label>
            <select
              value={ordenarPor}
              onChange={(e) => onOrdenarChange(e.target.value)}
              className="bg-white border-2 border-pink-200 rounded-lg px-3 py-2 focus:outline-none focus:border-pink-500 text-sm"
            >
              {Object.entries(ordenarOpciones).map(([key, opt]) => (
                <option key={key} value={key}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
