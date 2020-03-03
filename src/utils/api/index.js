import axios from "axios";

const data = {
  appid: "d9a874e000f1abc81aa5eec21fcf2192",
  q: "Andijan"
};

export const getCurrentWeather = (location, setData, initial_data) => {
  console.log(location);
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${data.appid}`
    )
    .then(res => {
      setData(initial_data => [...initial_data, res.data]);
    });
};

export const getHourlyForecast = (location, setData, initial_data) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lng}&appid=${data.appid}`
    )
    .then(res => {
      setData(initial_data => [...initial_data, res.data]);
    });
};
