import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TiendaApp from "./TiendaFake/TiendaApp";
import { BrowserRouter, Route, Routes } from "react-router";
import ProductPage from "./TiendaFake/Pages/Producto/ProductPage";
import { ProductProvider } from "./TiendaFake/Hooks/Context/ProductContext";
import AdminPage from "./TiendaFake/Pages/Admin/AdminPage";
import { FavoritesProvider } from "./TiendaFake/Hooks/Context/FavoritesContext";
import { Toaster } from "react-hot-toast";
import CartPage from "./TiendaFake/Pages/Cart/CartPage";
import { CartProvider } from "./TiendaFake/Hooks/Context/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <FavoritesProvider>
        <CartProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              <Route index path="/" element={<TiendaApp />} />

              <Route path="/productos">
                <Route path=":id" element={<ProductPage />} />
              </Route>

              <Route path="/cart" element={<CartPage />} />

              <Route path="/admin/products" element={<AdminPage />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </FavoritesProvider>
    </ProductProvider>
  </StrictMode>
);
