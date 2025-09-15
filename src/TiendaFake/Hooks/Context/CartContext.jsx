import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });



  const [total, setTotal] = useState(0);
  const [client, setClient] = useState(() => {
    const clienteGuardado = localStorage.getItem('client');
    return clienteGuardado ? JSON.parse(clienteGuardado) : [];
  });

  const addCart = (prod) => {
    setCart([...cart, prod]);
    toast.success("producto agregado al carrito");
  };

  const removeProductCart = (prod) => {
    const nuevoCarrito = cart.filter((item) => item.id !== prod.id);
    setCart(nuevoCarrito);
    toast.success("Producto eliminado");
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('client', JSON.stringify(client))
  }, [cart,client])
  

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
      value={{ addCart, cart, removeProductCart, total, setClient, client,setCart }}
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
