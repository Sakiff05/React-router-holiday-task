import { useEffect } from "react";
import PageBreadCrumb from "../../../components/user/aboutHeader/PageBreadCrumb";
import BasketTable from "../../../components/user/basketTable/BasketTable";
import { Helmet } from "react-helmet-async";

function Basket() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Florist | Basket</title>
        <meta name="description" content="Basket" />
      </Helmet>
      <PageBreadCrumb page="basket">Basket</PageBreadCrumb>
      <BasketTable />
    </div>
  );
}

export default Basket;
