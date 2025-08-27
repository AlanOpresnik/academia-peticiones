import { Heart } from "lucide-react";
import { useFavoritesContext } from "../../Hooks/Context/FavoritesContext";
import { useCartContext } from "../../Hooks/Context/CartContext";

export default function ProductCard({ prod }) {
  const { addFavorite, favorites } = useFavoritesContext();
  const { addCart } = useCartContext();

  const isFavorite = favorites.some((fav) => fav.id === prod.id);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="group relative">
          <a href={`/productos/${prod.id}`} className="relative">
            <img
              alt={prod.title}
              src={prod.image}
              className="aspect-square w-full object-contain rounded-md  group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 ">
              <div>
                <h3 className="font-semibold text-gray-700">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {prod.title}
                </h3>
                <p className="mt-1 text-sm line-clamp-2 text-gray-500">
                  {prod.description}
                </p>
              </div>
              <p className="text-xl mt-4 font-medium text-gray-900">
                ${prod.price}
              </p>
            </div>
          </a>
          <div className="flex items-center gap-4 mt-4">
            <div className="">
              <button
                onClick={() => addCart(prod)}
                className="p-3 bg-indigo-600 text-white rounded-xl cursor-pointer"
              >
                Agregar al carrito
              </button>
            </div>
            <div>
              <button
                onClick={() => addFavorite(prod)}
                className={`p-2 rounded-full cursor-pointer transition-colors 
    ${isFavorite ? "bg-red-500 text-white" : "bg-gray-400 text-black"}`}
              >
                <Heart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
