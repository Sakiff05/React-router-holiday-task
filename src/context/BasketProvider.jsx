import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const basketContext = createContext();

function BasketProvider({ children }) {
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );
  const value = { basket, handleAddBasket, setBasket };
  let count = 0;
  async function handleAddBasket(id) {
    try {
      let res = await axios.get(`http://localhost:5000/flowers/${id}`);
      let data = await res.data;
      let findedFlower = basket.find((item) => item.id == id);

      if (findedFlower) {
        findedFlower.count++;
        setBasket([...basket]);
      } else {
        setBasket([...basket, { ...data, count: 1 }]);
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket, count]);
  return (
    <basketContext.Provider value={value}>{children}</basketContext.Provider>
  );
}

export default BasketProvider;
