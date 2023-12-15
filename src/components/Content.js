import React, { useEffect, useState } from "react";
import FallingTitle from "./FallingTitle";

function Content({
  header,
  content,
  buttn,
  link,
  icon,
  list,
  showButton,
  innerTitle,
}) {
  return (
    <div style={{ paddingTop: "10px" }}>
      <h1>{header}</h1>
      <p>{content}</p>
      <div
        // className="falling-title-container"
        style={{ height: "10px", margin: "20px 0" }}
      >
        {innerTitle}
      </div>
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

// function FallingTitle({ titles = [], currentTitleIndex }) {
//   return (
//     <div className="falling-title">
//       {titles &&
//         titles.map((title, index) => (
//           <div
//             key={index}
//             className={`title ${index === currentTitleIndex ? "visible" : ""}`}
//           >
//             {Array.isArray(title) && // Check if title is an array
//               title.map((word, i) => <span key={i}>{word}</span>)}
//           </div>
//         ))}
//     </div>
//   );
// }

export default Content;
