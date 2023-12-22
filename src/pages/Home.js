import React from "react";
import CustomeNavBar from "../components/CustomeNavBar";
import EventBanner from "../components/EventBanner";
import EventTeam from "../components/EventTeam";
import HomeService from "../components/HomeService";
import NavContact from "../components/NavContact";
import WelcomeContent from "../components/WelcomeContent";
import ServiceContent from "../components/ServiceContent";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import HomeReview from "../components/HomeReview";
import GettingStarted from "../components/GettingStarted";

function Home() {
  return (
    <div className="body_wrapper" style={{ gap: "15px" }}>
      <NavContact />
      <CustomeNavBar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <EventBanner />
      <EventTeam />
      <WelcomeContent />
      <ServiceContent />
      <WhyChooseUs />
      <HomeReview />
      <GettingStarted />
      <Footer />
      {/* <HomeService /> */}
    </div>
  );
}

export default Home;
