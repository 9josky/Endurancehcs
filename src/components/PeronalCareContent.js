import React from "react";
import Content from "./Content";

function PeronalCareContent() {
  const what = [
    <span>
      <strong style={{ fontWeight: "bold" }}>Bathing and Grooming:</strong>{" "}
      Assisting with personal hygiene routines and grooming activities.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Mobility Support:</strong> Helping
      individuals move around, ensuring safety and comfort.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Meal Preparations:</strong>{" "}
      Preparing and serving meals while considering dietary preferences and
      restrictions.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Incontinence Care:</strong> Whether
      it's personal care, respite care, cosmetic care, or a range of other
      services, Endurance Healthcare is your comprehensive solution. From
      bathing to medication reminders, we offer a suite of services aimed at
      enhancing your overall well-being.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Impeccable Track Record:</strong>{" "}
      Our clients consistently speak highly of the care they receive from our
      caregivers. With Endurance, expect not just a service provider, but a
      caring partner dedicated to your health and happiness.
    </span>,
  ];

  const benefits = [
    <span>
      <strong style={{ fontWeight: "bold" }}>Independence:</strong> Personal
      care enables individuals to maintain a level of independence while
      receiving necessary support.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Dignity and Comfort:</strong>{" "}
      Endurance Healthcare prioritizes the dignity and comfort of clients,
      fostering a sense of well-being.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Customized Care:</strong> Personal
      care services are tailored to meet the specific needs and preferences of
      each individual.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Familiar Environment:</strong> By
      receiving care at home, clients can remain in a familiar and comforting
      environment, promoting emotional well-being.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Comprehensive Well-Being:</strong>{" "}
      Addressing personal care needs contributes to overall physical, emotional,
      and mental well-being.
    </span>,
  ];
  return (
    <div>
      <Content
        header="What is Personal Care?"
        content="Personal care encompasses a set of essential services designed to assist individuals who may face challenges in independently managing their daily activities due to factors such as age, illness, or disability. It involves support in areas such as hygiene, grooming, mobility, and other activities that contribute to an individual's overall well-being."
      />
      <Content
        header="What Do Endurance Healthcare Personal Caregivers Do?"
        content="Endurance Healthcare's dedicated personal caregivers provide tailored and compassionate assistance to individuals in the comfort of their own homes. Our caregivers are trained to address a variety of needs, including:"
        list={what.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      />
      <Content content="Our caregivers go beyond the basics, offering companionship and personalized care to enhance the overall quality of life for those we serve." />
      <Content
        header="Benefits of Personal Care:"
        list={benefits.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      />
      <Content content="Endurance Healthcare's personal care services are designed to make a positive impact on the lives of individuals, ensuring they receive the support they need for a dignified and independent lifestyle." />
    </div>
  );
}

export default PeronalCareContent;
