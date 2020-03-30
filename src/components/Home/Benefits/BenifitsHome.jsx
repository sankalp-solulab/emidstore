import React, { Component } from "react";
import Benifits from "./Benifits.jsx";
import { connect } from "react-redux";
import { sentBenefitsData } from "../../../actions/Home";
class BenifitsHome extends Component {
  componentDidMount() {
    this.props.sentBenefitsData();
  }
  render() {
    const data = this.props.data || [];
    return (
      <section className="benefitsofemedstore">
        <div className="container">
          <div className="section-title">
            <h2>The Benefits of app business and customers</h2>
          </div>
        </div>
        {data.map((value, index) => {
          return (
            <Benifits
              key={value.id}
              img={value.img}
              name={value.name}
              text={value.text}
            />
          );
        })}
      </section>
    );
  }
}

const mapStateToProps = state => ({ data: state.Home.benefits });

const mapDispatchToProps = dispatch => ({
  sentBenefitsData: () => {
    dispatch(sentBenefitsData());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BenifitsHome);
