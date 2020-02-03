import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";

import _ from "lodash";
import moment from "moment";
import countries from "../../utils/countries.json";
import CustomSlider from "./CustomSlider.jsx";

const useStyles = makeStyles({
  root: {
    width: "98vw",
    marginTop: 10,
    marginLeft: "1vw"
  },
  title: {
    fontSize: 24
  }
});

const HourlyCard = ({ tempInfo, hourly }) => {
  const classes = useStyles();
  const [todaysForecast, setTodays] = useState();

  useEffect(() => {
    console.log(hourly);
    if (hourly !== undefined) {
      let todays = _.filter(hourly.list, function(o) {
        return moment.unix(o.dt).format("YYYY-MM-DD");
        // moment().format("YYYY-MM-DD")
      });
      setTodays(todays);
    }
  }, [hourly]);

  if (hourly !== undefined) {
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            {hourly.city.name},{" "}
            {_.get(_.find(countries, { code: hourly.city.country }), "name")}.
          </Typography>
          <Grid container direction="row" justify="center" alignItems="center">
            <Chip
              label="Hourly forcast"
              clickable={false}
              variant="outlined"
              color="primary"
            />
          </Grid>
          <hr style={{ borderRadius: "10px solid" }} />
          <CustomSlider hourly={todaysForecast || []} />
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

export default HourlyCard;
