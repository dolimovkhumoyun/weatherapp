import React, { useState } from "react";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { useEffect } from "react";

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
  const classes = useStyles("");
  const [selected, setSelected] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("elements")) !== null) {
      const elements = JSON.parse(localStorage.getItem("elements"));
      setCart(elements);
    }
  }, []);

  const onClick = (e, value) => {
    saveDataStorge(value);
    setSelected(value.name);
  };

  const saveDataStorge = city_object => {
    console.log(city_object);
    let elements = JSON.parse(localStorage.getItem("elements"));
    if (_.find(elements, { name: city_object.name })) {
      elements = _.reject(elements, { name: city_object.name });
    } else {
      elements = [...cart, city_object];
    }
    setCart(elements);
    localStorage.setItem("elements", JSON.stringify(elements));
  };

  const renderIcon = city_name => {
    const elements = JSON.parse(localStorage.getItem("elements"));
    if (_.find(elements, { name: city_name })) return <RemoveCircleIcon fontSize="inherit" />;
    return <AddCircleIcon fontSize="inherit" />;
  };

  if (data !== undefined && data.length !== 0) {
    const list = data.map((d, index) => (
      <ListItem
        key={`${d.name} + ${index}`}
        alignItems="flex-start"
        selected={selected === d.name}
        onClick={event => onClick(event, d)}
      >
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
        <IconButton
          aria-label="delete"
          color="primary"
          className={classes.margin}
          size="medium"
          // onClick={event => onClick(event, d.name)}
        >
          {renderIcon(d.name)}
        </IconButton>
      </ListItem>
    ));
    return <List className={classes.root}>{list}</List>;
  } else {
    return (
      <List className={classes.root}>
        <ListItem>No Data</ListItem>
      </List>
    );
  }
};

export default CustomList;
