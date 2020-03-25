import React, { Component } from "react";
import WhyChoosesingle from "./WhyChoosesingle.jsx";
class WhyChooseFeature extends Component {
  render() {
    return (
      <div className="inner">
        <ul className="discover-count-list">
          <WhyChoosesingle />
          <WhyChoosesingle />
          <WhyChoosesingle />
          <WhyChoosesingle />
        </ul>
      </div>
    );
  }
}
export default WhyChooseFeature;
