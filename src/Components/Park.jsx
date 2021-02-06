import React from "react";
import "../Scss/index.scss";

function Park() {
  return (
    <div className="content-park">
      <div className="content-container">
        <h1>Where do I park?</h1>
        <div className="park-images">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

        <p>
          You can end your trip in any Wellington City Council metered, coupon,
          or P120 and above parking space within the Home Zone. Parking in other
          legal spots, like P60 and clearways, is only permitted while on-trip
          (never end your trip in these spots) and you're responsible for
          ensuring that the vehicle complies with time limits. Please do not end
          your trip in any commercial parking lots such as supermarkets, private
          parking lots, residents parking, loading zones, taxi/bus zones,
          disabled, reserved locations or any other illegal spots. You'll also
          be responsible for any tickets or tows if parked illegally while
          on-trip, or when ending trips in any non-designated or approved
          parking space.
        </p>
        <br />
        <h3>DEDICATED PARKING AND CHARGING</h3>
        <p>
          In Wellington, mevo operates a range of dedicated parking areas so
          that you'll always have somewhere to park. Some of these parking areas
          have EV chargers installed to top up the Audi A3 e-tron® battery.
        </p>
      </div>
    </div>
  );
}

export default Park;
