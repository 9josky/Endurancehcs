import React from "react";
import Content from "./Content";

function OtherServicesContent() {
  const what = [
    <span>
      <strong style={{ fontWeight: "bold" }}>Running Errands:</strong> Assisting
      with daily tasks such as grocery shopping, prescription pickups, and other
      errands to ensure convenience and accessibility.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>
        In and Out of Town Accompaniment:
      </strong>{" "}
      Providing support and companionship for individuals during local or
      out-of-town travels, making journeys comfortable and enjoyable.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Pet Care:</strong> Offering
      assistance with pet care responsibilities, recognizing the positive impact
      of animal companionship on emotional well-being.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Escort to Stores, Parks, and Community Events:
      </strong>{" "}
      Ensuring individuals have the opportunity to engage in social activities,
      promoting a sense of community and connection.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Fall Prevention and General Safety Guidance:
      </strong>{" "}
      Implementing measures to enhance safety at home, including fall prevention
      strategies and guidance on general safety.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Transportation:</strong> Assisting
      with transportation needs, whether for medical appointments or other
      outings, ensuring individuals can access the services and activities they
      require.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Wound Care:</strong> Providing
      skilled nursing care for individuals with specific medical needs, ensuring
      proper wound care and monitoring.
    </span>,
  ];

  return (
    <div>
      <Content
        header="Other Services"
        content="Endurance Healthcare offers a comprehensive range of additional services to address various needs and enhance the overall well-being of individuals. Our commitment extends beyond traditional caregiving to include:"
        list={what.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      />
      <Content content="Endurance Healthcare's commitment to comprehensive care involves understanding the diverse needs of individuals and tailoring services to promote a fulfilling and comfortable lifestyle. Our caregivers approach each service with professionalism, compassion, and a focus on enhancing the overall quality of life for those we serve." />
    </div>
  );
}

export default OtherServicesContent;
