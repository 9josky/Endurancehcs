import React from "react";
import NavContact from "../components/NavContact";
import CustomeNavBar from "../components/CustomeNavBar";
import Breadcrumb from "../components/Breadcrumb";
import HRServiceItems from "../components/HRServiceItems";
import RespiteCareContent from "../components/RespiteCareContent";
import QuickMessage from "../components/QuickMessage";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";

function RespiteCare() {
  const title = "Respite Care";
  const description =
    "Day and overnight respite care, Medical appointments escort, Movies companion, etc.";
  const icon = "medical-assistance_4514120.png";
  const rclass = "pr_70";
  const iclass = "icon_one";
  return (
    <div className="body_wrapper">
      <NavContact />
      <CustomeNavBar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <Breadcrumb Ptitle="Respite Care" />

      <HRServiceItems
        HRtitle={title}
        HRdescription={description}
        Hicon={icon}
        rclass={rclass}
        iclass={iclass}
        image="2150796806.jpg"
      />
      <RespiteCareContent />
      <WhyChooseUs />
      <QuickMessage inquiry="Inquire About Our Respite Care" />
      <Footer />
    </div>
  );
}

export default RespiteCare;
