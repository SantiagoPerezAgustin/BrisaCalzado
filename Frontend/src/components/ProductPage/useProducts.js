import { useEffect, useMemo, useState } from "react";

const API_URL = "https://localhost:7186/api/Producto";

const ORDENAR_OPCIONES = {
  nombreAsc: {
    label: "Nombre A-Z",
    fn: (a, b) => (a?.nombre ?? "").localeCompare(b?.nombre ?? ""),
  },
  nombreDesc: {
    label: "Nombre Z-A",
    fn: (a, b) => (b?.nombre ?? "").localeCompare(a?.nombre ?? ""),
  },
  precioAsc: {
    label: "Precio menor a mayor",
    fn: (a, b) => (a?.precio ?? 0) - (b?.precio ?? 0),
  },
  precioDesc: {
    label: "Precio mayor a menor",
    fn: (a, b) => (b?.precio ?? 0) - (a?.precio ?? 0),
  },
};

export function useProducts() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState(null); // null = ver todas las secciones
  const [searchQuery, setSearchQuery] = useState("");
  const [ordenarPor, setOrdenarPor] = useState("nombreAsc");

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
    return Array.from(new Set(names)).sort();
  }, [productos]);

  const ordenarLista = (list) => {
    const opcion = ORDENAR_OPCIONES[ordenarPor];
    if (!opcion) return list;
    return [...list].sort(opcion.fn);
  };

  const productosPorCategoria = useMemo(() => {
    const filtroBusqueda = (p) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.trim().toLowerCase();
      return (
        (p?.nombre ?? "").toLowerCase().includes(q) ||
        (p?.descripcion ?? "").toLowerCase().includes(q) ||
        (p?.categoria?.nombre ?? "").toLowerCase().includes(q)
      );
    };

    const agrupados = {};
    productos.filter(filtroBusqueda).forEach((p) => {
      const cat = p?.categoria?.nombre || "Sin categoría";
      if (!agrupados[cat]) agrupados[cat] = [];
      agrupados[cat].push(p);
    });

    Object.keys(agrupados).forEach((cat) => {
      agrupados[cat] = ordenarLista(agrupados[cat]);
    });

    return agrupados;
  }, [productos, searchQuery, ordenarPor]);

  const categoriasConProductos = useMemo(() => {
    return Object.keys(productosPorCategoria)
      .filter((c) => c !== "Sin categoría")
      .sort();
  }, [productosPorCategoria]);

  return {
    productos,
    productosPorCategoria,
    categorias,
    categoriasConProductos,
    categoriaActiva,
    setCategoriaActiva,
    searchQuery,
    setSearchQuery,
    ordenarPor,
    setOrdenarPor,
    ordenarOpciones: ORDENAR_OPCIONES,
    loading,
    error,
  };
}
