import request from "superagent";

const mevoHomeZoneApi = "https://api.mevo.co.nz/public/home-zones/all";
const mevoVehiclesApi = "https://api.mevo.co.nz/public/vehicles/all";




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