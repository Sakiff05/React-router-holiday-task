import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FavoriteProvider from "./context/FavoriteProvider";
import BasketProvider from "./context/BasketProvider";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BasketProvider>
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </BasketProvider>
  </HelmetProvider>
);
