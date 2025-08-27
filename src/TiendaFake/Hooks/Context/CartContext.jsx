import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);


    const addCart = (prod) => {
        setCart([...cart, prod])
        toast.success('producto agregado al carrito')
    }


    return (
        <CartContext.Provider value={{addCart,cart}} >
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const context = useContext(CartContext)
    if(!context) {
        console.error('No funciona el contexto de carrito')
    }
    return context
}