import { useContext } from "react";
import { favoriteContext } from "../../../context/FavoriteProvider";
import FlowerCard from "../flowerCard/FlowerCard";

function FavoriteCards() {
  const { favorite } = useContext(favoriteContext);

  return (
    <div className="flex flex-col items-center container px-12 pb-20 gap-12">
      {favorite.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 ">
          {favorite.map((item) => (
            <FlowerCard flower={item} key={item.id} />
          ))}
        </div>
      ) : (
        <p className="text-4xl">You have no item in your favorites</p>
      )}
    </div>
  );
}

export default FavoriteCards;
