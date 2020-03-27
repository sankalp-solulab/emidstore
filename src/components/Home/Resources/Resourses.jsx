import React, { Component } from "react";
import Resourse from "./Resourse.jsx";
import { connect } from "react-redux";
import { sentResourceData } from "../../../actions/Home";
class Resourses extends Component {
  componentDidMount() {
    this.props.sentResourceData();
  }

  render() {
    const data = this.props.data || [];
    return (
      <div className="row">
        {data.map((value, index) => {
          // {
          //   console.log("jsx", value, index);
          // }
          return (
            <Resourse
              key={value.id}
              img={value.img}
              name={value.name}
              text={value.text}
            />
          );
        })}
        {/* <Resourse /> */}
        {/* <Resourse /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.Home.data
});
const mapDispatchToProps = dispatch => ({
  sentResourceData: () => dispatch(sentResourceData())
});
export default connect(mapStateToProps, mapDispatchToProps)(Resourses);
