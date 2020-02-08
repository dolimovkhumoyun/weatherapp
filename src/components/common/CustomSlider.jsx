import React from "react";
import moment from "moment";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { kelvinToCelcium } from "../../utils/utils";

const useStyles = makeStyles({
  time: {
    fontFamily: "Helvetica",
    fontWeight: 510,
    fontSize: 22,
    marginLeft: 15
  },
  icon: {
    width: 80
  },
  weather: {
    fontFamily: "Helvetica",
    fontWeight: 520,
    fontSize: 22,
    marginTop: 10,
    color: "#7B518A"
  }
});

const CustomSlider = ({ hourly }) => {
  const classes = useStyles();
  const settings = {
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3
  };

  const renderSlides = hourly => {
    let component = hourly.map(d => (
      <div key={d.dt}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography className={classes.time}>{moment.unix(d.dt).format("HH")}:00</Typography>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Typography className={classes.weather}>{kelvinToCelcium(d.main.temp)}°</Typography>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <img
              src={`https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`}
              className={classes.icon}
              alt="icon"
            />
          </Grid>
        </Grid>
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
