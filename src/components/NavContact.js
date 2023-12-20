import React from "react";

function NavContact() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        padding: "10px 0",
      }}
    >
      <h3 style={{ color: "black" }}>Speak with us 24/7</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <a href="tel: 2405640051" className="f_400" style={{ color: "black" }}>
          (240) 564 0051
        </a>
        <a href="tel: 3014908417" className="f_400" style={{ color: "black" }}>
          (301) 490 8417
        </a>
      </div>
    </div>
  );
}

export default NavContact;
