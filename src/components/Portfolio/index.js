import React, { Component } from "react";
import img from '../../assets/images/portfoliobanner.png';
import PortfolioData from "./PortfolioData";
import {connect} from 'react-redux';
import * as actions from '../../actions/index'; 
import { withRouter } from "react-router-dom";

class Portfolio extends Component {
  componentWillMount(){
    this.props.portfolioRequest();
  }
  render() {
    console.log("data", this.props.portfolioList);

    return (
      <div>
        <div> 
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
          <title>
            Pharmacies Mobile App, Online App for Pharma Stores | EMedStore
          </title>
          {/* Favicon */}
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="../../assets/images/favicon.png"
          />
          {/* Theme Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Prompt:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
            rel="stylesheet"
            type="text/
  css"
          />
          <link href="../../assets/css/fix-scroll.css" rel="stylesheet" />
          <link href="../../assets/css/map.css" rel="stylesheet" />
          {/* Bootstrap */}
          <link href="../../assets/css/bootstrap/bootstrap.css" rel="stylesheet" />
          {/* Owl Carousel */}
          <link href="../../assets/css/owl-carousel/owl.carousel.css" rel="stylesheet" />
          <link href="../../assets/css/owl-carousel/owl.theme.css" rel="stylesheet" />
          <link href="../../assets/css/owl-carousel/owl.transitions.css" rel="stylesheet" />
          {/* Theme Css */}
          <link href="../../assets/css/style.css" rel="stylesheet" />
          <link href="../../assets/css/responsive.css" rel="stylesheet" />
          {/* Animation Css */}
          <link href="../../assets/css/animation.css" rel="stylesheet" />
          {/* Wow Css */}
          <link href="../../assets/css/animation/animate.css" rel="stylesheet" />
          {/* FontAwesome */}
          <link href="../../assets/fonts/fontawesome/font-awesome.css" rel="stylesheet" />
          {/* IE10 viewport hack for Surface/desktop Windows 8 bug */}
          <link
            href="../../assets/css/bootstrap/ie10-viewport-bug-workaround.css"
            rel="stylesheet"
          />
          {/* Just for debugging purposes. Don't actually copy these 2 lines! */}
          {/*[if lt IE 9]><![endif]*/}
          {/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries */}
          {/*[if lt IE 9]>
    
    
        <![endif]*/}
        </div>

        <header className="home-page-header">
          <div className="header-container header-home">
            <nav className="navbar navbar-static-top">
              <div className="container">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-expanded="false"
                    aria-controls="navbar"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a className="navbar-brand" href="index.php">
                  <img src={require('../../assets/images/logo.png')} alt="Logo" />
                  </a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav navbar-right f-size18">
                    <li>
                      <a href="portfolio.php">Portfolio</a>
                    </li>
                    <li className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Services
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">Design</a>
                        </li>
                        <li>
                          <a href="#">Development</a>
                        </li>
                        <li>
                          <a href="#">Digital Marketing</a>
                        </li>
                        <li>
                          <a href="#">Hosting</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.php">Blog</a>
                    </li>
                    <li>
                      <a href="aboutus.php">About</a>
                    </li>
                    <li className="dropdown megadropdown hidden-below-991">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Company
                      </a>
                      <div className="dropdown-menu megamenu">
                        <div className="container">
                          <div className="row">
                            <div className="col-sm-3">
                              <div className="megamenuheading">
                                <h4>COPMANY</h4>
                              </div>
                              <ul className="megamenusubmenu">
                                <li>
                                  <a href="#">Overview</a>
                                </li>
                                <li>
                                  <a href="#">Our Pathfinders</a>
                                </li>
                                <li>
                                  <a href="#">Corporate Facts</a>
                                </li>
                                <li>
                                  <a href="#">Our Values</a>
                                </li>
                                <li>
                                  <a href="#">Infrastructure</a>
                                </li>
                                <li>
                                  <a href="#">Global Presence</a>
                                </li>
                                <li>
                                  <a href="#">Locate us</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-3">
                              <div className="megamenuheading">
                                <h4>INSIGHT</h4>
                              </div>
                              <ul className="megamenusubmenu">
                                <li>
                                  <a href="#">Client Testimonial</a>
                                </li>
                                <li>
                                  <a href="#">Corporate Identity</a>
                                </li>
                                <li>
                                  <a href="#">Partnership</a>
                                </li>
                                <li>
                                  <a href="#">Certificates &amp; Alliances</a>
                                </li>
                                <li>
                                  <a href="#">Media Coverage</a>
                                </li>
                                <li>
                                  <a href="#">Global Events</a>
                                </li>
                                <li>
                                  <a href="#">Blog</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-3">
                              <div className="megamenuheading">
                                <h4>WE’RE HIRING</h4>
                                <span>
                                  Get to work in an amazing work environment,
                                  supportive team which fosters growth
                                </span>
                              </div>
                              <ul className="megamenusubmenu">
                                <li>
                                  <a href="#">Life @ EMedStore </a>
                                </li>
                                <li>
                                  <a href="#">Celebrations</a>
                                </li>
                              </ul>
                              <a href="#" className="megamenubtn">
                                Current Job Opportunities
                              </a>
                            </div>
                            <div className="col-sm-3 hidden-below-991">
                              <iframe
                                width={280}
                                height={160}
                                src="https://www.youtube.com/embed/zSeeO41oseE"
                                frameBorder={0}
                                gesture="media"
                                allowFullScreen
                              />
                              <span className="underiframe">
                                Get an insight about what do we do better than
                                any of our competitors
                              </span>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-3">
                              <div className="megamenuheading">
                                <h4>WHY EMedStore</h4>
                              </div>
                              <ul className="megamenusubmenu">
                                <li>
                                  <a href="#">Why EMedStore</a>
                                </li>
                                <li>
                                  <a href="#">Awards &amp; Accolades</a>
                                </li>
                                <li>
                                  <a href="#">Quality Policy</a>
                                </li>
                                <li>
                                  <a href="#">Center of Excellence</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-3">
                              <div className="megamenuheading">
                                <h4>EMEDSTORE DISCIPLINES</h4>
                                <span className="hidden-below-991">
                                  Our disciplines provide specific value to our
                                  clients. They sit at the core of all our
                                  services and offerings.
                                </span>
                              </div>
                              <ul className="megamenusubmenu">
                                <li>
                                  <a href="#">Development</a>
                                </li>
                                <li>
                                  <a href="#">Delivery</a>
                                </li>
                                <li>
                                  <a href="#">Pricing</a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-3 hidden-below-991">
                              <div className="bloctemplate">
                                <a href="#">
                                  <img src="images/car.png" />
                                  <div className="templatedetails">
                                    <h4>Partner with Us</h4>
                                    <span>and enjoy the benefits</span>
                                  </div>
                                </a>
                              </div>
                              <div className="bloctemplate">
                                <img src="../../assets/images/car.png" />
                                <div className="templatedetails">
                                  <h4>+1-888-392-8831</h4>
                                  <span>
                                    <a href="mailto:info@emedstore.com">
                                      info@emedstore.com
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-3 hidden-below-991">
                              <img src="../../assets/images/iso.png" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown hidden-above-991">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Company
                      </a>
                      <ul className="dropdown-menu">
                        <li className="dropdown-submenu">
                          <a href="#" className="dropdown-toggle">
                            COMPANY
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">Overview</a>
                            </li>
                            <li>
                              <a href="#">Our Pathfinders</a>
                            </li>
                            <li>
                              <a href="#">Corporate Facts</a>
                            </li>
                            <li>
                              <a href="#">Our Values</a>
                            </li>
                            <li>
                              <a href="#">Infrastructure</a>
                            </li>
                            <li>
                              <a href="#">Global Presence</a>
                            </li>
                            <li>
                              <a href="#">Locate us</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a href="#" className="dropdown-toggle">
                            INSIGHT
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">Client Testimonial</a>
                            </li>
                            <li>
                              <a href="#">Corporate Identity</a>
                            </li>
                            <li>
                              <a href="#">Partnership</a>
                            </li>
                            <li>
                              <a href="#">Certificates &amp; Alliances</a>
                            </li>
                            <li>
                              <a href="#">Media Coverage/a&gt;</a>
                            </li>
                            <a href="#"></a>
                            <li>
                              <a href="#" />
                              <a href="#">Global Events</a>
                            </li>
                            <li>
                              <a href="#">Blog</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a href="#" className="dropdown-toggle">
                            WE’RE HIRING
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">Life @ EMedStore </a>
                            </li>
                            <li>
                              <a href="#">Celebrations</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a href="#" className="dropdown-toggle">
                            WHY EMedStore
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">Why EMedStore</a>
                            </li>
                            <li>
                              <a href="#">Awards &amp; Accolades</a>
                            </li>
                            <li>
                              <a href="#">Quality Policy</a>
                            </li>
                            <li>
                              <a href="#">Center of Excellence</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a href="#" className="dropdown-toggle">
                            EMEDSTORE DISCIPLINES
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">Development</a>
                            </li>
                            <li>
                              <a href="#">Delivery</a>
                            </li>
                            <li>
                              <a href="#">Pricing</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="contact">
                      <a href="contactus.php">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/*?php include('header-home.php'); ?*/}
        <div className="innerbanner">
          <div
            className="banner"
            style={{background: `url(${img})`}} >
          
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
                    <a className="active" href="#">
                      iOS
                    </a>
                  </li>
                  <li>
                    <a href="#">Android</a>
                  </li>
                  <li>
                    <a href="#">Web</a>
                  </li>
                </ul>
              </div>

              {
                Object.keys()
              }
              <PortfolioData />

              <div className="row">
                <div className="col-sm-12 text-center mar-top30">
                  <a href="#" className="btn btn-sm btn-primary">
                    Load More
                  </a>
                </div>
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
                  <form id="request-form">
                    <div className="row form-wrapper">
                      <div
                        className="col-md-6 col-sm-12 col-xs-12 contactForm-col form-wrapper"
                        id="edit-contact"
                      >
                        <div
                          className="contactForm-caption form-wrapper"
                          id="edit-title"
                        >
                          <h4>Contact details</h4>
                        </div>
                        <div className="contactForm-line">
                          <div className="contactForm-block contactForm-block--require">
                            <input
                              className="contactForm-input form-text inactive"
                              required
                              placeholder="Full Name"
                              type="text"
                              id="edit-name"
                              name="name"
                              defaultValue
                            />
                            <span
                              className="contactForm-correct"
                              title="Correct"
                            />
                            <span className="contactForm-del" title="Clear" />
                          </div>
                        </div>
                        <div className="contactForm-line">
                          <div className="contactForm-block">
                            <input
                              className="contactForm-input form-text inactive"
                              tabIndex={2}
                              type="text"
                              id="edit-company"
                              name="company"
                              defaultValue
                              placeholder="Company / Organization"
                            />
                          </div>
                        </div>
                        <div className="contactForm-line">
                          <div className="contactForm-block">
                            <input
                              className="contactForm-input inactive form-text"
                              tabIndex={3}
                              type="text"
                              id="edit-phone"
                              name="phone"
                              defaultValue
                              placeholder="Phone"
                            />
                          </div>
                        </div>
                        <div className="contactForm-line">
                          <div className="contactForm-block contactForm-block--require">
                            <input
                              className="contactForm-input inactive form-text required"
                              tabIndex={4}
                              type="text"
                              id="edit-email"
                              name="email"
                              defaultValue
                              placeholder="Email"
                              required
                            />
                            <span
                              className="contactForm-correct"
                              title="Correct"
                            />
                            <span className="contactForm-del" title="Clear" />
                          </div>
                        </div>
                        <div className="contactForm-line">
                          <div className="contactForm-block contactForm-block--require">
                            <select
                              placeholder="Country"
                              tabIndex={-1}
                              id="edit-country"
                              name="country"
                              className="form-select required"
                            >
                              <option value="US">United States</option>
                              <option value="GB">United Kingdom</option>
                              <option value="IN">India</option>
                            </select>
                            <div className="selectarrow">
                              <b />
                            </div>
                            <span
                              className="contactForm-correct"
                              title="Correct"
                            />
                            <span className="contactForm-del" title="Clear" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-sm-12 col-xs-12 contactForm-col form-wrapper"
                        id="edit-request"
                      >
                        <div
                          className="contactForm-caption form-wrapper"
                          id="edit-title--2"
                        >
                          <h4>Request details</h4>
                        </div>
                        <div className="contactForm-line">
                          <div className="contactForm-block contactForm-block--require">
                            <textarea
                              className="contactForm-textarea form-textarea required inactive"
                              tabIndex={6}
                              id="edit-message"
                              name="message"
                              placeholder="Please describe your requirements"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="form-actions form-wrapper text-center"
                        id="edit-actions--3"
                      >
                        <div
                          className="col-md-12 col-sm-12 col-xs-12 form-wrapper"
                          id="edit-grid--3"
                        >
                          <div
                            className="contactForm-button form-wrapper"
                            id="edit-button--3"
                          >
                            <button
                              type="submit"
                              className="contactForm-submit form-submit btn btn-lg btn-primary"
                              id="edit-submit--3"
                              name="op"
                              value="Submit"
                            >
                              Submit
                            </button>
                          </div>
                          <div
                            className="contactForm-note form-wrapper"
                            id="edit-note--3"
                          >
                            <span className="contactForm-sign">
                              <span className="contactForm-star">*</span>— means
                              required fields
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/*?php include('footer.php'); ?*/}
        {/*?php include('footer-script.php'); ?*/}
      </div>
    );
  }
}

const mapStateToProps = ({ Portfolio }) => {
    const { portfolioList } = Portfolio;
    return { portfolioList };
};

const mapDispatchToProps = dispatch => ({
      getPortfolioDetails: () => dispatch(actions.getPortfolioDetails()),
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Portfolio));