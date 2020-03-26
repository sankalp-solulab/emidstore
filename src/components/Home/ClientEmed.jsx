import React, { Component } from "react";
import Axios from "axios";
import { sentClientData } from "../../actions/client";
import { connect } from "react-redux";
import Clients from "./Clients.jsx";
class ClientEmed extends Component {
  componentDidMount() {
    import("../../assets/json/clients.json").then(res => {
      console.log("res", res.default);
      this.props.sentClientData(res.default);
    });
  }
  handleData() {
    console.log(this.props);
  }
  render() {
    return (
      <section className="clientemedstore bg-gray">
        {/* {this.props.data} */}

        <div className="container">
          <div className="section-title">
            <h2>Our clients</h2>
          </div>
          <Clients />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  console.log("map", state.clientReducer.data);
};
// ({ data: state.clientReducer.data });
const mapDispatchToProps = dispatch => ({
  sentClientData: data => {
    dispatch(sentClientData(data));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(ClientEmed);
