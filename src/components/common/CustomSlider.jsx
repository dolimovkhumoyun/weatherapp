import React from "react";
import moment from "moment";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sun from "../../assets/image/sun.svg";
import { kelvinToCelcium } from "../../utils/utils";

const CustomSlider = ({ hourly }) => {
  const settings = {
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  const renderSlides = hourly => {
    let data = [];
    let component;
    hourly.list.map(time => {
      //   if (moment.unix(time.dt).format("DD") === moment().format("DD"))
      data.push(time);
      return false;
    });
    component = data.map(d => (
      <div key={d.dt}>
        {moment.unix(d.dt).format("HH")}
        <img src={sun} alt="weather" style={{ height: 15 }} />
        {kelvinToCelcium(d.main.temp)}
      </div>
    ));
    return component;
  };

  if (hourly !== undefined) {
    return (
      <div>
        <Slider {...settings}>{renderSlides(hourly)}</Slider>
      </div>
    );
  } else return "";
};

export default CustomSlider;
