import React from "react";
import Nav from "./Nav.jsx";
import HomeZone from "./HomeZone.jsx";
import Mapp from "./Map.jsx";
import "../Scss/index.scss";

function App() {
  return (
    <div className="App">
     
      <div className ="container">
      <Nav />
      <HomeZone />
      <Mapp />
      
      </div>
    </div>
  );
}

export default App;
