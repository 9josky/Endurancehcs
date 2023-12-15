import React from "react";
import Content from "./Content";
import FallingTitle from "./FallingTitle";

function ServiceContent() {
  const servicesList = [
    "bathing",
    "grooming",
    "personal hygiene",
    "mobility assistance",
    "meal preparations",
    "bed preparation",
    "incontinence care",
    "laundry",
    "administrative assistance",
    "medication monitoring and reminder ",
  ];

  return (
    <div
      className="container"
      style={{
        marginBottom: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Content
        header="Our Services"
        content="With utmost compassion we provide the following services to our clients:
"
        list={servicesList.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
        link="/service"
        buttn="Learn More"
        icon={<i className="your-icon-class"></i>}
        showButton={true}
        innerTitle={<FallingTitle />}
      />
      <div className="image-container">
        <img
          src={require("../img/caregiver.jpg")}
          alt="Caregiver"
          className="rounded-image"
        />
      </div>
    </div>
  );
}

export default ServiceContent;
