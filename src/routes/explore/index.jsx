import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import ReactPullToRefresh from "react-pull-to-refresh";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles(theme => ({
  search: {
    position: "relative",
    top: 10,
    left: "1%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "98%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));
const Explore = () => {
  const classes = useStyles();
  const handleRefresh = e => {
    window.location.reload();
  };

  return (
    <ReactPullToRefresh
      onRefresh={handleRefresh}
      className="your-own-class-if-you-want"
      style={{
        textAlign: "center"
      }}
    >
      <Grid container>
        <div
          style={{
            backgroundColor: "#1976D2",
            width: "100vw",
            height: "100vh"
          }}
        >
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </div>
      </Grid>
    </ReactPullToRefresh>
  );
};

export default Explore;
