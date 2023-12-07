import React from "react";

function AboutUsInfoComp({
  iShap,
  Sicon,
  text,
  description,
  btn,
  bicon,
  nClass,
}) {
  return (
    <div
      className={`p_service_item agency_service_item pr_70 wow fadeInUp ${nClass}`}
    >
      <div className="icon">
        <img src={require("../img/home4/" + iShap)} alt="" />
        <i className={Sicon}></i>
      </div>
      <h5 className="f_600 f_p t_color3">{text}</h5>
      <p>{description}</p>
      <p className="mb-0">
        <a href=".#">{btn}</a>
        <i className={bicon}></i>
      </p>
    </div>
  );
}

export default AboutUsInfoComp;
