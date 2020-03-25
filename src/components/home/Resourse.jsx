import React, { Component } from "react";
class Resourse extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="dedicated">
          <div className="member">
            <img
              src={require("../../assets/images/matches/user-img1.jpg")}
            ></img>

            {/* <img src="images/matches/user-img1.jpg" /> */}
          </div>
          <div className="member-detail">
            <h3>Daniel M. Foote</h3>
            <h4>Sr. Tech Head</h4>
            <p>
              As a Tech Head, Daniel looks after the day to day installation and
              operation of Mining Rigs. He plays a important role in optimising
              efficiency of our Rigs.
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
    );
  }
}
export default Resourse;
