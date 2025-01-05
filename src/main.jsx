import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FavoriteProvider from "./context/FavoriteProvider";
import BasketProvider from "./context/BasketProvider";

createRoot(document.getElementById("root")).render(
  <BasketProvider>
    <FavoriteProvider>
      <App />
    </FavoriteProvider>
  </BasketProvider>
);
