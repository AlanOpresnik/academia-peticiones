import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TiendaApp from "./TiendaFake/TiendaApp";
import { BrowserRouter, Route, Routes } from "react-router";
import ProductPage from "./TiendaFake/Pages/Producto/ProductPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<TiendaApp />} />

        <Route path="/productos"> // esto es la ruta para los productos
          <Route path=":id" element={<ProductPage/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
