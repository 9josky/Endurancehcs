import React from "react";
import Content from "./Content";

function CosmeticCareContent() {
  const what = [
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Massages and Range Motion Activities:
      </strong>{" "}
      Offering gentle massages and activities to promote relaxation,
      flexibility, and overall well-being.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Assistance with Hairdressing and Barbering:
      </strong>{" "}
      Providing support with hair care, styling, and maintaining a well-groomed
      appearance.
    </span>,
  ];
  const benefits = [
    <span>
      <strong style={{ fontWeight: "bold" }}>Enhanced Self-Esteem:</strong>{" "}
      Cosmetic care contributes to an individual's sense of self-esteem and
      well-being by addressing grooming and aesthetic preferences.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Relaxation and Comfort:</strong>{" "}
      Massages and range motion activities offer not only physical benefits but
      also contribute to relaxation and emotional comfort.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Personalized Grooming:</strong>{" "}
      Assistance with hairdressing and barbering ensures that individuals can
      maintain a well-groomed appearance according to their preferences.
    </span>,
  ];
  return (
    <div>
      <Content
        header="What is Cosmetic Care?"
        content="Cosmetic care involves specialized services focused on enhancing an individual's appearance and promoting a sense of well-being. It goes beyond basic personal care to include activities that contribute to a person's physical and emotional comfort. Cosmetic care is designed to address grooming and aesthetic needs, recognizing the importance of maintaining a positive self-image."
      />
      <Content
        header="What Do Endurance Healthcare Cosmetic Caregivers Do?"
        content="Endurance Healthcare's cosmetic caregivers provide personalized and attentive support that goes beyond traditional personal care. Our cosmetic care services include:"
        list={what.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      />
      <Content content="Endurance Healthcare understands the significance of cosmetic care in contributing to an individual's confidence and self-esteem. Our caregivers approach cosmetic care with sensitivity and expertise, recognizing its positive impact on an individual's overall quality of life." />
      <Content
        header="Benefits of Cosmetic Care:"
        list={benefits.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      />
      <Content content="Endurance Healthcare's cosmetic care services are tailored to meet the unique needs and preferences of each individual, recognizing the importance of fostering a positive self-image and promoting overall emotional and physical comfort." />
    </div>
  );
}

export default CosmeticCareContent;
