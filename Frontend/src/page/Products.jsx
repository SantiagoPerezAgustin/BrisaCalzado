// src/page/Products.jsx
import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://localhost:7186/api/Producto");
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message || "No se pudo cargar productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return <div className="p-8 text-center">Cargando productos...</div>;
  if (error)
    return <div className="p-8 text-center text-red-600">Error: {error}</div>;

  return (
    <div className="p-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <article
          key={p.id}
          className="rounded-lg shadow bg-white p-4 border border-gray-100"
        >
          <h3 className="text-lg font-semibold mb-2">{p.nombre ?? p.name}</h3>
          <p className="text-sm text-gray-600 mb-2">
            {p.descripcion ?? p.description ?? "Sin descripción"}
          </p>
          <p className="text-base font-bold text-pink-600">
            {(p.precio ?? p.price) ? `$${p.precio ?? p.price}` : "Consultar"}
          </p>
        </article>
      ))}
    </div>
  );
}

export default Products;
