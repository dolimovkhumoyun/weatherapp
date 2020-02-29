import React from "react";

import App from "../layout/AppLayout/App";

const Dashboard = props => {
  console.log(props.match);
  return <App props={props} />;
};

export default Dashboard;
