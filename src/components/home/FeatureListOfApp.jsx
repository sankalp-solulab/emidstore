import React, { Component } from "react";
class FeatureListOfApp extends Component {
  render() {
    return (
      <section className="featurelistemedstore">
        <div className="container">
          <div className="section-title">
            <h2>Feature list of app</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mobileslider">
                <div className="mobile">
                  <img src={require("../../assets/images/mobile.png")}></img>
                  {/* <img src="images/mobile.png" /> */}
                </div>
                <div className="owl-carousel owl-theme">
                  <div className="item">
                    <img src={require("../../assets/images/1.jpg")}></img>

                    {/* <img src="images/1.jpg" /> */}
                  </div>
                  <div className="item">
                    <img src={require("../../assets/images/2.jpg")}></img>

                    {/* <img src="images/2.jpg" /> */}
                  </div>
                  <div className="item">
                    <img src={require("../../assets/images/3.jpg")}></img>

                    {/* <img src="images/3.jpg" /> */}
                  </div>
                  <div className="item">
                    <img src={require("../../assets/images/4.jpg")}></img>

                    {/* <img src="images/4.jpg" /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mar-top30">
              <div className="row">
                <div className="col-sm-6">
                  <div className="list-of-feature">
                    <img src={require("../../assets/images/car.png")}></img>

                    {/*                 <img src={require("../assets/images/car.png")}></img>
                     */}
                    <h3>Ride Now</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="list-of-feature">
                    <img src={require("../../assets/images/car.png")}></img>

                    {/*                 <img src={require("../assets/images/car.png")}></img>
                     */}
                    <h3>Ride Now</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="list-of-feature">
                    <img src={require("../../assets/images/car.png")}></img>

                    {/*                 <img src={require("../assets/images/car.png")}></img>
                     */}
                    <h3>Ride Now</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="list-of-feature">
                    <img src={require("../../assets/images/car.png")}></img>

                    {/*                 <img src={require("../assets/images/car.png")}></img>
                     */}
                    <h3>Ride Now</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="list-of-feature">
                    <img src={require("../../assets/images/car.png")}></img>

                    {/*                 <img src={require("../assets/images/car.png")}></img>
                     */}
                    <h3>Ride Now</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="list-of-feature">
                    <img src={require("../../assets/images/car.png")}></img>

                    {/*                 <img src={require("../assets/images/car.png")}></img>
                     */}
                    <h3>Ride Now</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="list-of-feature">
                    <img src={require("../../assets/images/car.png")}></img>

                    {/* <img src="images/car.png" /> */}
                    <h3>Ride Now</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="list-of-feature">
                    <img src={require("../../assets/images/car.png")}></img>

                    {/* <img src="images/car.png" /> */}
                    <h3>Ride Now</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12">
                  <a href="#" className="btn btn-sm btn-primary">
                    Show More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default FeatureListOfApp;
