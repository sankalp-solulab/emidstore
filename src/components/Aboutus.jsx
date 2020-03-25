import React, { Component } from "react";
import Aboutusbanner from "./AboutUSbanner.jsx";
import Header from './header.jsx';
import Header_home from './Header_home.jsx';
import Footer from './Footer.jsx';

class AboutUS extends Component {
  render() {
    return (
      <div>
        <div>
        <Header/>
        </div>
        <div>
        <Header_home/>
        </div>
        <div>
        <Aboutusbanner /> </div>
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
          <section className="deliveremedstore bg-gray">
            <div className="container">
              <div className="section-title">
                <h2>
                  Delivered over 5250 projects
                  <span>
                    Our portfolio ranges across diverse industries, companies
                    and geography with strict adherence to high quality and time
                  </span>
                </h2>
              </div>
              <div className="flipboxes">
                <div className="flipboxfirst">
                  <div className="flip-horizontal">
                    <div className="front">
                      <img
                        src={require("../assets/images/onefront.jpg")}
                        alt
                      ></img>
                    </div>
                    <div className="back">
                      <img src={require("../assets/images/oneback.jpg")} alt />
                    </div>
                  </div>
                </div>
                <div className="flipboxmiddle">
                  <div className>
                    <div className="middleone">
                      <div className="flip-vertical">
                        <div className="front">
                          <img
                            src={require("../assets/images/twofront.jpg")}
                            alt
                          />
                        </div>
                        <div className="back">
                          <img
                            src={require("../assets/images/twofront.jpg")}
                            alt
                          />
                        </div>
                      </div>
                    </div>
                    <div className="middletwo">
                      <div className="flip-vertical">
                        <div className="front">
                          <img
                            src={require("../assets/images/threefront.jpg")}
                            alt
                          />
                        </div>
                        <div className="back">
                          <img
                            src={require("../assets/images/threeback.jpg")}
                            alt
                          />
                        </div>
                      </div>
                    </div>
                    <div className="middlethree">
                      <div className="flip-vertical">
                        <div className="front">
                          <img
                            src={require("../assets/images/fourfront.jpg")}
                            alt
                          />
                        </div>
                        <div className="back">
                          <img
                            src={require("../assets/images/fourback.jpg")}
                            alt
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flipboxlast">
                  <div className="flip-horizontal">
                    <div className="front">
                      <img
                        src={require("../assets/images/fivefront.jpg")}
                        alt
                      />
                    </div>
                    <div className="back">
                      <img src={require("../assets/images/fiveback.jpg")} alt />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 text-center">
                  <a
                    href="#contacts"
                    className="btn btn-primary btn-sm mar-top30 mar-bot20"
                  >
                    Request a demo
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="tablistemedstore">
            <div className="container">
              <div className="flexboxes">
                <div className="flexboxe flex-heading bg-primary">
                  <h2>
                    <span>OUR</span> VISION
                  </h2>
                </div>
                <div className="flexboxe">
                  <img src={require("../assets/images/itconsulting.jpg")} />
                  <h3>IT Consulting</h3>
                  <p>
                    IT Consulting is a holistic entity that has changed the face
                    of businesses across various domains. With our proven
                    delivery models and rich experience in converting business
                    needs into IT systems, we offer a wide range of IT
                    consultation.
                  </p>
                </div>
                <div className="flexboxe">
                  <img src={require("../assets/images/cloud.jpg")} />
                  <h3>Cloud Integration</h3>
                  <p>
                    Cloud integration is way easier than other models due to the
                    ready middleware or software that reduces the effort and
                    complexity involved in manual programming. We provide both
                    on-premises to Cloud or Cloud to Cloud and
                    Business-to-Business integration services.
                  </p>
                </div>
                <div className="flexboxe">
                  <img src={require("../assets/images/embeded.jpg")} />
                  <h3>Embedded Services</h3>
                  <p>
                    Facilitate high adaptability for newer technologies and
                    reduce time-to-market to survive the competition. Our
                    well-strategized methodology and technical expertise has
                    aided many enterprises with the smartest and best possible
                    embedded solutions.
                  </p>
                </div>
              </div>
              <div className="flexboxes">
                <div className="flexboxe flex-heading bg-primary">
                  <h2>
                    <span>OUR</span> MISSION
                  </h2>
                </div>
                <div className="flexboxe">
                  <img src={require("../assets/images/itconsulting.jpg")} />
                  <h3>IT Consulting</h3>
                  <p>
                    IT Consulting is a holistic entity that has changed the face
                    of businesses across various domains. With our proven
                    delivery models and rich experience in converting business
                    needs into IT systems, we offer a wide range of IT
                    consultation.
                  </p>
                </div>
                <div className="flexboxe">
                  <img src={require("../assets/images/cloud.jpg")} />
                  <h3>Cloud Integration</h3>
                  <p>
                    Cloud integration is way easier than other models due to the
                    ready middleware or software that reduces the effort and
                    complexity involved in manual programming. We provide both
                    on-premises to Cloud or Cloud to Cloud and
                    Business-to-Business integration services.
                  </p>
                </div>
                <div className="flexboxe">
                  <img src={require("../assets/images/embeded.jpg")} />
                  <h3>Embedded Services</h3>
                  <p>
                    Facilitate high adaptability for newer technologies and
                    reduce time-to-market to survive the competition. Our
                    well-strategized methodology and technical expertise has
                    aided many enterprises with the smartest and best possible
                    embedded solutions.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="benefitsofemedstore bg-gray">
            <div className="container">
              <div className="section-title">
                <h2>
                  The Benefits of app <br />
                  business and customers
                </h2>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="benefits">
                    <img src={require("../assets/images/car.png")} />
                    <div className="detailsbenefits">
                      <h3>Scalabele to requirement</h3>
                      <p>
                        This ingenious iPhone app lets users scan keys then
                        order new ones from a kiosk, as part of a partnership.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="benefits">
                    <img src={require("../assets/images/car.png")} />
                    <div className="detailsbenefits">
                      <h3>Scalabele to requirement</h3>
                      <p>
                        This ingenious iPhone app lets users scan keys then
                        order new ones from a kiosk, as part of a partnership.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="benefits">
                    <img src={require("../assets/images/car.png")} />
                    <div className="detailsbenefits">
                      <h3>Scalabele to requirement</h3>
                      <p>
                        This ingenious iPhone app lets users scan keys then
                        order new ones from a kiosk, as part of a partnership.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="benefits">
                    <img src={require("../assets/images/car.png")} />
                    <div className="detailsbenefits">
                      <h3>Scalabele to requirement</h3>
                      <p>
                        This ingenious iPhone app lets users scan keys then
                        order new ones from a kiosk, as part of a partnership.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="benefits">
                    <img src={require("../assets/images/car.png")} />
                    <div className="detailsbenefits">
                      <h3>Scalabele to requirement</h3>
                      <p>
                        This ingenious iPhone app lets users scan keys then
                        order new ones from a kiosk, as part of a partnership.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="benefits">
                    <img src={require("../assets/images/car.png")} />
                    <div className="detailsbenefits">
                      <h3>Scalabele to requirement</h3>
                      <p>
                        This ingenious iPhone app lets users scan keys then
                        order new ones from a kiosk, as part of a partnership.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
              <div className="row">
                <div className="col-sm-4">
                  <div className="piller bg-white">
                    <span className="number">1</span>
                    <h3>Expertise</h3>
                    <p>
                      We have requisite experience and knowledge of working with
                      the top brands leaders across the globe.
                    </p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="piller bg-white">
                    <span className="number">2</span>
                    <h3>Expertise</h3>
                    <p>
                      We have requisite experience and knowledge of working with
                      the top brands leaders across the globe.
                    </p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="piller bg-white">
                    <span className="number">3</span>
                    <h3>Expertise</h3>
                    <p>
                      We have requisite experience and knowledge of working with
                      the top brands leaders across the globe.
                    </p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="piller bg-white">
                    <span className="number">4</span>
                    <h3>Expertise</h3>
                    <p>
                      We have requisite experience and knowledge of working with
                      the top brands leaders across the globe.
                    </p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="piller bg-white">
                    <span className="number">5</span>
                    <h3>Expertise</h3>
                    <p>
                      We have requisite experience and knowledge of working with
                      the top brands leaders across the globe.
                    </p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="piller bg-white">
                    <span className="number">6</span>
                    <h3>Expertise</h3>
                    <p>
                      We have requisite experience and knowledge of working with
                      the top brands leaders across the globe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="dedicatedemedstore bg-gray">
            <div className="container">
              <div className="section-title">
                <h2>Dedicated resource for healthcare</h2>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="dedicated">
                    <div className="member">
                      <img
                        src={require("../assets/images/matches/user-img1.jpg")}
                      />
                    </div>
                    <div className="member-detail">
                      <h3>Daniel M. Foote</h3>
                      <h4>Sr. Tech Head</h4>
                      <p>
                        As a Tech Head, Daniel looks after the day to day
                        installation and operation of Mining Rigs. He plays a
                        important role in optimising efficiency of our Rigs.
                      </p>
                      <ul className="socialicons">
                        <li>
                          <a href="#" className="icon fa fa-facebook" />
                        </li>
                        <li>
                          <a href="#" className="icon fa fa-twitter" />
                        </li>
                        <li>
                          <a href="#" className="icon fa fa-linkedin" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="dedicated">
                    <div className="member">
                      <img
                        src={require("../assets/images/matches/user-img1.jpg")}
                      />
                    </div>
                    <div className="member-detail">
                      <h3>Daniel M. Foote</h3>
                      <h4>Sr. Tech Head</h4>
                      <p>
                        As a Tech Head, Daniel looks after the day to day
                        installation and operation of Mining Rigs. He plays a
                        important role in optimising efficiency of our Rigs.
                      </p>
                      <ul className="socialicons">
                        <li>
                          <a href="#" className="icon fa fa-facebook" />
                        </li>
                        <li>
                          <a href="#" className="icon fa fa-twitter" />
                        </li>
                        <li>
                          <a href="#" className="icon fa fa-linkedin" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="dedicated">
                    <div className="member">
                      <img
                        src={require("../assets/images/matches/user-img1.jpg")}
                      />
                    </div>
                    <div className="member-detail">
                      <h3>Daniel M. Foote</h3>
                      <h4>Sr. Tech Head</h4>
                      <p>
                        As a Tech Head, Daniel looks after the day to day
                        installation and operation of Mining Rigs. He plays a
                        important role in optimising efficiency of our Rigs.
                      </p>
                      <ul className="socialicons">
                        <li>
                          <a href="#" className="icon fa fa-facebook" />
                        </li>
                        <li>
                          <a href="#" className="icon fa fa-twitter" />
                        </li>
                        <li>
                          <a href="#" className="icon fa fa-linkedin" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 text-center">
                  <a
                    href="#"
                    className="btn btn-primary btn-lg mar-top30 mar-bot20"
                  >
                    Show More
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="ourofficeemedstore">
            <div className="container">
              <div className="section-title">
                <h2>Our Office Environment</h2>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="grid" id="grid">
                    <div className="grid-style-1" id="grid-container">
                      <div className="grid-wrapper" id="grid-wrapper">
                        <span className="grid-item" />
                        <span className="grid-item" />
                        <span className="grid-item" />
                        <span className="grid-item" />
                        <span className="grid-item" />
                        <span className="grid-item" />
                      </div>
                    </div>
                  </div>
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
        <Footer/>
       
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>   
<script src="js/bootstrap/bootstrap.min.js"></script>
<script src="js/bootstrap/ie10-viewport-bug-workaround.js"></script>
<script src="js/owl-carousel/owl.carousel.min.js"></script>
<script src="js/animation/wow.min.js"></script>        
<script src="js/animation/wow.init.js"></script>
<script src="js/easyResponsiveTabs.js"></script>
<script src="js/script.js"></script>
<script src="js/jQuery.scrollSpeed.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/main.js"></script>
<script src="js/waypoints.min.js"></script>




      </div>
    );
  }
}
export default AboutUS;
