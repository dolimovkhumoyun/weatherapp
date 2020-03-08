import React from "react";
import { Route, Switch } from "react-router-dom";

import List from "../../../routes/list";
import Weather from "../../../routes/weather";
import Explore from "../../../routes/explore";

const AppContent = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/explore" component={Explore} />
        <Route path="/list" component={List} />
        <Route path="/" component={Weather} />
      </Switch>
    </React.Fragment>
  );
};

export default AppContent;
