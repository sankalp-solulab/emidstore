import React, { Component } from "react";
class WhyChoosesingle extends Component {
  render() {
    return (
      <li>
        <img src={require("../../assets/images/manager.png")}></img>

        {/* <img src="images/manager.png" /> */}
        <span className="count">
          <span
            className=" timer count-title count-number"
            data-to={250}
            data-speed={5000}
          />
        </span>
        <span className="cnt">
          Clients Served
          <span>
            (Across US, UK, Canada, <br /> Australia and India)
          </span>
        </span>
      </li>
    );
  }
}
export default WhyChoosesingle;
