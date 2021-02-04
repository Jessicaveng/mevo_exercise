import React from 'react'
import Nav from './Nav.jsx'
import HomeZone from './HomeZone.jsx'
import Mapp from './Map.jsx'
import Vehicles from './Vehicles.jsx'

import '../Scss/index.scss'


function App() {
  return (
    <div className="App">
      <Nav/>
      <hr/>
      <HomeZone/>
      <div className="Mapp">      
        <Mapp/>
        {/* <Vehicles/> */}
        <div> </div>
      </div>
    </div>
  )
}

export default App
