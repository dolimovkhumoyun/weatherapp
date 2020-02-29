import React from "react";
import { Route, Switch } from "react-router-dom";

import Weather from "../../../routes/weather";
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
