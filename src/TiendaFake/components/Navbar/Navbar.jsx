import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FavoritesDrawer from "../Drawer/Drawer";
import { Link } from "react-router";
import { ShoppingBag } from "lucide-react";
import { useCartContext } from "../../Hooks/Context/CartContext";

export default function Navbar() {
  const {cart} = useCartContext();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="!bg-gray-500" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <div className="relative mr-6">
            <Link to={"/cart"}>
              <ShoppingBag />
            </Link>
            <div className="absolute top-[-7px] text-sm right-[-7px] h-[20px] w-[20px] bg-white text-black font-bold rounded-full text-center flex items-center justify-center">
              {cart.length}
            </div>
          </div>
          <FavoritesDrawer />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
