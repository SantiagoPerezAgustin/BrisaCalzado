import React from "react";
import { FaSearch } from "react-icons/fa";

export default function ProductsToolbar({
  categorias,
  categoria,
  onChangeCategoria,
  searchQuery,
  onSearchChange,
}) {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-pink-800">Productos</h1>
          <p className="text-gray-600 mt-1">
            Explorá la colección y filtrá por categoría.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-sm font-semibold text-gray-700">
            Categoría
          </label>
          <select
            value={categoria}
            onChange={(e) => onChangeCategoria(e.target.value)}
            className="bg-white border-2 border-pink-200 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-500"
          >
            {categorias.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Buscador solo en esta página */}
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
    </div>
  );
}
