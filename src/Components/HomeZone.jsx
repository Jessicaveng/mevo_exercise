import React from "react";
import '../Scss/index.scss'

function HomeZone() {
  return (
    <div className="HomeZone">
      <h1>What is the HOME ZONE?</h1>
      <p>
        Glad you asked! The Home Zone is the service area where you can start
        and end your mevo trips. The Home Zone boundaries are illustrated in the
        app with a heavy orange line.
        You can end your trip in any approved parking space within the Home
        Zone.
      </p>
    
      <p>
        The Wellington Home Zone also includes parking at Wellington
        International Airport, allowing for one-way trips to and from the city.
      </p>
      <button type="button" className="button-with-outline"> WELLINGTON AIRPORT GUIDE </button>
      <p>
        You'll see the Home Zone grow over time to match where our customers
        live and work. <br/> Join now and help us grow, or chat with us if you have
        any questions.
      </p>
    </div>
  );
}

export default HomeZone;
