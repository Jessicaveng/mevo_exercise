import request from "superagent";

const mevoHomeZoneApi = "https://api.mevo.co.nz/public/home-zones/all";
const mevoVehiclesApi = "https://api.mevo.co.nz/public/vehicles/all";
const mevoDarkLogo = "https://assets.mevo.co.nz/brand/logo-dark.svg"; //use on ligth background
const mevoLightLogo = "https://assets.mevo.co.nz/brand/logo-light.svg";//use on dark background



export function mevoHomeZone(){
  return request
  .get(mevoHomeZoneApi)
  .then(res=>res.body)
}

export function mevoVehicles(){
  return request
  .get(mevoVehiclesApi)
  .then(res=>res.body)
}

export function darkLogo(){
  return request
  .get(mevoDarkLogo)
  .then(res=>res.body)
}

export function lightLogo(){
  return request
  .get(mevoLightLogo)
  .then(res=>res.body)
}