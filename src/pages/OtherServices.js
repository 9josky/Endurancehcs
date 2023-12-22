import React from "react";
import NavContact from "../components/NavContact";
import CustomeNavBar from "../components/CustomeNavBar";
import Breadcrumb from "../components/Breadcrumb";
import HRServiceItems from "../components/HRServiceItems";

function OtherServices() {
  const title = "Other Services";
  const description =
    "Running errands, In and out of town accompaniment, Pet care, Escort to stores, parks, and community events, Fall prevention and general safety guidance, Transportation, Wound care, Skilled nursing care, etc.";
  const icon = "care_7924590.png";
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
      <Breadcrumb Ptitle="Other Services" />

      <HRServiceItems
        HRtitle={title}
        HRdescription={description}
        Hicon={icon}
        rclass={rclass}
        iclass={iclass}
        image="32202.jpg"
      />
    </div>
  );
}

export default OtherServices;
