import { useEffect } from "react";
import PageBreadCrumb from "../../../components/user/aboutHeader/PageBreadCrumb";
import FavoriteCards from "../../../components/user/favoriteCards/FavoriteCards";

function Favorites() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageBreadCrumb page="favorites">Favorites</PageBreadCrumb>
      <FavoriteCards />
    </>
  );
}

export default Favorites;
