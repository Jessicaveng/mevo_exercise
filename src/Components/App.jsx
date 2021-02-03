import React from 'react'
import '../Scss/index.scss'
import Nav from './Nav.jsx'
import Mapp from './Map.jsx'


function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <hr/> */}
      <div className="Mapp">     
         <Mapp/>
      </div>
    </div>
  )
}

export default App
