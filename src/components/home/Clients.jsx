import React, { Component } from "react";
import Client from "./Client.jsx";
class Clients extends Component {
  render() {
    return (
      <div className="row">
        <Client />
        <Client />
        <Client />
      </div>
    );
  }
}
export default Clients;
