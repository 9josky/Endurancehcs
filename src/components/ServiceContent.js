import React from "react";
import Content from "./Content";

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
    <div style={{ marginBottom: "15px" }}>
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
      />
    </div>
  );
}

export default ServiceContent;
