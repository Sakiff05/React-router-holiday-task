import { useEffect } from "react";
import AboutUs from "../../../components/user/aboutUs/AboutUs";
import CustomFlower from "../../../components/user/customFlower/CustomFlower";
import Features from "../../../components/user/features/Features";
import Quotes from "../../../components/user/quotes/Quotes";
import Shop from "../../../components/user/shop/Shop";
import HeroSlider from "../../../components/user/slider/HeroSlider";
import Tricks from "../../../components/user/tricks/Tricks";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSlider />
      <Features />
      <AboutUs />
      <Shop />
      <CustomFlower />
      <Tricks />
      <Quotes />
    </>
  );
}

export default Home;
