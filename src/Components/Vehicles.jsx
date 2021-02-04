import React from 'react'

export default class Vehicles extends React.Component{

  
  async componentDidMount(){
    const mevoVehiclesApi = "https://api.mevo.co.nz/public/vehicles/all"
    const response = await fetch(mevoVehiclesApi)
    const fetchedData = await response.json() 
    console.log(fetchedData[0]);

  }

  render(){
    return(
      <div>HELLO</div>
    )
  }
}