import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1IjoiamVzc2ljYXZlbmciLCJhIjoiY2trb2phZng2MDFxdzJ3b2NzYjZzZjJlbyJ9.BznCJvuhX9h40RQLDv8Gkg';


class Mapp extends Component {
  constructor(){
    super(props)
    this.state={
      lng:10,
      lat:100,
      zoom:4
    }
  }
  componentDidMount(){
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [this.state.lng, this.state.lat],
      //[-74.5, 40], // starting position [lng, lat]
      zoom: this.state.zoom // starting zoom
      })
  }
  render(){
    return(
      <div ref={el => this.mapContainer = el}> map</div>
    )
  
  }
}

export default Mapp
