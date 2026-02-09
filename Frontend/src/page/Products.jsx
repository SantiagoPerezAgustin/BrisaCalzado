import React, { useState } from "react";
import MyNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import { useProducts } from "../components/ProductPage/useProducts";
import ProductsToolbar from "../components/ProductPage/ProductsToolbar";
import ProductsGrid from "../components/ProductPage/ProductsGrid";
import ProductModal from "../components/ProductPage/ProductModal";

export default function Products() {
  const {
    productosPorCategoria,
    categoriasConProductos,
    categoriaActiva,
    setCategoriaActiva,
    searchQuery,
    setSearchQuery,
    ordenarPor,
    setOrdenarPor,
    ordenarOpciones,
    loading,
    error,
  } = useProducts();

  const [selectedProduct, setSelectedProduct] = useState(null);

  const seccionesAVisualizar = categoriaActiva
    ? [categoriaActiva]
    : categoriasConProductos;

  return (
    <>
      <MyNavbar />

      <main className="pt-24 min-h-screen bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <ProductsToolbar
            categoriasConProductos={categoriasConProductos}
            categoriaActiva={categoriaActiva}
            onCategoriaClick={setCategoriaActiva}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            ordenarPor={ordenarPor}
            onOrdenarChange={setOrdenarPor}
            ordenarOpciones={ordenarOpciones}
          />

          {loading && (
            <div className="py-20 text-center text-gray-700 font-semibold">
              Cargando productos...
            </div>
          )}

          {error && (
            <div className="py-20 text-center text-red-600 font-semibold">
              Error: {error}
            </div>
          )}

          {!loading && !error && (
            <div className="space-y-16">
              {seccionesAVisualizar.map((nombreCategoria) => {
                const productos = productosPorCategoria[nombreCategoria] || [];
                if (productos.length === 0) return null;

                const idSeccion = `seccion-${nombreCategoria.replace(/\s+/g, "-")}`;

                return (
                  <section
                    key={nombreCategoria}
                    id={idSeccion}
                    className="scroll-mt-28"
                  >
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-pink-800 border-b-2 border-pink-200 pb-2 inline-block">
                        {nombreCategoria}
                      </h2>
                      <p className="text-gray-600 mt-1 text-sm">
                        {productos.length} producto
                        {productos.length !== 1 ? "s" : ""} en esta categoría
                      </p>
                    </div>
                    <ProductsGrid
                      productos={productos}
                      onView={(p) => setSelectedProduct(p)}
                    />
                  </section>
                );
              })}

              {seccionesAVisualizar.length === 0 && (
                <div className="py-20 text-center text-gray-700 font-semibold">
                  No hay productos para esa búsqueda.
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
