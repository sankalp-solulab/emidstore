import React, { Component } from "react";
class WhyChooseUs extends Component {
  render() {
    return (
      <section className="discover-count-sec">
        <div className="section-title">
          <h2>Why choose us?</h2>
        </div>
        <div className="inner">
          <ul className="discover-count-list">
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
            <li>
              <img src={require("../../assets/images/smartphone.png")}></img>
              {/* <img src="images/smartphone.png" /> */}
              <span className="count">
                <span
                  className=" timer count-title count-number"
                  data-to={400}
                  data-speed={5000}
                />
              </span>
              <span className="cnt">
                Mobile Apps
                <span>
                  (20+ apps with Million+ <br /> Downloads and featured on App{" "}
                  <br /> and Google Play Store)
                </span>
              </span>
            </li>
            <li>
              <img src={require("../../assets/images/suitcase.png")}></img>

              {/* <img src="images/suitcase.png" /> */}
              <span className="count">
                <span
                  className=" timer count-title count-number"
                  data-to={50}
                  data-speed={5000}
                />
              </span>
              <span className="cnt">
                Enterprise Projects
                <span>
                  300+ Websites (CMS, <br /> eCommerce, Other <br /> custom
                  projects)
                </span>
              </span>
            </li>
            <li>
              <img src={require("../../assets/images/people.png")}></img>

              {/* <img src="images/people.png" /> */}
              <span className="count">
                <span
                  className=" timer count-title count-number"
                  data-to={110}
                  data-speed={5000}
                />
              </span>
              <span className="cnt">
                Tech Evangelists
                <span>
                  (1+ Million Man-hours <br /> of experience)
                </span>
              </span>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
export default WhyChooseUs;
