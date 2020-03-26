import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="services-details__item services-details__item--development">
          <div className="services-details__info">
            <h4>Development</h4>
            <p>
              With the minimalist of codes, we strive to create the biggest
              impact. The miserly approach to coding ensures the app is packed
              with useful features.
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
    );
  }
}
export default App;
