import React from "react";
import { useSpring, animated } from "react-spring";

function HRServiceItems({ HRtitle, HRdescription, Hicon, rclass, iclass }) {
  // Define the spring animation
  const revealAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { tension: 300, friction: 10 },
  });

  return (
    <div className="col-lg-4 col-sm-6">
      {/* Use the animated.div component for animated elements */}
      <animated.div style={revealAnimation}>
        <div className={`p_service_item ${rclass}`}>
          <div className={`icon ${iclass}`}>
            <i className={`ti-${Hicon}`}></i>
          </div>
          <h5 className="f_600 f_p t_color3">{HRtitle}</h5>
          <p className="f_400">{HRdescription}</p>
        </div>
      </animated.div>
    </div>
  );
}

export default HRServiceItems;