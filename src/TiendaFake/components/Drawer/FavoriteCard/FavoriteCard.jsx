import { Trash } from "lucide-react";
import React from "react";
import { useFavoritesContext } from "../../../Hooks/Context/FavoritesContext";

export default function FavoriteCard({fav}) {
    const {removeFavorite} = useFavoritesContext()
  return (
    <div className="flex gap-4 mb-4 border-b pb-4 items-center">
      <div>
        <img src={fav.image} alt={fav.title} width={80} height={80} />
      </div>
      <div>
        <p>{fav.title}</p>
      </div>
      <button onClick={() => removeFavorite(fav)}>
        <Trash/>
      </button>
    </div>
  );
}
