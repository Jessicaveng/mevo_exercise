import React from 'react'

export default class Vehicles extends React.Component{

  state ={

  }
  async componentDidMount(){
    const mevoVehiclesApi = "https://api.mevo.co.nz/public/vehicles/all"
    const response = await fetch(mevoVehiclesApi)
    const fetchedData = await response.json() 
    console.log(fetchedData);


  }


  
  render(){
    return(
      <div>HELLO</div>
    )
  }
}