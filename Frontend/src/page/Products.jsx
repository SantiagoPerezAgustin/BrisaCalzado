import React, { useState } from "react";
import MyNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import { useProducts } from "../components/ProductPage/useProducts";
import ProductsToolbar from "../components/ProductPage/ProductsToolbar";
import ProductsGrid from "../components/ProductPage/ProductsGrid";
import ProductModal from "../components/ProductPage/ProductModal";

export default function Products() {
  const {
    productosFiltrados,
    categorias,
    categoria,
    setCategoria,
    searchQuery,
    setSearchQuery,
    loading,
    error,
  } = useProducts();

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <MyNavbar />

      <main className="pt-24 min-h-screen bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <ProductsToolbar
            categorias={categorias}
            categoria={categoria}
            onChangeCategoria={setCategoria}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
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

          {!loading && !error && productosFiltrados.length === 0 && (
            <div className="py-20 text-center text-gray-700 font-semibold">
              No hay productos para esa categoría o búsqueda.
            </div>
          )}

          {!loading && !error && productosFiltrados.length > 0 && (
            <ProductsGrid
              productos={productosFiltrados}
              onView={(p) => setSelectedProduct(p)}
            />
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
