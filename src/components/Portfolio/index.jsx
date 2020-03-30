import React, { Component } from "react";
import img from "../../assets/images/portfoliobanner.png";
import PortfolioData from "./PortfolioData/index.jsx";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import Form from "../ContactUs/form.jsx";
//import { withRouter } from "react-router-dom";

class Portfolio extends Component {
  state = {
    portfolioList: null
  };

  componentWillMount() {
    this.props.getPortfolioDetails();
  }

  componentDidUpdate() {
    if (this.state.portfolioList == null) {
      this.setState({
        portfolioList: this.props.portfolioList
      });
    }
  }

  categoryHadler = e => {
    if (e.target.innerText == "All") {
      var data_filter = this.props.portfolioList;
    } else {
      var data_filter = this.props.portfolioList.filter(
        element => element.category == e.target.innerText
      );
    }

    this.setState({
      portfolioList: data_filter
    });
  };

  render() {
    console.log("data", this.props.portfolioList);

    return (
      <div>
        <div className="innerbanner">
          <div className="banner" style={{ background: `url(${img})` }}>
            <div className="banner-text">
              <h1>
                See Our Wide Range of Innovative Apps Developed from Creative
                Ideas
              </h1>
              {/* <h2>Empower people through technology and innovative solutions</h2> */}
            </div>
          </div>
        </div>
        <div className="main-container">
          <section className="portfolio-sec">
            <div className="container">
              <div className="category">
                <ul className="gray">
                  <li>
                    <a onClick={e => this.categoryHadler(e)}>All</a>
                  </li>
                  <li>
                    <a onClick={e => this.categoryHadler(e)}>iso</a>
                  </li>
                  <li>
                    <a onClick={e => this.categoryHadler(e)}>Android</a>
                  </li>
                  <li>
                    <a onClick={e => this.categoryHadler(e)}>Web</a>
                  </li>
                </ul>
              </div>

              {this.state.portfolioList != null
                ? this.state.portfolioList.map(res => {
                    return <PortfolioData key={res.id} data={res} />;
                  })
                : null}

              <div className="row">
                {/* <div className="col-sm-12 text-center mar-top30">
                  <a href="#" className="btn btn-sm btn-primary">
                    Load More
                  </a>
                </div> */}
              </div>
            </div>
          </section>
          <section id="contacts" className="contactemedstore gray-bg">
            <div className="container">
              <div className="section-title">
                <h2>Request a demo</h2>
              </div>
              <p className="text-center">
                Thank you for your interest in EMedStore and our services.
                Please fill out the form below or e-mail us at{" "}
                <a href="mailto:contact@emedstore.com" className="theme-color">
                  contact@emedstore.com
                </a>{" "}
                and we will get back to you promptly regarding your request.
              </p>
              <div className="contactForm-body">
                <div id="contacts-form-wrapper">
                  <Form></Form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ Portfolio }) => {
  const { portfolioList } = Portfolio;
  return { portfolioList };
};

const mapDispatchToProps = dispatch => ({
  getPortfolioDetails: () => dispatch(actions.getPortfolioDetails())
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
