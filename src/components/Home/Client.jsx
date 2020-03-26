import React, { Component } from "react";
class Client extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="client text-center">
          <img
            className="mar-bot30"
            src={require("../../assets/images/autoportal.png")}
          ></img>

          {/* <img src="images/autoportal.png" className="mar-bot30" /> */}
          <h3>UBS, Mobile Banking App</h3>
          <p>
            The purpose of the UBS mobile banking app is to help people make
            financial decisions. Yalantis team created the iOS app for the
            banking company.
          </p>
        </div>
      </div>
    );
  }
}
export default Client;
