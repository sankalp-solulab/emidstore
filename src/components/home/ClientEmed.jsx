import React, { Component } from "react";
class ClientEmed extends Component {
  render() {
    return (
      <section className="clientemedstore bg-gray">
        <div className="container">
          <div className="section-title">
            <h2>Our clients</h2>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="client text-center">
                <img
                  className="mar-bot30"
                  src={require("../../assets/images/autoportal.png")}
                ></img>

                {/* <img src="images/autoportal.png" className="mar-bot30" /> */}
                <h3>UBS, Mobile Banking App</h3>
                <p>
                  The purpose of the UBS mobile banking app is to help people
                  make financial decisions. Yalantis team created the iOS app
                  for the banking company.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="client text-center">
                <img
                  className="mar-bot30"
                  src={require("../../assets/images/autoportal.png")}
                ></img>

                {/* <img src="images/autoportal.png" className="mar-bot30" /> */}
                <h3>Zillow, Real Estate Products</h3>
                <p>
                  For the last 4 years Yalantis has been Zillow’s reliable
                  mobile app development partner. One of the latest projects we
                  worked on is StreetEasy, a real estate app for selling
                  properties in NYC.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="client text-center">
                <img
                  className="mar-bot30"
                  src={require("../../assets/images/autoportal.png")}
                ></img>

                {/* <img src="images/autoportal.png" className="mar-bot30" /> */}
                <h3>Autoportal, Mobile Marketplace</h3>
                <p>
                  Autoportal is the largest online service for people looking
                  for cars in India. Yalantis team developed iOS and Android
                  apps to help Autoportal improve their position within the
                  Indian car market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ClientEmed;
