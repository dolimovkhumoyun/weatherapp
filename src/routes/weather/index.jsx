// React
import React, { useEffect, useState } from "react";

//Custom
import CustomCard from "../../components/common/CustomCard";
import HourlyCard from "../../components/common/HourlyCard";
import { getCurrentWeather, getHourlyForecast } from "../../utils/api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// third-party
import { Grid } from "@material-ui/core";
import Slider from "react-slick";

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
      console.log("Hello");
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
  console.log(tempInfo);
  return (
    <Slider>
      <div key="1">
        <Grid container>
          <div
            style={{
              backgroundColor: "#8B4290",
              width: "100vw",
              height: "100vh"
            }}
          >
            <CustomCard tempInfo={tempInfo[0]} />
            <HourlyCard hourly={hourly[0]} />
          </div>
        </Grid>
      </div>
      <div key="1">
        <Grid container>
          <div
            style={{
              backgroundColor: "#8B4290",
              width: "100vw",
              height: "100vh"
            }}
          >
            <CustomCard tempInfo={tempInfo[1]} />
            <HourlyCard hourly={hourly[1]} />
          </div>
        </Grid>
      </div>
    </Slider>
  );
};

export default Weather;
