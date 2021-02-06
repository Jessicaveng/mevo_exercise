import React from "react";
import Nav from "./Nav.jsx";
import HomeZone from "./HomeZone.jsx";
import Mapp from "./Map.jsx";
import Park from "./Park.jsx";
import Footersection from './Footersection.jsx'
import "../Scss/index.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <HomeZone />
        <Mapp />
        <Park />
      </div>
      <Footersection/>
       
    </div>
  );
}

export default App;
