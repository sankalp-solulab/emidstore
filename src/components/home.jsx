import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Home;
