import React from "react";

export default function ProductsToolbar({
  categorias,
  categoria,
  onChangeCategoria,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-4xl font-bold text-pink-800">Productos</h1>
        <p className="text-gray-600 mt-1">
          Explorá la colección y filtrá por categoría.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <label className="text-sm font-semibold text-gray-700">Categoría</label>
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
  );
}
