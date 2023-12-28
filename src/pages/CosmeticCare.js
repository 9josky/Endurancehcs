import React from "react";
import NavContact from "../components/NavContact";
import CustomeNavBar from "../components/CustomeNavBar";
import Breadcrumb from "../components/Breadcrumb";
import HRServiceItems from "../components/HRServiceItems";
import CosmeticCareContent from "../components/CosmeticCareContent";
import QuickMessage from "../components/QuickMessage";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";

function CosmeticCare() {
  const title = "Cosmetic Care";
  const description =
    "Massages and range motion activities, Helping with hairdressing and barbing, etc.";
  const icon = "assistance_4514278.png";
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
      <Breadcrumb Ptitle="Cosmetic Care" />

      <HRServiceItems
        HRtitle={title}
        HRdescription={description}
        Hicon={icon}
        rclass={rclass}
        iclass={iclass}
        image="medium-shot-nurse-man-posing.jpg"
      />
      <CosmeticCareContent />
      <WhyChooseUs />
      <QuickMessage inquiry="Inquire About Our Cosmetic Care" />
      <Footer />
    </div>
  );
}

export default CosmeticCare;
