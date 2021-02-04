
import React, { useState, useRef } from "react";
//import ReactDOM from 'react-dom';
//import mapboxgl from "mapbox-gl";
import ReactMapGL, {Marker}from 'react-map-gl'
//import Vehicles from "./Vehicles.jsx";
//import {mevoVehicles} from '../Api/api'
import '../Scss/index.scss'
import dotenv from 'dotenv'
dotenv.config()

const MapboxAccessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

  //SET UP MAP  
  export default function Map () {
    const [viewport, setViewport]=useState({
      longitude: 174.777969,
      latitude: -41.276825,
      zoom: 13
    })

    const mapRef = useRef();


    //FETCH MEVO VEHICLES API DATA
    const mevoVehiclesApi = "https://api.mevo.co.nz/public/vehicles/all";
    
    return (
      <ReactMapGL
        {...viewport} 
        width= '100vw'
        height='50vh'
        maxZoom={20}         
        mapstyle= "mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={MapboxAccessToken}
        
        onViewportChange={newViewport =>{ //UPDATE VIEWPORT WHEN USER DRAGS/ZOOMS IN/OUT
          setViewport({...newViewport})
        }}
        ref={mapRef}
      > 
        {/* {marker} */}
      </ReactMapGL>
    )
  }

 

