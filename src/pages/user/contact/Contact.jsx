import { useEffect } from "react";
import PageBreadCrumb from "../../../components/user/aboutHeader/PageBreadCrumb";
import ContactInfo from "../../../components/user/contactInfo/ContactInfo";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PageBreadCrumb page="contact">Contact us</PageBreadCrumb>
      <ContactInfo />
    </div>
  );
}

export default Contact;
