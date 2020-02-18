import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(theme => ({
  root: {
    width: "98vw",
    maxHeight: "60vh",
    backgroundColor: theme.palette.background.paper,
    marginTop: 40,
    marginLeft: "1%",
    borderRadius: 8,
    position: "relative",
    overflow: "auto"
  }
}));

const CustomList = ({ data }) => {
  const classes = useStyles();

  if (data !== undefined && data.length !== 0) {
    console.log(data);
    const list = data.map(d => (
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={d.name}
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" color="textPrimary">
                {d.country}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    ));
    return <List className={classes.root}>{list}</List>;
  } else {
    return "";
  }
};

export default CustomList;
