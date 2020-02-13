import React, { useState, useEffect } from "react";
import BottomNav from "../../common/BottomNav";
import AppContent from "../Content/AppContent";

const App = ({ props }) => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    props.history.push(`/${location}`);
  }, [location, props.history]);

  return (
    <React.Fragment>
      <AppContent />
      <BottomNav location={location} onNavChange={setLocation} />
    </React.Fragment>
  );
};

export default App;
