import { useEffect, useMemo, useState } from "react";

const API_URL = "https://localhost:7186/api/Producto";

export function useProducts() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [categoria, setCategoria] = useState("Todas");

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Error ${res.status}`);

        const data = await res.json();
        setProductos(Array.isArray(data) ? data : []);
      } catch (e) {
        setError(e?.message || "Error cargando productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  const categorias = useMemo(() => {
    const names = productos.map((p) => p?.categoria?.nombre).filter(Boolean);
    return ["Todas", ...Array.from(new Set(names)).sort()];
  }, [productos]);

  const productosFiltrados = useMemo(() => {
    if (categoria === "Todas") return productos;
    return productos.filter((p) => p?.categoria?.nombre === categoria);
  }, [productos, categoria]);

  return {
    productos,
    productosFiltrados,
    categorias,
    categoria,
    setCategoria,
    loading,
    error,
  };
}
