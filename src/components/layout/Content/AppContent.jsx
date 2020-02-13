import React from "react";
import Weather from "../../../routes/weather";
import { Route, Switch } from "react-router-dom";
import Explore from "../../../routes/explore";

const AppContent = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/explore" component={Explore} />
        <Route path="/" component={Weather} />
      </Switch>
    </React.Fragment>
  );
};

export default AppContent;
