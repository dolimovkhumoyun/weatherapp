import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

import { kelvinToCelcium } from "../../utils/utils";

const useStyles = makeStyles({
  card: {
    width: "98vw",
    marginTop: 10,
    marginLeft: "1vw",
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
  },
  name: {
    fontFamily: "Helvetica",
    fontWeight: 500,
    color: "white",
    fontSize: 20
  }
});

const CustomCard = ({ tempInfo, hourly }) => {
  const classes = useStyles();

  if (tempInfo !== undefined) {
    return (
      <Card className={classes.card}>
        <CardContent className={classes.media}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              {/* <Typography className={classes.name}>{tempInfo.name}</Typography> */}
              <Typography className={classes.weather}>
                {kelvinToCelcium(tempInfo.main.temp)}°<br />
              </Typography>

              <Typography className={classes.description}>
                {tempInfo.weather[0].description}
              </Typography>
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
