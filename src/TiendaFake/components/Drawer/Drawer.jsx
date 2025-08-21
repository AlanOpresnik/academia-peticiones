import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useFavoritesContext } from "../../Hooks/Context/FavoritesContext";
import FavoriteCard from "./FavoriteCard/FavoriteCard";

export default function FavoritesDrawer() {
  const [open, setOpen] = useState(false);


  const { favorites } = useFavoritesContext();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  
  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation">
      <div className="p-4">
        <p className="text-xl">Mis favoritos </p>
        <div>
          {favorites && favorites.length > 0 ? (
            favorites.map((fav) => (
              <div key={fav.id}>
                <FavoriteCard fav={fav} />
              </div>
            ))
          ) : (
            <div>
              <p>NO HAY FAVORITOS </p>
            </div>
          )}
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <Button
        sx={{ color: "white", fontWeight: "bold" }}
        onClick={toggleDrawer(true)}
      >
        Favoritos
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
