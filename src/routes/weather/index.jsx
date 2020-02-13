import React, { useEffect, useState } from "react";
import axios from "axios";

import CustomCard from "../../components/common/CustomCard";
import { Grid } from "@material-ui/core";
import HourlyCard from "../../components/common/HourlyCard";
import ReactPullToRefresh from "react-pull-to-refresh";

const Weather = () => {
  const [tempInfo, setTempInfo] = useState(); // daily temperature information
  const [hourly, setHourly] = useState(); // hourly temperature information
  const [location, setLocation] = useState({}); // location information
  useEffect(() => {
    const data = {
      appid: "d9a874e000f1abc81aa5eec21fcf2192",
      q: "Andijan"
    };
    if (location.latitude !== undefined) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitute}&appid=${data.appid}`
        )
        .then(res => {
          setTempInfo(res.data);
        });
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitute}&appid=${data.appid}`
        )
        .then(res => {
          setHourly(res.data);
        });
    }
  }, [location]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayLocationInfo);
    }

    function displayLocationInfo(position) {
      const lng = position.coords.longitude;
      const lat = position.coords.latitude;
      let location = { longitute: lng, latitude: lat };
      setLocation(location);
    }
  }, []);

  const handleRefresh = e => {
    window.location.reload();
  };

  return (
    <ReactPullToRefresh
      onRefresh={handleRefresh}
      className="your-own-class-if-you-want"
      style={{
        textAlign: "center"
      }}
    >
      <Grid container>
        <div
          style={{
            backgroundColor: "#1F4371",
            width: "100vw",
            height: "100vh"
          }}
        >
          <CustomCard tempInfo={tempInfo} />
          <HourlyCard hourly={hourly} />
        </div>
      </Grid>
    </ReactPullToRefresh>
  );
};

export default Weather;
