import React, { useEffect, useState } from "react";
import axios from "axios";

import BottomNav from "../common/BottomNav";
import CustomCard from "../common/CustomCard";
import { Grid } from "@material-ui/core";
import HourlyCard from "../common/HourlyCard";

const Dashboard = () => {
  const [tempInfo, setTempInfo] = useState(); // daily temperature information
  const [hourly, setHourly] = useState(); // hourly temperature information
  const [location, setLocation] = useState({
    latitude: 41.2995,
    longitute: 69.2401
  }); // location information
  useEffect(() => {
    const data = {
      appid: "d9a874e000f1abc81aa5eec21fcf2192",
      q: "Andijan"
    };
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

  return (
    <React.Fragment>
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
      <BottomNav />
    </React.Fragment>
  );
};

export default Dashboard;
