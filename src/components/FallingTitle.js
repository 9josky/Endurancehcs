import React, { useState, useEffect } from "react";

const titleList = [
  ["Personal Care"],
  ["Respite Care"],
  ["Cosmetic Care"],
  ["Other services"],
];

const getRandomIndex = () => Math.floor(Math.random() * titleList.length);

const FallingTitle = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = getRandomIndex();
      setCurrentTitleIndex(randomIndex);
    }, 3000); // Change the interval if needed

    return () => clearInterval(interval);
  }, []);

  return (
    // <div
    //   //   className="falling-title"
    //   style={{ display: "flex", flexDirection: "column", position: "relative" }}
    // >
    //   {titleList.map((title, index) => (
    //     <div
    //       key={index}
    //       //   className="title"
    //       style={{
    //         transform: `translateY(${index === currentTitleIndex ? 0 : -100}%)`,
    //         transition: "transform 1s ease-in-out",
    //         position: "absolute",
    //         opacity: index === currentTitleIndex ? 1 : 0,
    //       }}
    //     >
    //       {title.map((word, i) => (
    //         <span
    //           key={i}
    //           style={{
    //             fontSize: "30px",
    //             color: "#002664",
    //             fontWeight: "bold",
    //             display: "inline-block",
    //           }}
    //         >
    //           {word}
    //         </span>
    //       ))}
    //     </div>
    //   ))}
    // </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        // overflow: "hidden",
      }}
      className="container"
    >
      {titleList.map((title, index) => (
        <div
          key={index}
          style={{
            transform: `translateX(${index === currentTitleIndex ? 0 : 100}%)`,
            transition: "transform 3s ease-in-out, opacity 1s ease-in-out",
            position: "absolute",
            opacity: index === currentTitleIndex ? 1 : 0,
          }}
        >
          {title.map((word, i) => (
            <span
              key={i}
              style={{
                fontSize: "30px",
                color: "#002664",
                fontWeight: "bold",
                display: "inline-block",
              }}
            >
              {word}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FallingTitle;
