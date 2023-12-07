import React from "react";
import CustomeNavBar from "../components/CustomeNavBar";
import Breadcrumb from "../components/Breadcrumb";
import AboutUsInfo from "../components/AboutUsInfo";
import ServiceData from "../components/ServiceData";
import AgencyAbout from "../components/AgencyAbout";
import NavContact from "../components/NavContact";

function About() {
  return (
    <div className="body_wrapper">
      <NavContact />
      <CustomeNavBar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/banner_bg.png"
        Ptitle="About Us"
        Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
      />
      <AboutUsInfo />
      <AgencyAbout ServiceData={ServiceData} />
    </div>
  );
}

export default About;
