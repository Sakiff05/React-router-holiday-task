import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const favoriteContext = createContext();

function FavoriteProvider({ children }) {
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  async function handleAddFavorite(id) {
    try {
      if (favorite.find((item) => item.id == id)) {
        let filteredFavorite = [...favorite].filter((item) => item.id != id);
        setFavorite([...filteredFavorite]);
      } else {
        let res = await axios.get(`http://localhost:5000/flowers/${id}`);
        setFavorite([...favorite, res.data]);
        localStorage.setItem("favorites", JSON.stringify(favorite));
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]);

  const value = { favorite, handleAddFavorite };
  return (
    <favoriteContext.Provider value={value}>
      {children}
    </favoriteContext.Provider>
  );
}

export default FavoriteProvider;
