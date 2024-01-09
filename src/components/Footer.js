import React from "react";
import { useSpring, animated } from "react-spring";
import FooterData from "./Footer/FooterData";
import { Link } from "react-router-dom";

function Footer() {
  const widgetSpring = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    delay: 200,
  });

  return (
    <footer className="new_footer_area bg_color">
      <div className="footer_top">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className="footer_respo"
          >
            <a>
              <img
                src={require("../img/No5copy.png")}
                alt=""
                width="400px"
                height="100px"
              />
            </a>
            <div>
              <p>
                <span style={{ color: "white" }}>Email:</span>{" "}
                <a
                  href="ehcsonline1@gmail.com"
                  className="f_400"
                  style={{ color: "white" }}
                >
                  ehcsonline1@gmail.com
                </a>
              </p>
              <div>
                <span style={{ color: "white" }}>Phone:</span>{" "}
                <div>
                  <a
                    href="tel: 2405640051"
                    className="f_400"
                    style={{ color: "white" }}
                  >
                    (240) 564 0051
                  </a>
                  /
                  <a
                    href="tel: 3014908417"
                    className="f_400"
                    style={{ color: "white" }}
                  >
                    (301) 490 8417
                  </a>
                </div>
              </div>
            </div>
            <div className="f_social_icon_two text-center">
              {FooterData.socialIcon.map((item) => {
                return (
                  <a href="/" key={item.id}>
                    <i className={item.icon}></i>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-6">
              <p className="mb-0 f_400">{FooterData.copywrite}</p>
            </div>
            {/* <div className="col-lg-4 col-md-4 col-sm-12">
              <ul className="list-unstyled f_menu text-right">
                <li>
                  <a href=".#">Terms of Use</a>
                </li>
                <li>
                  <a href=".#">Privacy Policy</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
