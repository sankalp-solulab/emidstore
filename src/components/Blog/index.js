import React, { Component } from "react";
import img from "../../assets//images/blogbanner.jpg";
import Post from "./Post";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import { withRouter } from "react-router-dom";
import Posts from "./Post/Posts.jsx";
class Blog extends Component {
  render() {
    return (
      <div>
        <div className="innerbanner">
          <div className="banner" style={{ background: `url(${img})` }}>
            <div className="banner-text">
              <h1>We Help Businesses</h1>
              <h2>
                Empower people through technology and innovative solutions
              </h2>
            </div>
          </div>
        </div>
        <Posts></Posts>
      </div>
    );
  }
}

export default Blog;

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Blog));

//export default connect(mapStateToProps,mapDispatchToProps)(Blog);
