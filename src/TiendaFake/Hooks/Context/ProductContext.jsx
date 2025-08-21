import { createContext, useEffect, useState } from "react";

// Creamos el contexto
export const ProductContext = createContext();

// Creamos el proveedor

export const ProductProvider = ({ children }) => {

     const [products, setProducts] = useState([]);
      const api = "https://fakestoreapi.com/products";
    
      useEffect(() => {
        const obtenerProductos = async () => {
          const res = await fetch(`${api}`, {
            method: "GET",
          }).then((res) => res.json());
    
          if (!res) {
            console.log("NO HUBO RESPUESTA");
            return;
          }
          setProducts(res);
        };
        obtenerProductos();
      }, []);

  
  return (
    <ProductContext.Provider
      value={{
       products
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
