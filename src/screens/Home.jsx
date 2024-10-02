import React from "react";
import NavBar from "../components/layout/nav";
import Heropage from "../components/homepage-components/heropage";
import AboutUs from "../components/homepage-components/aboutUs";
import Footer from "../components/layout/footer";
import Ourgudile from "../components/homepage-components/ourgudile";
import WhychooseUS from "../components/homepage-components/whyChooseUs";
import OurService from "../components/homepage-components/ourService";
import Testimonal from "../components/homepage-components/testimonal";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Heropage />
      <AboutUs />
      <Ourgudile />
      <WhychooseUS />
      <OurService />
      <Testimonal />
      <Footer />
    </div>
  );
};

export default Home;
