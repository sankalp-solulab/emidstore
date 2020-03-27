import React, { Component } from "react";

export default class PortfolioData extends Component {
  render() {
    return (
      <div className="flex-row-2 flex-cnt">
        <div className="flex-col-1 practilo-1 hover">
          <figure>
            <img
              src="https://www.finoit.com/wp-content/uploads/2017/05/practilo.jpg"
              alt="Practilo"
            />
          </figure>
          <div className="flex-inner flex-direction stellar">
            <div className="project-title">
              {/* <figure class="practilo-logo"></figure> */}
              <h5>Practilo</h5>
            </div>
            <div className="project-group">
              <p>Practilo</p>
              <h4>
                Enterprise learning and assessment tool, with intelligent
                analytics.
              </h4>
              <a href="portfoliodetail.php" className="btn-line">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
