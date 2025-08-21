import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (prod) => {
    localStorage.setItem("favorites", JSON.stringify([...favorites, prod]));

    setFavorites(JSON.parse(localStorage.getItem("favorites")));

    toast.success(`Producto: ${prod.title} Agregado a favoritos`);

    console.log(favorites);
  };

  useEffect(() => {

    const almacenado = localStorage.getItem("favorites")
    if (almacenado) {
      setFavorites(JSON.parse(almacenado));
    }

  }, []);


  const removeFavorite = (prod) => {
    const favoritesAlmacenados = favorites;

    const favoritosFiltrados = favoritesAlmacenados.filter((item) => item.id !== prod.id);

    setFavorites(favoritosFiltrados)

    localStorage.setItem('favorites', JSON.stringify(favoritosFiltrados))
    
    toast.success("Producto eliminado de favoritos");
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    console.log("Algo fallo en el contexto");
  }
  return context;
};
