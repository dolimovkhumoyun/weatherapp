import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ListAltIcon from "@material-ui/icons/ListAlt";
import TodayIcon from "@material-ui/icons/Today";
import ExploreIcon from "@material-ui/icons/Explore";

const useStyles = makeStyles({
  stickToBottom: {
    width: "100%",
    position: "absolute",
    height: 70,
    bottom: 0,
    backgroundColor: "#F5F5F5"
  }
});

const BottomNav = () => {
  const [location, setLocation] = useState("");
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    setLocation(history.location.pathname);
  }, [history.location.pathname]);

  const handleChange = (event, newValue) => {
    setLocation(newValue);
    history.push(`${newValue}`);
  };

  return (
    <BottomNavigation
      value={location}
      onChange={handleChange}
      position="fixed"
      className={classes.stickToBottom}
    >
      <BottomNavigationAction label="Weather" value="/" icon={<TodayIcon />} />{" "}
      <BottomNavigationAction label="My List" value="/list" icon={<ListAltIcon />} />
      <BottomNavigationAction label="Nearby" value="/explore" icon={<ExploreIcon />} />
    </BottomNavigation>
  );
};

export default BottomNav;
