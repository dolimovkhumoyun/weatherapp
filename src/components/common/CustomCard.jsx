import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CircularProgress, Grid } from "@material-ui/core";

import sunny from "../../assets/image/sunny.jpg";
import sun from "../../assets/image/sun.svg";
import CustomSlider from "./CustomSlider";
import { kelvinToCelcium } from "../../utils/utils";

const useStyles = makeStyles({
  card: {
    width: "96vw",
    marginTop: 10,
    paddingRight: 5,
    marginLeft: 5,
    backgroundColor: "#76A7E3"
  },
  weather: {
    fontFamily: "Helvetica",
    fontSize: 55,
    fontWeight: 1000,
    color: "white"
  },
  description: {
    fontFamily: "Helvetica",
    fontWeight: 500,
    color: "white",
    fontSize: 14
  },
  icon: {
    marginLeft: 30
  }
});

const CustomCard = ({ tempInfo, hourly }) => {
  const classes = useStyles();

  if (tempInfo !== undefined) {
    console.log(tempInfo);
    return (
      <Card className={classes.card}>
        <CardContent className={classes.media}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <Typography className={classes.weather}>
                {kelvinToCelcium(tempInfo.main.temp)}°<br />
              </Typography>

              <Typography className={classes.description}>{tempInfo.weather[0].description}</Typography>
            </Grid>
            <Grid item xs={6}>
              <img
                src={`https://openweathermap.org/img/wn/${tempInfo.weather[0].icon}@2x.png`}
                alt=""
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  } else
    return (
      <Card className={classes.card}>
        <CardContent>
          <CircularProgress />
        </CardContent>
      </Card>
    );
};
export default CustomCard;
