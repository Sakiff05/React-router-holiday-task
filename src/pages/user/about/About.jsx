import { useEffect } from "react";
import PageBreadCrumb from "../../../components/user/aboutHeader/PageBreadCrumb";
import AboutUs from "../../../components/user/aboutUs/AboutUs";
import OurServices from "../../../components/user/ourServices/OurServices";
import Quotes from "../../../components/user/quotes/Quotes";
import TeamMembers from "../../../components/user/teamMembers/TeamMembers";
import { Helmet } from "react-helmet-async";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Florist | About us</title>
        <meta name="description" content="About us" />
      </Helmet>

      <PageBreadCrumb page="about">About Us</PageBreadCrumb>
      <AboutUs />
      <OurServices />
      <Quotes />
      <TeamMembers />
    </div>
  );
}

export default About;
