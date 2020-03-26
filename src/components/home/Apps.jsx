import React, { Component } from "react";
import App from "./App.jsx";
import { getApp } from "../../Actions/Home/App.js";
import { connect, useDispatch } from "react-redux";
class Apps extends Component {
  componentWillMount() {
    this.props.getapp();
  }
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
const mapDispatchToProps = dispatch => ({
  getapp: () => dispatch(getApp())
});
export default connect(null, mapDispatchToProps)(Apps);
