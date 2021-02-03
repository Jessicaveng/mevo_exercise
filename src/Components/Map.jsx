import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

//mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1IjoiamVzc2ljYXZlbmciLCJhIjoiY2trb2phZng2MDFxdzJ3b2NzYjZzZjJlbyJ9.BznCJvuhX9h40RQLDv8Gkg';


class Mapp extends Component {
  constructor(props){
    super(props)
    this.state={
      lng: 174.777969,
      lat: -41.276825,
      zoom:12.5
    }
  }
  componentDidMount(){
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [this.state.lng, this.state.lat],
      //[-74.5, 40], // starting position [lng, lat]
      zoom: this.state.zoom // starting zoom
      })

      map.on('load', function () {
        map.resize();
    });
  }
  render(){
    return(
      <div ref={el => this.mapContainer = el} style = {{width:'100vw', height:'100vh'}}> </div>
    )
  
  }
}

export default Mapp
