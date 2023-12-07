import React, { useRef } from "react";
import EventTeamItem from "./EventTeamItem";
import Slider from "react-slick";

function EventTeam() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <section className="event_team_area sec_pad">
      <div className="container">
        <div className="hosting_title security_title text-center">
          {/* <h2 className="wow fadeInUp" data-wow-delay="0.2s">
            <span>Speakers</span> Who's Speaking
          </h2> */}
        </div>
        <Slider
          ref={(c) => {
            if (c) {
              c.slider = c;
            }
          }}
          className="event_team_slider"
          {...settings}
        >
          <EventTeamItem image="senior-woman3.jpg" />
          <EventTeamItem image="social-worker2.jpg" />
          <EventTeamItem image="senior-woman4.jpg" />
          <EventTeamItem image="social-worker1.jpg" />
          <EventTeamItem image="retirement-home.jpg" />
          <EventTeamItem image="happy-nurse.jpg" />
          <EventTeamItem image="woman-old-age-home.jpg" />
          <EventTeamItem image="doctor-talking.jpg" />
        </Slider>
      </div>
    </section>
  );
}

export default EventTeam;
