import React, { Component } from "react";
import App from "./App.jsx";
class Apps extends Component {
  render() {
    return (
      <div className="row">
        <App />
        <App />
        <App />
      </div>
    );
  }
}
export default Apps;
