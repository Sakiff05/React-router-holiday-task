import { useEffect } from "react";
import PageBreadCrumb from "../../../components/user/aboutHeader/PageBreadCrumb";
import CustomOrders from "../../../components/user/customOrders/CustomOrders";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PageBreadCrumb page="services">Our Services</PageBreadCrumb>
      <CustomOrders />
    </div>
  );
}

export default Services;
