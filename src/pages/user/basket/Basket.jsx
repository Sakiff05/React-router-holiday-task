import { useEffect } from "react";
import PageBreadCrumb from "../../../components/user/aboutHeader/PageBreadCrumb";
import BasketTable from "../../../components/user/basketTable/BasketTable";

function Basket() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PageBreadCrumb page="basket">Basket</PageBreadCrumb>
      <BasketTable />
    </div>
  );
}

export default Basket;
