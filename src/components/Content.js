import React from "react";

function Content({ header, content, buttn, link, icon, list, showButton }) {
  return (
    <div className="container" style={{ paddingTop: "10px" }}>
      <h2>{header}</h2>
      <p>{content}</p>
      <ul>{list}</ul>
      {showButton && (
        <div
          className="action_btn d-flex align-items-center mt_40 wow fadeInRight"
          data-wow-delay="0.6s"
        >
          <a href={link} className="btn_hover app_btn">
            {buttn}
            {icon}
          </a>
        </div>
      )}
    </div>
  );
}

export default Content;
