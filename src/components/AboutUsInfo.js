import React from "react";
import AboutUsInfoComp from "./AboutUsInfoComp";
import { useSpring, animated } from "react-spring";

function AboutUsInfo() {
  const fadeInUp = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(30px)" },
    config: { tension: 170, friction: 26 },
  });

  return (
    <section className="agency_service_area bg_color">
      <div className="container">
        <h2
          className="f_size_30 f_600 t_color3 l_height40 text-center mb_90 wow fadeInUp"
          data-wow-delay="0.2s"
        >
          {/* You SaasLand wherever your */}
          {/* <br /> business agency */}
        </h2>
        <div className="row mb_30">
          <div className="col-lg-4 col-sm-6">
            <animated.div style={fadeInUp}>
              <AboutUsInfoComp
                iShap="icon_shape1.png"
                Sicon="ti-panel"
                text="Mission"
                description="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy.!"
                btn="Read More"
                bicon="arrow_right"
              />
            </animated.div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <animated.div style={{ ...fadeInUp, delay: 200 }}>
              <AboutUsInfoComp
                iShap="icon_shape2.png"
                Sicon="ti-layout-grid2"
                text="Vision"
                description="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy.!"
                btn="Read More"
                bicon="arrow_right"
              />
            </animated.div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <animated.div style={{ ...fadeInUp, delay: 400 }}>
              <AboutUsInfoComp
                iShap="icon_shape3.png"
                Sicon="ti-gallery"
                text="Principles"
                description="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy.!"
                btn="Read More"
                bicon="arrow_right"
              />
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsInfo;
