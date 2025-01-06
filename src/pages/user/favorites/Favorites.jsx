import { useEffect } from "react";
import PageBreadCrumb from "../../../components/user/aboutHeader/PageBreadCrumb";
import FavoriteCards from "../../../components/user/favoriteCards/FavoriteCards";
import { Helmet } from "react-helmet-async";

function Favorites() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Florist | Favorites </title>
        <meta name="description" content="Favorites" />
      </Helmet>
      <PageBreadCrumb page="favorites">Favorites</PageBreadCrumb>
      <FavoriteCards />
    </>
  );
}

export default Favorites;
