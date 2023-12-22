import React from "react";
import Content from "./Content";

function WhyChooseUs() {
  const why = [
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Comfort in Familiar Surroundings:
      </strong>{" "}
      We understand the profound impact of familiar environments on happiness
      and health. Our mission is to bring high-quality, compassionate healthcare
      services directly to your home, fostering a sense of comfort and
      longevity.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>Caregivers You Can Trust:</strong>{" "}
      Endurance caregivers are meticulously vetted, verified through nurse aide
      and misconduct registries. Our team is comprised of individuals who not
      only meet professional standards but go the extra mile for your
      well-being. Pre-screening, reference checks, and a commitment to
      excellence define our caregiver selection process.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Leadership Rooted in Compassion:
      </strong>{" "}
      Our leadership team consists of seasoned caregivers who empathize with the
      unique needs of our clients. Compassion is at the core of our service
      philosophy. We don't just send caregivers; we make regular visits to
      ensure not only quality care but to build genuine connections with those
      we serve.
    </span>,
    <span>
      <strong style={{ fontWeight: "bold" }}>
        Comprehensive Services Tailored for You:
      </strong>{" "}
      Whether it's personal care, respite care, cosmetic care, or a range of
      other services, Endurance Healthcare is your comprehensive solution. From
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
        header="Why Choose Endurance?"
        orderedList={why.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
        textColor="white"
      />
      <Content
        textColor="white"
        header="Experience the Endurance Difference:"
        content="Give us a call today to embark on a journey of impeccable and compassionate healthcare services. Your comfort zone is our priority, and we can't wait to serve you in the place you call home."
      />
    </div>
  );
}

export default WhyChooseUs;
