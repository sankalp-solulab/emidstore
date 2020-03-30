import React, { Component } from "react";
import Resources from "../Home/Resources/Resourses.jsx";
import Aboutusbanner from "./AboutUSbanner.jsx";
import Customer from "./Customers.jsx";
import Pillers from "./Pillers.jsx";
import Healthcare from "./Healthcare.jsx";
import Delivered_projects from "./delivered_projects.jsx";
import Vission_Mission from "./Vision_Mission.jsx";
import Contact from "./Contact.jsx";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions/index";
import BenifitsHome from "../Home/Benefits/BenifitsHome.jsx";

class AboutUS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limitdata: 3,
      increment: 3,
      index: 0
    };
  }

  componentDidMount() {
    this.props.get_pillers();
    this.props.get_customer();
    this.props.get_healthcare();
  }
  componentDidUpdate() {
    console.log("update", this.props.cust);
    console.log("data1", this.props.pill);
    console.log("data1", this.props.health);
  }
  handleDataLimit() {
    this.setState({
      limitdata: this.state.limitdata + this.state.increment
    });
  }

  render() {
    return (
      <div>
        <div>
          <Aboutusbanner />{" "}
        </div>
        <div className="main-container">
          <section className="aboutemedstore">
            <div className="container">
              <div className="row">
                <div
                  className="col-sm-6 wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                  data-wow-offset={10}
                >
                  {/* <div class="section-inner-title">
                <h3>Video</h3>
           </div> */}
                  <div className="sec-detail mar-bot20">
                    <iframe
                      width="100%"
                      height={400}
                      src="https://www.youtube.com/embed/K4wEI5zhHB0"
                      frameBorder={0}
                      allowFullScreen
                    />
                  </div>
                </div>
                <div
                  className="col-sm-6 wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                  data-wow-offset={10}
                >
                  <div className="section-inner-title">
                    <h3>About EMedStore</h3>
                  </div>
                  <div className="sec-detail mar-bot20">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed rutrum blandit cursus. Sed placerat ante et nisi
                      bibendum euismod. Praesent luctus placerat gravida. Donec
                      erat sapien, mattis id ipsum a, elementum ullamcorper
                      nulla. Ut congue molestie dui, id vehicula magna mattis
                      eget. Nunc eu molestie orci, sed mattis sem. Nam dictum
                      leo quam, ut vulputate magna laoreet ut.
                    </p>
                    <a
                      className="btn btn-primary btn-sm mar-top15"
                      target="_blank"
                      href="http://emedstore.in/EMedStore_Brochure.pdf"
                    >
                      <span className="icon fa fa-file-pdf-o" /> Download
                      Broucher
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Delivered_projects />
          <Vission_Mission />
          {/* customer-start */}
          <BenifitsHome></BenifitsHome>
          {/* customer-stop */}
          {/* Piller-start */}
          <section className="pillersemedstore bg-primary">
            <div className="container">
              <div className="section-title">
                <h2>
                  Pillers
                  <span>
                    Our fervour for every project that comes across is how the
                    USP can be defined in single pharse.
                    <br /> But we believe in teaming, and that's how the vigour
                    bonds with these:
                  </span>
                </h2>
              </div>

              {this.props.pill != null
                ? this.props.pill.map(res => {
                    return <Pillers pill={res} />;
                  })
                : null}
            </div>
          </section>

          {/* Pillers -stop */}
          {/* Healthcare -start */}
          <section className="dedicatedemedstore bg-gray">
            <div className="container">
              <div className="section-title">
                <h2>Dedicated resource for healthcare</h2>
              </div>

              <Resources></Resources>
            </div>
          </section>

          {/* Healthcare -stop */}
          <Contact />
        </div>
      </div>
    );
  }
}
//const mapStateToProps =(state)=>{console.log('map',state.reducerName.data)}

const mapStateToProps = state => ({
  // console.log('map',state.Aboutus.AboutAction);
  pill: state.Aboutus.AboutAction,
  cust: state.Aboutus.Customer,
  health: state.Aboutus.Health
});
const mapDispatchToProps = dispatch => ({
  get_pillers: () => dispatch(actions.get_pillers()),
  get_customer: () => dispatch(actions.get_customer()),
  get_healthcare: () => dispatch(actions.get_healthcare())
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AboutUS)
);
