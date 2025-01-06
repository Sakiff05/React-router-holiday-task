import { useEffect } from "react";
import PageBreadCrumb from "../../../components/user/aboutHeader/PageBreadCrumb";
import CustomOrders from "../../../components/user/customOrders/CustomOrders";
import { Helmet } from "react-helmet-async";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Florist | Services</title>
        <meta name="description" content="Services" />
      </Helmet>
      <PageBreadCrumb page="services">Our Services</PageBreadCrumb>
      <CustomOrders />
    </div>
  );
}

export default Services;
