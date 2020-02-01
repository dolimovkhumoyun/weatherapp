import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CircularProgress } from "@material-ui/core";

import sunny from "../../assets/image/sunny.jpg";
import sun from "../../assets/image/sun.svg";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    width: "90vw",
    marginLeft: 20,
    marginTop: 10
  },
  title: {
    paddingLeft: 140,
    paddingBottom: 100
  },
  media: {
    height: "85vh"
  },
  icon: {
    marginLeft: 5,
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

const CustomCard = ({ tempInfo }) => {
  const classes = useStyles();

  const kelvinToCelcium = kelvin => {
    return kelvin - 273.15;
  };
  console.log(tempInfo);
  if (tempInfo !== undefined) {
    return (
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={sunny} title="asdasda">
          <Typography className={classes.weather} variant="h1" component="h1">
            {tempInfo.name}
          </Typography>
          <Typography className={classes.title} variant="h2" component="h2">
            {kelvinToCelcium(tempInfo.main.temp)}
            <img src={sun} alt="sunny" className={classes.icon} />
          </Typography>
        </CardMedia>
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
