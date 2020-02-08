import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TodayIcon from "@material-ui/icons/Today";
import ExploreIcon from "@material-ui/icons/Explore";

const useStyles = makeStyles({
  stickToBottom: {
    width: "100%",
    position: "fixed",
    height: 70,
    bottom: 0,
    backgroundColor: "#F5F5F5"
  }
});

const BottomNav = ({ location, onNavChange }) => {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    onNavChange(newValue);
  };

  return (
    <Grid container>
      <BottomNavigation
        value={location}
        onChange={handleChange}
        position="fixed"
        className={classes.stickToBottom}
      >
        <BottomNavigationAction label="Weather" value="" icon={<TodayIcon />} />
        <BottomNavigationAction label="Nearby" value="explore" icon={<ExploreIcon />} />
      </BottomNavigation>
    </Grid>
  );
};

export default BottomNav;
