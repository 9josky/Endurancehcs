import React from "react";
import NavContact from "../components/NavContact";
import CustomeNavBar from "../components/CustomeNavBar";
import Breadcrumb from "../components/Breadcrumb";
import HRServiceItems from "../components/HRServiceItems";
import PeronalCareContent from "../components/PeronalCareContent";
import QuickMessage from "../components/QuickMessage";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";

function PersonalCare() {
  const title = "Personal Care";
  const description =
    "Bathing, Grooming, Personal hygiene, Mobility assistance, Meal preparations, Bed preparation, Incontinence care, Laundry, Administrative assistance, Medication monitoring and reminder, etc.";
  const icon = "recipient_4514175.png";
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
      <Breadcrumb Ptitle="Personal Care" />

      <HRServiceItems
        HRtitle={title}
        HRdescription={description}
        Hicon={icon}
        rclass={rclass}
        iclass={iclass}
        image="2150796822.jpg"
      />
      <PeronalCareContent />
      <WhyChooseUs />
      <QuickMessage inquiry="Inquire About Our Personal Care" />
      <Footer />
    </div>
  );
}

export default PersonalCare;
