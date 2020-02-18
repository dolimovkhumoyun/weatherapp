import React from "react";
import BottomNav from "../../common/BottomNav";
import AppContent from "../Content/AppContent";

const App = ({ props }) => {
  return (
    <React.Fragment>
      <AppContent />
      <BottomNav />
    </React.Fragment>
  );
};

export default App;
