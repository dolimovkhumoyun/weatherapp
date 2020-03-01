import React from "react";
import Dashboard from "./components/main-page/Dashboard";

import { Route } from "react-router-dom";

const App = props => {
  return <Route path="/" component={Dashboard} />;
};

export default App;
