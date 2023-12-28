import React from "react";
import Content from "./Content";

function WhyWeDiffer() {
  const why = [
    <span>
      <strong style={{ fontWeight: "bold" }}>Personalized Care Plans:</strong>{" "}
      While some providers offer generic caregiving solutions, we pride
      ourselves on creating personalized care plans tailored to the unique
      needs, preferences, and lifestyles of each individual. Our approach is not
      one-size-fits-all; it's about understanding and meeting specific
      requirements.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Compassionate and Empathetic Care:
      </strong>{" "}
      Our caregivers are not just skilled professionals; they are compassionate
      individuals who genuinely care about the well-being of our clients. We
      prioritize empathy, kindness, and emotional support, ensuring that our
      clients feel valued and understood.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Focus on Building Relationships:
      </strong>{" "}
      Endurance Healthcare places a strong emphasis on building lasting
      relationships. We view our clients as extended family members, fostering
      connections that go beyond caregiving tasks. Our commitment is not just to
      provide a service but to be a trusted and caring companion.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Transparent Communication:</strong>{" "}
      Our caregivers undergo continuous training to stay updated on the latest
      caregiving techniques, technologies, and best practices. We invest in the
      professional growth of our team to ensure they deliver the highest quality
      of care.
    </span>,
  ];
  return (
    <div
      className="container new_startup_banner_copy"
      style={{
        marginBottom: "100px",
        backgroundColor: "#002664",
        position: "relative",
      }}
    >
      <Content
        header="How We Differ from Competitors"
        content="Endurance Healthcare stands out in the caregiving industry due to our unwavering commitment to excellence, personalized approach, and holistic caregiving philosophy. Here's how we differentiate ourselves from competitors:"
        orderedList={why.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
        textColor="white"
      />
      <Content
        textColor="white"
        // header="Experience the Endurance Difference:"
        content="Choosing Endurance Healthcare means choosing a caregiving partner that values your individuality, prioritizes your well-being, and stands apart in the commitment to provide compassionate, personalized, and exceptional care."
      />
    </div>
  );
}

export default WhyWeDiffer;
