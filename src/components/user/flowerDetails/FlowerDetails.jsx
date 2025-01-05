import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import { useContext, useEffect } from "react";
import { favoriteContext } from "../../../context/FavoriteProvider";
import { basketContext } from "../../../context/BasketProvider";

function FlowerDetails({ flower }) {
  const { handleAddFavorite, favorite } = useContext(favoriteContext);
  const { handleAddBasket } = useContext(basketContext);

  function handleFavorite(e) {
    e.stopPropagation();
    handleAddFavorite(flower.id);
  }

  function handleBasket(e) {
    e.stopPropagation();
    handleAddBasket(flower.id);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative group container px-12 py-12">
      <div className="flex items-center flex-wrap gap-20 p-2 border">
        <div className="overflow-hidden relative w-full lg:max-w-sm lg:w-4/12 px-10 border ">
          <img src={`${flower.img}`} alt="" className="w-full" />
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
        <div className="content flex flex-col w-full lg:w-6/12 items-center gap-5">
          <p className="text-xl">
            <span className="text-rose-500 font-bold">Type:</span> {flower.type}
          </p>
          <p className="text-xl text-center">
            <span className="text-rose-500 font-bold">Descripion:</span>{" "}
            {flower.description}
          </p>
          <p className="text-xl font-bold text-center">${flower.price}</p>
        </div>
        <div
          className={`absolute bg-black top-12 left-12  max-h-8 text-white ${
            flower.new ? "p-1" : ""
          }`}
        >
          {flower.new ? "NEW" : ""}
        </div>
        <div
          className={`absolute bg-black top-12 left-12  max-h-8 text-white ${
            flower.outOfStock ? "p-1" : ""
          }`}
        >
          {flower.outOfStock ? "OUT OF STOCK" : ""}
        </div>
      </div>
    </div>
  );
}

export default FlowerDetails;
