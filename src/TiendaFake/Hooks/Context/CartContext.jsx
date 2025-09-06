import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [client, setClient] = useState({});

  const addCart = (prod) => {
    setCart([...cart, prod]);
    toast.success("producto agregado al carrito");
  };

  const removeProductCart = (prod) => {
    const nuevoCarrito = cart.filter((item) => item.id !== prod.id);
    setCart(nuevoCarrito);
    toast.success("Producto eliminado");
  };


  const getTotal = () => {
    if (cart.length > 0) {
      const totalCarrito = cart.reduce((acc, prod) => {
        return acc + prod.price * 1;
      }, 0);
      setTotal(totalCarrito);
    } else {
      setTotal(0);
    }
  };

  useEffect(() => {
    getTotal();
  }, [cart]);



  return (
    <CartContext.Provider
      value={{ addCart, cart, removeProductCart, total, setClient, client }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    console.error("No funciona el contexto de carrito");
  }
  return context;
};
