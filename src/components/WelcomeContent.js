import React from "react";
import Content from "./Content";

function WelcomeContent() {
  return (
    <>
      <div style={{ marginBottom: "15px" }}>
        <Content
          header="Welcome to Endurance Healthcare Services"
          content="Where compassionate healthcare thrives. We are licensed in the state of Maryland to provide quality in-home medical and non-medical services that support elderly, age or disability restricted individuals. Our number one priority is the comfortability of the clients we served and that is why we ensure compatibility of our healthcare providers to all clients assigned to them.

    Endurance caregivers are specially trained to provide services both at home and at healthcare facilities. Most of our clients love to remain in their homes and communities because it makes them happier, healthier, and live longer; that is why at Endurance we do everything humanly possible to take high quality and compassionate healthcare services to them at home unless the condition requires hospitalization or any other emergency services and we would be by our clients’ side throughout the travail.
    
    Our caregivers are verified through nurse aide registry and misconduct registry to make sure we are sending the best in the industry to our clients. They are pre-screened and past employers up to 5 years prior are checked for reference purposes. All our caregivers must be willing to go beyond and above for our clients before they are hired.
    
    The leadership team of Endurance are seasoned caregivers who understand the needs of clients they serve. We have trained our staff to always show compassion regardless of the situation they find themselves in with the clients served. We don’t just send our caregivers out; we make regular visits to clients served not only to get to know them, but also to ask if they have concerns and most of the time our clients always have good things to say about our caregivers. We can’t wait to serve you in the comfort zone of your home. Give us a call today for your home care services to experience our impeccable and compassionate healthcare services. 
    
    "
          buttn="Our Story"
          link="/story"
          icon={<i className="ti-arrow-right"></i>}
          showButton={true}
        />
      </div>
    </>
  );
}

export default WelcomeContent;
