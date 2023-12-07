import React from "react";
import CustomeNavBar from "../components/CustomeNavBar";
import EventBanner from "../components/EventBanner";
import EventTeam from "../components/EventTeam";
import HomeService from "../components/HomeService";
import NavContact from "../components/NavContact";

function Home() {
  return (
    <div className="body_wrapper">
      <NavContact />
      <CustomeNavBar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <EventBanner />
      <EventTeam />
      <HomeService />
    </div>
  );
}

export default Home;
