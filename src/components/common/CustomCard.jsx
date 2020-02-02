import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CircularProgress } from "@material-ui/core";

import sunny from "../../assets/image/sunny.jpg";
import sun from "../../assets/image/sun.svg";
import CustomSlider from "./CustomSlider";
import { kelvinToCelcium } from "../../utils/utils";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    width: "90vw",
    marginLeft: 20,
    marginTop: 10
  },
  title: {
    paddingLeft: 120,
    paddingBottom: 100
  },
  media: {
    height: "30vh"
  },
  icon: {
    marginLeft: 15,
    height: 25
  },
  weather: {
    paddingTop: 30,
    paddingLeft: 70,
    fontSize: 50,
    fontWeight: 150,
    fontFamily: "Helvetica"
  }
});

const CustomCard = ({ tempInfo, hourly }) => {
  const classes = useStyles();

  if (tempInfo !== undefined) {
    return (
      <Card className={classes.card} style={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <CardMedia className={classes.media} image={sunny} title="asdasda">
          <Typography className={classes.weather} variant="h1" component="h1">
            {tempInfo.name}
          </Typography>
          <Typography className={classes.title} variant="h2" component="h2">
            {kelvinToCelcium(tempInfo.main.temp)}
            <img src={sun} alt="sunny" className={classes.icon} />
          </Typography>
        </CardMedia>
        {/* <hr /> */}
        <CardContent>
          <CustomSlider hourly={hourly} />
        </CardContent>
        {/* <hr /> */}
      </Card>
    );
  } else
    return (
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={sunny} title="Paella dish" />
        <CardContent>
          <CircularProgress />
        </CardContent>
      </Card>
    );
};
export default CustomCard;
