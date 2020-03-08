// React
import React, { useEffect, useState } from "react";

//Custom
import CustomCard from "../../components/common/CustomCard";
import HourlyCard from "../../components/common/HourlyCard";
import { getCurrentWeather, getHourlyForecast } from "../../utils/api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// third-party
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { LinearProgress } from "@material-ui/core";

const Weather = () => {
  const [tempInfo, setTempInfo] = useState([]); // daily temperature information
  const [hourly, setHourly] = useState([]); // hourly temperature information
  const [location, setLocation] = useState(null); // location information

  useEffect(() => {
    let elements = JSON.parse(localStorage.getItem("elements"));
    if (elements !== null && location !== null) {
      elements.push(location);
      elements.map(city => {
        getCurrentWeather(city, setTempInfo, tempInfo);
        getHourlyForecast(city, setHourly, hourly);
      });
    } else if (location !== null) {
      getCurrentWeather(location, setTempInfo, tempInfo);
      getHourlyForecast(location, setHourly, hourly);
    }
  }, [location]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayLocationInfo);
    }

    function displayLocationInfo(position) {
      const lng = position.coords.longitude;
      const lat = position.coords.latitude;
      let location = { lng: lng, lat: lat };
      setLocation(location);
    }
  }, []);
  if (tempInfo.length > 0 && hourly.length > 0) {
    return (
      <div
        style={{
          backgroundColor: "#8B4290",
          width: "100vw",
          height: "100%"
        }}
      >
        <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={230} totalSlides={tempInfo.length}>
          <Slider>
            {tempInfo.map((temp_date, index) => {
              return (
                <Slide index={index}>
                  <div key={index}>
                    <CustomCard tempInfo={tempInfo[index]} />
                    <HourlyCard hourly={hourly[index]} />
                  </div>
                </Slide>
              );
            })}
          </Slider>
        </CarouselProvider>
      </div>
    );
  } else
    return (
      <div
        style={{
          backgroundColor: "#8B4290",
          width: "100vw",
          height: "100vh"
        }}
      >
        <LinearProgress />
      </div>
    );
};

export default Weather;
