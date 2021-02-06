import React from "react";
import "../Scss/index.scss";

function Footersection() {
  return (
    <>
      <div className="footer-section">
        <div className="footer-block">
          <ul>
            <li>
              <a href="">
                <strong>
                  <em>mevo </em>
                </strong>
                Auckland
              </a>
            </li>
            <li>
              <a href="">
                <strong>
                  <em>mevo </em>
                </strong>
                Wellington
              </a>
            </li>
          </ul>
          <div className="footer-group">
          <div>
            <h4>Wellington</h4>
            <li>
              <a>Vehicles</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Term and Conditions</a>
            </li>
          </div>
          <div>
            <h4>Product</h4>
            <li>
              <a>The Mevo App </a>
            </li>
            <li>
              <a>Climate Positive</a>
            </li>
            <li>
              <a>FAQs</a>
            </li>
          </div>
          <div>
            <h4>Company</h4>
            <li>
              <a>Team</a>
            </li>
            <li>
              <a>Press</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </div>
        </div>
        </div>
       
      </div>
    </>
  );
}
export default Footersection;
