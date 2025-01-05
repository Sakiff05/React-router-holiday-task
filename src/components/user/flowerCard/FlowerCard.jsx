import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { favoriteContext } from "../../../context/FavoriteProvider";
import { basketContext } from "../../../context/BasketProvider";
import Swal from "sweetalert2";

function FlowerCard({ flower }) {
  const navigate = useNavigate();
  const { handleAddFavorite, favorite } = useContext(favoriteContext);
  const { handleAddBasket } = useContext(basketContext);
  function handleFavorite(e) {
    e.stopPropagation();
    handleAddFavorite(flower.id);
  }

  function handleBasket(e) {
    e.stopPropagation();
    if (flower.outOfStock) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Unfortunately we are out of stock",
      });
    } else {
      handleAddBasket(flower.id);
    }
  }

  return (
    <div
      className="relative group cursor-pointer "
      onClick={() => navigate(`${flower.id}`)}
    >
      <div className="overflow-hidden relative ">
        <div className="h-[600px] md:h-[400px] w-full overflow-hidden">
          <img
            src={`${flower.img}`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-black/80 p-2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <IconButton onClick={(e) => handleFavorite(e)}>
            {favorite.find((item) => item.id == flower.id) ? (
              <FavoriteIcon className="text-red-500" fontSize="large" />
            ) : (
              <FavoriteBorderIcon className="text-red-500" fontSize="large" />
            )}
          </IconButton>
          <IconButton onClick={(e) => handleBasket(e)}>
            <AddShoppingCartIcon className="text-blue-500" fontSize="large" />
          </IconButton>
        </div>
      </div>
      <h1 className="text-3xl text-center">{flower.title}</h1>
      <p className="text-xl font-bold text-center">${flower.price}</p>
      <div
        className={`absolute bg-black top-5 left-5  max-h-8 text-white ${
          flower.new ? "p-1" : ""
        }`}
      >
        {flower.new ? "NEW" : ""}
      </div>
      <div
        className={`absolute bg-black top-5 left-5  max-h-8 text-white ${
          flower.outOfStock ? "p-1" : ""
        }`}
      >
        {flower.outOfStock ? "OUT OF STOCK" : ""}
      </div>
    </div>
  );
}

export default FlowerCard;
