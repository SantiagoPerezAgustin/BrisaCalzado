import React from 'react';
import Home from './page/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'; // Asegúrate de tener este archivo para estilos globales

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Home />
    </div>
  );
}

export default App
