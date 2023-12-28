import React from "react";
import Content from "./Content";

function RespiteCareContent() {
  const what = [
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Day and Overnight Respite Care:
      </strong>{" "}
      Providing short-term care during the day or overnight, tailored to the
      needs of the individual and their family.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Medical Appointments Escort:
      </strong>{" "}
      Assisting individuals in getting to and from medical appointments,
      ensuring they receive necessary healthcare.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Companion for Leisure Activities:
      </strong>{" "}
      Offering companionship and support during recreational activities, such as
      going to movies or engaging in hobbies.
    </span>,
  ];
  const benefits = [
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Support for Primary Caregivers:
      </strong>{" "}
      Respite care gives primary caregivers the chance to take a break, reducing
      caregiver burnout and promoting overall well-being.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Quality Time for Individuals:
      </strong>{" "}
      Individuals receiving respite care can enjoy personalized attention and
      engaging activities, enhancing their overall quality of life.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Flexibility and Convenience:
      </strong>{" "}
      Endurance Healthcare's respite care services are flexible, providing
      caregivers with the freedom to choose the timing and duration of the
      respite.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Peace of Mind:</strong> Knowing
      that their loved ones are in capable hands, primary caregivers can take a
      break with the peace of mind that comes from professional and
      compassionate care.
    </span>,
  ];
  return (
    <div>
      <Content
        header="What is Respite Care?"
        content="Respite care is a specialized service designed to provide temporary relief and support to individuals who are typically cared for by family members or primary caregivers. It offers a brief break from caregiving responsibilities, allowing the primary caregivers an opportunity to recharge, attend to personal needs, or simply take some time for themselves."
      />
      <Content
        header="What Do Endurance Healthcare Respite Caregivers Do?"
        content="Endurance Healthcare's respite caregivers offer personalized and attentive support to individuals and their primary caregivers. Our respite care services include:"
        list={what.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      />
      <Content content="Endurance Healthcare understands that respite care is not only about meeting the physical needs of the individual but also about creating a positive and engaging experience during the caregiver's break." />
      <Content
        header="Benefits of Respite Care:"
        list={benefits.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      />
      <Content content="Endurance Healthcare's approach to respite care is centered around understanding the unique needs of both the individual and their primary caregiver, fostering a supportive environment that contributes to the well-being of all involved." />
    </div>
  );
}

export default RespiteCareContent;
