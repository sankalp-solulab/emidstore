import React, { Component } from "react";
// import img from "../assets/images/header-bg-main";

class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <section className="aboutemedstore">
          <div className="container">
            <div className="row">
              <div
                className="col-sm-4 wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                data-wow-offset={10}
              >
                <div className="section-inner-title">
                  <h3>About EMedStore</h3>
                </div>
                <div className="sec-detail mar-bot20">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    rutrum blandit cursus. Sed placerat ante et nisi bibendum
                    euismod. Praesent luctus placerat gravida. Donec erat
                    sapien, mattis id ipsum a, elementum ullamcorper nulla. Ut
                    congue molestie dui, id vehicula magna mattis eget. Nunc eu
                    molestie orci, sed mattis sem. Nam dictum leo quam, ut
                    vulputate magna laoreet ut.
                  </p>
                  <a
                    className="btn btn-primary btn-sm mar-top15"
                    target="_blank"
                    href="http://emedstore.in/EMedStore_Brochure.pdf"
                  >
                    <span className="icon fa fa-file-pdf-o" /> Download Broucher
                  </a>
                </div>
              </div>
              <div
                className="col-sm-4 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                data-wow-offset={10}
              >
                <div className="section-inner-title">
                  <h3>Awards &amp; Achievements</h3>
                </div>
                <div className="sec-detail mar-bot20">
                  <img
                    className="mar-bot10"
                    // src="../assets/images/header-bg-main.jpg"
                    src={require("../assets/images/header-bg-main.jpg")}
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    rutrum blandit cursus. Sed placerat ante et nisi bibendum
                    euismod. Praesent luctus placerat gravida. Donec erat
                    sapien, mattis id ipsum a, elementum ullamcorper nulla. Ut
                    congue molestie dui, id vehicula magna mattis eget. Nunc eu
                    molestie orci, sed mattis sem. Nam dictum leo quam, ut
                    vulputate magna laoreet ut.
                  </p>
                </div>
              </div>
              <div
                className="col-sm-4 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                data-wow-offset={10}
              >
                <div className="section-inner-title">
                  <h3>Video</h3>
                </div>
                <div className="sec-detail mar-bot20">
                  <iframe
                    width="100%"
                    height={300}
                    src="https://www.youtube.com/embed/K4wEI5zhHB0"
                    frameBorder={0}
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="typeofemedstore bg-gray">
          <div className="container">
            <div className="section-title">
              <h2>Type of apps</h2>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="services-details__item services-details__item--strategy">
                  <div className="services-details__info">
                    <h4>Strategy</h4>
                    <p>
                      Our experts will brainstorm to understand the 3 driving
                      forces of the app: What you want built? Why you want it
                      built? Who is your intended end-user?{" "}
                    </p>
                  </div>
                  <div className="services-details__list-wrap">
                    <ul className="services-details__list">
                      <li>Understand the Idea</li>
                      <li>Niche Research</li>
                      <li>Validate feasibility</li>
                      <li>Outline Tech-Specs</li>
                      <li>Create Framework</li>
                      <li>Ensure Growth</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="services-details__item services-details__item--design">
                  <div className="services-details__info">
                    <h4>Design</h4>
                    <p>
                      We create simple, clean and uncluttered user-centric
                      designs. The only thing more important to our designers
                      than great design is creating the perfect user experience.{" "}
                    </p>
                  </div>
                  <div className="services-details__list-wrap">
                    <ul className="services-details__list">
                      <li>Design Wireframes</li>
                      <li>Animation and Video Enhancements</li>
                      <li>Responsive Designs</li>
                      <li>User Conversion</li>
                      <li>Brand Awareness</li>
                      <li>PR Campaigns</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="services-details__item services-details__item--development">
                  <div className="services-details__info">
                    <h4>Development</h4>
                    <p>
                      With the minimalist of codes, we strive to create the
                      biggest impact. The miserly approach to coding ensures the
                      app is packed with useful features.
                    </p>
                  </div>
                  <div className="services-details__list-wrap">
                    <ul className="services-details__list">
                      <li>Agile Development</li>
                      <li>Latest Technologies</li>
                      <li>Strong Architecture</li>
                      <li>Data Corroboration</li>
                      <li>Revenue Generation Strategies</li>
                      <li>Track User Behavior</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 text-center">
                <a
                  href="#contacts"
                  className="btn btn-primary btn-sm mar-top15 mar-bot20"
                >
                  Request a demo
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="featurelistemedstore">
          <div className="container">
            <div className="section-title">
              <h2>Feature list of app</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mobileslider">
                  <div className="mobile">
                    <img src={require("../assets/images/mobile.png")}></img>
                    {/* <img src="images/mobile.png" /> */}
                  </div>
                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <img src={require("../assets/images/1.jpg")}></img>

                      {/* <img src="images/1.jpg" /> */}
                    </div>
                    <div className="item">
                      <img src={require("../assets/images/2.jpg")}></img>

                      {/* <img src="images/2.jpg" /> */}
                    </div>
                    <div className="item">
                      <img src={require("../assets/images/3.jpg")}></img>

                      {/* <img src="images/3.jpg" /> */}
                    </div>
                    <div className="item">
                      <img src={require("../assets/images/4.jpg")}></img>

                      {/* <img src="images/4.jpg" /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mar-top30">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="list-of-feature">
                      <img src={require("../assets/images/car.png")}></img>

                      {/*                 <img src={require("../assets/images/car.png")}></img>
                       */}
                      <h3>Ride Now</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="list-of-feature">
                      <img src={require("../assets/images/car.png")}></img>

                      {/*                 <img src={require("../assets/images/car.png")}></img>
                       */}
                      <h3>Ride Now</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="list-of-feature">
                      <img src={require("../assets/images/car.png")}></img>

                      {/*                 <img src={require("../assets/images/car.png")}></img>
                       */}
                      <h3>Ride Now</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="list-of-feature">
                      <img src={require("../assets/images/car.png")}></img>

                      {/*                 <img src={require("../assets/images/car.png")}></img>
                       */}
                      <h3>Ride Now</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="list-of-feature">
                      <img src={require("../assets/images/car.png")}></img>

                      {/*                 <img src={require("../assets/images/car.png")}></img>
                       */}
                      <h3>Ride Now</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="list-of-feature">
                      <img src={require("../assets/images/car.png")}></img>

                      {/*                 <img src={require("../assets/images/car.png")}></img>
                       */}
                      <h3>Ride Now</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="list-of-feature">
                      <img src={require("../assets/images/car.png")}></img>

                      {/* <img src="images/car.png" /> */}
                      <h3>Ride Now</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="list-of-feature">
                      <img src={require("../assets/images/car.png")}></img>

                      {/* <img src="images/car.png" /> */}
                      <h3>Ride Now</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <a href="#" className="btn btn-sm btn-primary">
                      Show More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="callaction bg-primary text-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="mar-top0">Claim your Pharmacy App Demo now</h2>
                <h3>Lorem Ipsum dolor sit amet</h3>
                <a
                  href="#contacts"
                  className="btn btn-primary btn-sm mar-top15 mar-bot20"
                >
                  Request a demo
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolioemedstore padd-top0 padd-bot0">
          <div className="home-projects full-height">
            <div
              className="home-project full-height bg-blue"
              data-home-project={1}
              id="two"
              data-anchor="two"
            >
              <div className="home-project__inner full-height">
                <div className="home-project__clip">
                  <div className="home-project__phone">
                    <div className="phone__responsive">
                      <div className="phone__responsive__inner">
                        <div className="phone__responsive__bg">
                          <div
                            className="responsive__bg__wrap"
                            data-reveal-bg={1}
                          >
                            <div className="section-title hidden-below-768">
                              <h2>Few our Favourites</h2>
                            </div>
                            <img
                              src={require("../assets/images/mobile.png")}
                            ></img>
                            {/* <img
                              alt
                              aria-hidden="true"
                              width
                              height
                              src="images/mobile.png"
                            /> */}
                          </div>
                        </div>
                        <div className="phone__reveal">
                          <div
                            className="phone__reveal__wrap"
                            data-reveal-wrap={1}
                          >
                            <img src={require("../assets/images/1.jpg")}></img>
                            {/* <img src="images/1.jpg" /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrap">
                  <div className="home-project__content">
                    <div
                      className="home-project__desc text-center wow fadeInUp"
                      data-wow-delay=".5s"
                      data-wow-offset={10}
                    >
                      <img src={require("../assets/images/biglogo.png")}></img>
                      {/* <img src="images/biglogo.png" alt="App logo" /> */}
                      <h4>App Name</h4>
                      <a href="#" className="btn btn-primary">
                        Available <span>on the app store</span>{" "}
                      </a>
                    </div>
                    <div className="home-project__desc">
                      <h3
                        className="wow fadeInRight"
                        data-wow-delay=".7s"
                        data-wow-offset={10}
                      >
                        NEVER GET LOCKED OUT AGAIN
                      </h3>
                      <p
                        className="wow fadeInRight"
                        data-wow-delay=".9s"
                        data-wow-offset={10}
                      >
                        This ingenious iPhone app lets users scan keys then
                        order new ones from a kiosk, as part of a partnership
                        with 7-Eleven or at most hardware stores. The app
                        immediately drew acclaim from the tech press including
                        Wired, TechCrunch, All Things D, Gizmodo, Mashable and
                        The Verge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="home-project full-height bg-green"
              data-home-project={2}
              id="three"
              data-anchor="three"
            >
              <div className="home-project__inner full-height">
                <div className="home-project__clip">
                  <div className="home-project__phone">
                    <div className="phone__responsive">
                      <div className="phone__responsive__inner">
                        <div className="phone__responsive__bg">
                          <div
                            className="responsive__bg__wrap"
                            data-reveal-bg={2}
                          >
                            <div className="section-title hidden-below-768">
                              <h2>Few our Favourites</h2>
                            </div>
                            <img
                              src={require("../assets/images/mobile.png")}
                            ></img>
                            {/* <img
                              alt
                              aria-hidden="true"
                              width
                              height
                              src="images/mobile.png"
                            /> */}
                          </div>
                        </div>
                        <div className="phone__reveal">
                          <div
                            className="phone__reveal__wrap"
                            data-reveal-wrap={2}
                          >
                            <img src={require("../assets/images/2.jpg")}></img>
                            {/* <img src="images/2.jpg" /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrap">
                  <div className="home-project__content">
                    <div
                      className="home-project__desc text-center wow fadeInUp"
                      data-wow-delay=".5s"
                      data-wow-offset={10}
                    >
                      <img src={require("../assets/images/biglogo.png")}></img>

                      {/* <img src="images/biglogo.png" alt="App logo" /> */}
                      <h4>App Name</h4>
                      <a href="#" className="btn btn-primary">
                        Available <span>on the app store</span>{" "}
                      </a>
                    </div>
                    <div className="home-project__desc">
                      <h3
                        className="wow fadeInRight"
                        data-wow-delay=".7s"
                        data-wow-offset={10}
                      >
                        NEVER GET LOCKED OUT AGAIN
                      </h3>
                      <p
                        className="wow fadeInRight"
                        data-wow-delay=".9s"
                        data-wow-offset={10}
                      >
                        This ingenious iPhone app lets users scan keys then
                        order new ones from a kiosk, as part of a partnership
                        with 7-Eleven or at most hardware stores. The app
                        immediately drew acclaim from the tech press including
                        Wired, TechCrunch, All Things D, Gizmodo, Mashable and
                        The Verge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="home-project full-height bg-orange"
              data-home-project={3}
              id="four"
              data-anchor="four"
            >
              <div className="home-project__inner full-height">
                <div className="home-project__clip">
                  <div className="home-project__phone">
                    <div className="phone__responsive">
                      <div className="phone__responsive__inner">
                        <div className="phone__responsive__bg">
                          <div
                            className="responsive__bg__wrap"
                            data-reveal-bg={3}
                          >
                            <div className="section-title hidden-below-768">
                              <h2>Few our Favourites</h2>
                            </div>
                            <img
                              src={require("../assets/images/mobile.png")}
                            ></img>

                            {/* <img
                              alt
                              aria-hidden="true"
                              width
                              height
                              src="images/mobile.png"
                            /> */}
                          </div>
                        </div>
                        <div className="phone__reveal">
                          <div
                            className="phone__reveal__wrap"
                            data-reveal-wrap={3}
                          >
                            <img src={require("../assets/images/3.jpg")}></img>

                            {/* <img src="images/3.jpg" /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrap">
                  <div className="home-project__content">
                    <div
                      className="home-project__desc text-center wow fadeInUp"
                      data-wow-delay=".5s"
                      data-wow-offset={10}
                    >
                      <img src={require("../assets/images/biglogo.png")}></img>

                      {/* <img src="images/biglogo.png" alt="App logo" /> */}
                      <h4>App Name</h4>
                      <a href="#" className="btn btn-primary">
                        Available <span>on the app store</span>{" "}
                      </a>
                    </div>
                    <div className="home-project__desc">
                      <h3
                        className="wow fadeInRight"
                        data-wow-delay=".7s"
                        data-wow-offset={10}
                      >
                        NEVER GET LOCKED OUT AGAIN
                      </h3>
                      <p
                        className="wow fadeInRight"
                        data-wow-delay=".9s"
                        data-wow-offset={10}
                      >
                        This ingenious iPhone app lets users scan keys then
                        order new ones from a kiosk, as part of a partnership
                        with 7-Eleven or at most hardware stores. The app
                        immediately drew acclaim from the tech press including
                        Wired, TechCrunch, All Things D, Gizmodo, Mashable and
                        The Verge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="home-project full-height  bg-yellow"
              data-home-project={4}
              id="five"
              data-anchor="five"
            >
              <div className="home-project__inner full-height">
                <div className="home-project__clip">
                  <div className="home-project__phone">
                    <div className="phone__responsive">
                      <div className="phone__responsive__inner">
                        <div className="phone__responsive__bg">
                          <div
                            className="responsive__bg__wrap"
                            data-reveal-bg={4}
                          >
                            <div className="section-title hidden-below-768">
                              <h2>Few our Favourites</h2>
                            </div>
                            <img
                              src={require("../assets/images/mobile.png")}
                            ></img>

                            {/* <img
                              alt
                              aria-hidden="true"
                              width
                              height
                              src="images/mobile.png"
                            /> */}
                          </div>
                        </div>
                        <div className="phone__reveal">
                          <div
                            className="phone__reveal__wrap"
                            data-reveal-wrap={4}
                          >
                            <img
                              src={require("../assets/images/mobile.png")}
                            ></img>
                            <img src="images/4.jpg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrap">
                  <div className="home-project__content">
                    <div
                      className="home-project__desc text-center wow fadeInUp"
                      data-wow-delay=".5s"
                      data-wow-offset={10}
                    >
                      <img src={require("../assets/images/biglogo.png")}></img>
                      {/* <img src="images/biglogo.png" alt="App logo" /> */}
                      <h4>App Name</h4>
                      <a href="#" className="btn btn-primary">
                        Available <span>on the app store</span>{" "}
                      </a>
                    </div>
                    <div className="home-project__desc">
                      <h3
                        className="wow fadeInRight"
                        data-wow-delay=".7s"
                        data-wow-offset={10}
                      >
                        NEVER GET LOCKED OUT AGAIN
                      </h3>
                      <p
                        className="wow fadeInRight"
                        data-wow-delay=".9s"
                        data-wow-offset={10}
                      >
                        This ingenious iPhone app lets users scan keys then
                        order new ones from a kiosk, as part of a partnership
                        with 7-Eleven or at most hardware stores. The app
                        immediately drew acclaim from the tech press including
                        Wired, TechCrunch, All Things D, Gizmodo, Mashable and
                        The Verge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="benefitsofemedstore">
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
                  <img src={require("../assets/images/car.png")}></img>

                  {/* <img src="images/car.png" /> */}
                  <div className="detailsbenefits">
                    <h3>Scalabele to requirement</h3>
                    <p>
                      This ingenious iPhone app lets users scan keys then order
                      new ones from a kiosk, as part of a partnership.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="benefits">
                  <img src={require("../assets/images/car.png")}></img>

                  {/* <img src="images/car.png" /> */}
                  <div className="detailsbenefits">
                    <h3>Scalabele to requirement</h3>
                    <p>
                      This ingenious iPhone app lets users scan keys then order
                      new ones from a kiosk, as part of a partnership.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="benefits">
                  <img src={require("../assets/images/car.png")}></img>

                  <div className="detailsbenefits">
                    <h3>Scalabele to requirement</h3>
                    <p>
                      This ingenious iPhone app lets users scan keys then order
                      new ones from a kiosk, as part of a partnership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="benefits">
                  <img src={require("../assets/images/car.png")}></img>

                  <div className="detailsbenefits">
                    <h3>Scalabele to requirement</h3>
                    <p>
                      This ingenious iPhone app lets users scan keys then order
                      new ones from a kiosk, as part of a partnership.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="benefits">
                  <img src={require("../assets/images/car.png")}></img>

                  <div className="detailsbenefits">
                    <h3>Scalabele to requirement</h3>
                    <p>
                      This ingenious iPhone app lets users scan keys then order
                      new ones from a kiosk, as part of a partnership.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="benefits">
                  <img src={require("../assets/images/car.png")}></img>

                  <div className="detailsbenefits">
                    <h3>Scalabele to requirement</h3>
                    <p>
                      This ingenious iPhone app lets users scan keys then order
                      new ones from a kiosk, as part of a partnership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="discover-count-sec">
          <div className="section-title">
            <h2>Why choose us?</h2>
          </div>
          <div className="inner">
            <ul className="discover-count-list">
              <li>
                <img src={require("../assets/images/manager.png")}></img>

                {/* <img src="images/manager.png" /> */}
                <span className="count">
                  <span
                    className=" timer count-title count-number"
                    data-to={250}
                    data-speed={5000}
                  />
                </span>
                <span className="cnt">
                  Clients Served
                  <span>
                    (Across US, UK, Canada, <br /> Australia and India)
                  </span>
                </span>
              </li>
              <li>
                <img src={require("../assets/images/smartphone.png")}></img>
                {/* <img src="images/smartphone.png" /> */}
                <span className="count">
                  <span
                    className=" timer count-title count-number"
                    data-to={400}
                    data-speed={5000}
                  />
                </span>
                <span className="cnt">
                  Mobile Apps
                  <span>
                    (20+ apps with Million+ <br /> Downloads and featured on App{" "}
                    <br /> and Google Play Store)
                  </span>
                </span>
              </li>
              <li>
                <img src={require("../assets/images/suitcase.png")}></img>

                {/* <img src="images/suitcase.png" /> */}
                <span className="count">
                  <span
                    className=" timer count-title count-number"
                    data-to={50}
                    data-speed={5000}
                  />
                </span>
                <span className="cnt">
                  Enterprise Projects
                  <span>
                    300+ Websites (CMS, <br /> eCommerce, Other <br /> custom
                    projects)
                  </span>
                </span>
              </li>
              <li>
                <img src={require("../assets/images/people.png")}></img>

                {/* <img src="images/people.png" /> */}
                <span className="count">
                  <span
                    className=" timer count-title count-number"
                    data-to={110}
                    data-speed={5000}
                  />
                </span>
                <span className="cnt">
                  Tech Evangelists
                  <span>
                    (1+ Million Man-hours <br /> of experience)
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </section>
        <section className="dedicatedemedstore">
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
                    ></img>

                    {/* <img src="images/matches/user-img1.jpg" /> */}
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
                    ></img>

                    {/* <img src="images/matches/user-img1.jpg" /> */}
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
                    ></img>

                    {/* <img src="images/matches/user-img1.jpg" /> */}
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
        <section className="clientemedstore bg-gray">
          <div className="container">
            <div className="section-title">
              <h2>Our clients</h2>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="client text-center">
                  <img
                    className="mar-bot30"
                    src={require("../assets/images/autoportal.png")}
                  ></img>

                  {/* <img src="images/autoportal.png" className="mar-bot30" /> */}
                  <h3>UBS, Mobile Banking App</h3>
                  <p>
                    The purpose of the UBS mobile banking app is to help people
                    make financial decisions. Yalantis team created the iOS app
                    for the banking company.
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="client text-center">
                  <img
                    className="mar-bot30"
                    src={require("../assets/images/autoportal.png")}
                  ></img>

                  {/* <img src="images/autoportal.png" className="mar-bot30" /> */}
                  <h3>Zillow, Real Estate Products</h3>
                  <p>
                    For the last 4 years Yalantis has been Zillow’s reliable
                    mobile app development partner. One of the latest projects
                    we worked on is StreetEasy, a real estate app for selling
                    properties in NYC.
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="client text-center">
                  <img
                    className="mar-bot30"
                    src={require("../assets/images/autoportal.png")}
                  ></img>

                  {/* <img src="images/autoportal.png" className="mar-bot30" /> */}
                  <h3>Autoportal, Mobile Marketplace</h3>
                  <p>
                    Autoportal is the largest online service for people looking
                    for cars in India. Yalantis team developed iOS and Android
                    apps to help Autoportal improve their position within the
                    Indian car market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="worldwideemedstore bg-primary">
          <div className="container">
            <div className="section-title">
              <h2>Our world wide clients</h2>
            </div>
            <div className="page-home hidden-below-768">
              <div className="section section-map section-users ">
                <div className="map waypoint onscreen">
                  <div className="map-scanner map-scanner-radial" />
                  <div className="map-mark" style={{ top: "20%", left: "70%" }}>
                    <span>Russia</span>
                  </div>
                  {/* <div class="map-mark" style="top: 29%; left: 54%"></div> */}
                  <div className="map-mark" style={{ top: "31%", left: "18%" }}>
                    <span>United States</span>
                  </div>
                  {/* <div class="map-mark" style="top: 32%; left: 57%"></div>
                      <div class="map-mark" style="top: 34%; left: 46%"></div>
                      <div class="map-mark" style="top: 34.6%; left: 47.5%"></div>
                      <div class="map-mark" style="top: 40%; left: 87.3%"></div>
                      <div class="map-mark" style="top: 40.5%; left: 49%"></div>
                      <div class="map-mark" style="top: 40.5%; left: 54.7%"></div>
                      <div class="map-mark" style="top: 40.7%; left: 51.3%"></div>
                      <div class="map-mark" style="top: 41.5%; left: 17.5%"></div>
                      <div class="map-mark" style="top: 41.9%; left: 83%"></div>
                      <div class="map-mark" style="top: 42%; left: 13.5%"></div>
                      <div class="map-mark" style="top: 42.4%; left: 26.9%"></div>
                      <div class="map-mark" style="top: 43%; left: 45.4%"></div>
                      <div class="map-mark" style="top: 44.4%; left: 14%"></div>
                      <div class="map-mark" style="top: 45.5%; left: 25.2%"></div>
                      <div class="map-mark" style="top: 47.9%; left: 21%"></div> */}
                  <div
                    className="map-mark"
                    style={{ top: "50.7%", left: "61.4%" }}
                  >
                    <span>UAE</span>
                  </div>
                  <div
                    className="map-mark"
                    style={{ top: "51.5%", left: "70.5%" }}
                  >
                    <span>India</span>
                  </div>
                  {/* <div class="map-mark" style="top: 52%; left: 19%"></div>
                      <div class="map-mark" style="top: 54%; left: 68.9%"></div>
                      <div class="map-mark" style="top: 62.5%; left: 77.7%"></div> */}
                  <div
                    className="map-mark"
                    style={{ top: "66%", left: "31.5%" }}
                  >
                    <span>Mexico</span>
                  </div>
                  <div className="map-mark" style={{ top: "65%", left: "55%" }}>
                    <span>South Africa</span>
                  </div>
                  {/* <div class="map-mark" style="top: 78.6%; left: 91.7%"></div> */}
                  <div className="map-mark" style={{ top: "73%", left: "85%" }}>
                    <span>Australia</span>
                  </div>
                  {/* <div class="map-mark" style="top: 81%; left: 53%"></div>
                      <div class="map-mark" style="top: 82%; left: 28%"></div>
                      <div class="map-mark" style="top: 82%; left: 32%"></div>
                      <div class="map-mark" style="top: 86.5%; left: 88.5%"></div> */}
                </div>
                {/*end map*/}
              </div>
            </div>
            <div className="hidden-above-768">
              <img src={require("../assets/images/map.png")}></img>

              {/* <img src="images/map.png" /> */}
            </div>
          </div>
        </section>
        <section className="blogsemedstore">
          <div className="section-title">
            <h2>Our Blogs</h2>
          </div>
          <div className="container-flex-fluid">
            <div className="row-flex">
              <div className="col-flex item">
                <div className="article">
                  <a href="#">
                    <div className="post-img-wrapper">
                      <div
                        className="post-img"
                        style={{
                          backgroundImage:
                            "url( https://ymedialabs.com/wp-content/uploads/2017/09/MG_7308-800x450.jpg)"
                        }}
                      ></div>
                    </div>
                  </a>
                  <div className="contents">
                    <div className="blogtitletop">
                      <div className="cat-title">Leadership</div>
                      <span>13 Aug 2017</span>
                    </div>
                    <div>
                      <h3 className="blog-title">
                        <a href="https://ymedialabs.com/measure-product-success/">
                          How Do You Measure Product Success?
                        </a>
                      </h3>
                    </div>
                    <div className="excerpt">
                      Leaders constantly talk about the importance of innovation
                      in the workplace, but most fail to sustain a truly
                      innovative company culture.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-flex item">
                <div className="article">
                  <a href="#">
                    <div className="post-img-wrapper">
                      <div
                        className="post-img"
                        style={{
                          backgroundImage:
                            "url( https://ymedialabs.com/wp-content/uploads/2017/08/infographic-800x450.png)"
                        }}
                      ></div>
                    </div>
                  </a>
                  <div className="contents">
                    <div className="blogtitletop">
                      <div className="cat-title">Trending</div>
                      <span>13 Aug 2017</span>
                    </div>
                    <div>
                      <h3 className="blog-title">
                        <a href="https://ymedialabs.com/measure-product-success/">
                          How Do You Measure Product Success?
                        </a>
                      </h3>
                    </div>
                    <div className="excerpt">
                      Work should solve real problems, honing in on and
                      delivering value in the space of unmet needs.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-flex item">
                <div className="article">
                  <a href="https://ymedialabs.com/measure-product-success/">
                    <div className="post-img-wrapper">
                      <div
                        className="post-img"
                        style={{
                          backgroundImage:
                            "url( https://ymedialabs.com/wp-content/uploads/2017/01/fintech-9-800x450.jpg)"
                        }}
                      ></div>
                    </div>
                  </a>
                  <div className="contents">
                    <div className="blogtitletop">
                      <div className="cat-title">Technology</div>
                      <span>13 Aug 2017</span>
                    </div>
                    <div>
                      <h3 className="blog-title">
                        <a href="https://ymedialabs.com/measure-product-success/">
                          How Do You Measure Product Success?
                        </a>
                      </h3>
                    </div>
                    <div className="excerpt">
                      Work should solve real problems, honing in on and
                      delivering value in the space of unmet needs.
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
              Thank you for your interest in EMedStore and our services. Please
              fill out the form below or e-mail us at{" "}
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
    );
  }
}

export default Home;
