import React from "react";
import CustomeNavBar from "../components/CustomeNavBar";
import Breadcrumb from "../components/Breadcrumb";
import AboutUsInfo from "../components/AboutUsInfo";
import ServiceData from "../components/ServiceData";
import AgencyAbout from "../components/AgencyAbout";
import NavContact from "../components/NavContact";
import Content from "../components/Content";

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
        // breadcrumbClass="breadcrumb_area"
        // imgName="breadcrumb/banner_bg.png"
        // backgroundColor="#002664"
        Ptitle="Our Story"
        // Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
      />
      <Content
        // header="Our story"
        content="Endurance Healthcare Services was born out of the cheer love the founder and President Taiwo Onanuga have for the elderly and those individuals that have challenges which prevent them from carrying out simple daily activities that you and I take for granted. His journey as a caregiver started with NCIA Baltimore in 2003 where he worked as a caregiver to three individuals who relied heavily on his compassionate caregiving to go through each day of their lives. He later left to work for the state of Maryland at Spring Grove Hospital in Catonsville MD where he obtained various awards due to his outstanding performances in taking care of the mentally challenged individuals. It was his last caregiving experience at Athelas Institute Columbia MD that made him decide to personally found Endurance healthcare services to increase his impact in this field of caring for those in need. 
"
        showButton={false}
      />
      <AboutUsInfo />
      {/* <AgencyAbout ServiceData={ServiceData} /> */}
    </div>
  );
}

export default About;
