import React from "react";
import Content from "./Content";

function OurStoryContent() {
  return (
    <div
      className="container service-on-mobile"
      style={{
        marginBottom: "15px",
        marginTop: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Content
        // header="Our story"
        content={
          <div>
            <p style={{ color: "black", fontSize: "18px" }}>
              Endurance Healthcare Services was born out of the deep love that
              the founder and President, Taiwo Onanuga, has for the elderly and
              those individuals facing challenges preventing them from carrying
              out simple daily activities we often take for granted.
            </p>
            <p style={{ color: "black", fontSize: "18px" }}>
              His journey as a caregiver began at NCIA Baltimore in 2003, where
              he worked as a caregiver for three individuals who heavily relied
              on his compassionate caregiving to navigate each day of their
              lives.
            </p>
            <p style={{ color: "black", fontSize: "18px" }}>
              He later worked for the state of Maryland at Spring Grove Hospital
              in Catonsville, MD, earning various awards for his outstanding
              performances in taking care of mentally challenged individuals.
            </p>
            <p style={{ color: "black", fontSize: "18px" }}>
              However, it was his final caregiving experience at Athelas
              Institute in Columbia, MD, that inspired him to establish
              Endurance Healthcare Services, aiming to broaden his impact in the
              field of caring for those in need.
            </p>
          </div>
        }
        showButton={false}
      />
      <div
        className="image-container"
        // style={{ zIndex: "55", position: "relative" }}
      >
        <img
          src={require("../img/CEO.jpeg")}
          alt="image by freepik"
          // className="rounded-image"
          style={{ width: "450px", height: "300px", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
}

export default OurStoryContent;
