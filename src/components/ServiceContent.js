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
      className="container service-on-mobile"
      style={{
        marginBottom: "50px",
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
        innerTitle={<FallingTitle />}
      />
      <div
        className="image-container"
        // style={{ zIndex: "55", position: "relative" }}
      >
        <img
          src={require("../img/caregiver.jpg")}
          alt="image by freepik"
          // className="rounded-image"
          style={{ width: "450px", height: "300px", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
}

export default ServiceContent;
