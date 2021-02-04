import React, { useState, useRef } from "react";
//import ReactDOM from 'react-dom';
//import mapboxgl from "mapbox-gl";
import useSwr from "swr";
import ReactMapGL, { Marker } from "react-map-gl";
import useSupercluster from "use-supercluster";

import "../Scss/index.scss";

import dotenv from "dotenv";
dotenv.config();

const MapboxAccessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
const fetcher = (...args) => fetch(...args).then((response) => response.json()); //FETCH ARGS  THEN CONVERT RESPONSE TO JSON

//SET UP MAP
export default function Map() {
  const [viewport, setViewport] = useState({
    longitude: 174.777969,
    latitude: -41.276825,
    zoom: 13,
  });

  const mapRef = useRef();

  //FETCH MEVO VEHICLES API DATA
  const mevoVehiclesApi = "https://api.mevo.co.nz/public/vehicles/all";
  const { data, error } = useSwr(mevoVehiclesApi, fetcher);
  const vehicles = data && !error ? data.slice(0, 70) : [];
  const points = vehicles.map((vehicle) => ({
    properties: {
      cluster: false,
      icon: "../logo.svg",
    },
    geometry: {
      coordinates: [vehicle.position.longitude, vehicle.position.latitude],
    },
  }));

  //GET MAP BOUNDS
  const bounds = mapRef.current
    ? mapRef.current.getMap().getBounds().toArray().flat()
    : null;

  //GET CLUSTERS
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds, //4 cornes of lng and Lat
    zoom: viewport.zoom,
    options: { radius: 15, maxZoom: 20 },
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        width="100vw"
        height="80vh"
        maxZoom={20}
        mapstyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={MapboxAccessToken}
        onViewportChange={(newViewport) => {
          //UPDATE VIEWPORT WHEN USER DRAGS/ZOOMS IN/OUT
          setViewport({ ...newViewport });
        }}
        ref={mapRef} // GIVE ACCESS TO THE MAP ITSELF
      >
        {clusters.map((cluster) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount,
          } = cluster.properties;
          if (isCluster) {
            return (
              <Marker
                key={cluster.id}
                longitude={parseFloat(longitude)}
                latitude={parseFloat(latitude)}
              >
                <div
                  className="cluster-marker"
                  style={
                    ({ width: `${10 + (pointCount / points.length) *20}px` },
                    { height: `${10 + (pointCount / points.length) *20}px`})
                  }
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }
          return (
            <Marker
              key={cluster.properties.id}
              latitude={parseFloat(latitude)}
              longitude={parseFloat(longitude)}
            >
              <button className="vehicle-marker">
                <img src="vehiclemarker.png" alt="vehicle coordinates" />
              </button>
            </Marker>
          );
        })}
      </ReactMapGL>
    </div>
  );
}
