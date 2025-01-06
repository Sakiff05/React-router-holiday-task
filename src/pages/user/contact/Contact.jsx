import { useEffect } from "react";
import PageBreadCrumb from "../../../components/user/aboutHeader/PageBreadCrumb";
import ContactInfo from "../../../components/user/contactInfo/ContactInfo";
import { Helmet } from "react-helmet-async";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Florist | Contact</title>
        <meta name="description" content="Contact" />
      </Helmet>
      <PageBreadCrumb page="contact">Contact us</PageBreadCrumb>
      <ContactInfo />
    </div>
  );
}

export default Contact;
