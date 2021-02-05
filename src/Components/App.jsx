import React from "react";
import Nav from "./Nav.jsx";
import HomeZone from "./HomeZone.jsx";
import Mapp from "./Map.jsx";

import "../Scss/index.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className ="container">
        <HomeZone />
        <div className="Mapp">
          <Mapp />
        </div>

        
      </div>
    </div>
  );
}

export default App;
