import React, { useEffect, useState } from "react";
import axios from "axios";

import BottomNav from "../common/BottomNav";
import CustomCard from "../common/CustomCard";

const Dashboard = () => {
  const [tempInfo, setTempInfo] = useState(); // daily temperature information
  const [hourly, setHourly] = useState(); // hourly temperature information
  useEffect(() => {
    const data = {
      appid: "d9a874e000f1abc81aa5eec21fcf2192",
      q: "Tashkent"
    };
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data.q}&appid=${data.appid}`).then(res => {
      setTempInfo(res.data);
    });
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${data.q}&appid=${data.appid}`)
      .then(res => {
        setHourly(res.data);
      });
  }, []);
  return (
    <React.Fragment>
      <CustomCard tempInfo={tempInfo} hourly={hourly} />
      <BottomNav />
    </React.Fragment>
  );
};

export default Dashboard;
