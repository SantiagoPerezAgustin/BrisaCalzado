import { useEffect, useMemo, useState } from "react";

const API_URL = "https://localhost:7186/api/Producto";

export function useProducts() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [searchQuery, setSearchQuery] = useState("");

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
    let list = productos;
    if (categoria !== "Todas") {
      list = list.filter((p) => p?.categoria?.nombre === categoria);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter(
        (p) =>
          (p?.nombre ?? "").toLowerCase().includes(q) ||
          (p?.descripcion ?? "").toLowerCase().includes(q) ||
          (p?.categoria?.nombre ?? "").toLowerCase().includes(q),
      );
    }
    return list;
  }, [productos, categoria, searchQuery]);

  return {
    productos,
    productosFiltrados,
    categorias,
    categoria,
    setCategoria,
    searchQuery,
    setSearchQuery,
    loading,
    error,
  };
}
