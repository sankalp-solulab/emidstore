import React, { Component } from "react";
// import img from "../assets/images/header-bg-main";
import img from '../../assets//images/blogbanner.jpg'
import Post from "./Post";

class Blog extends Component {

    categoryHadler=(e)=>{
        console.log("AAAA",e.target.innerText);
        console.log("Akkk");
    }

  render() {
    return (
<div>
  <div className="innerbanner">
    <div className="banner" style={{background: `url(${img})`}}>
      <div className="banner-text">
        <h1>We Help Businesses</h1>
        <h2>Empower people through technology and innovative solutions</h2>
      </div>
    </div>
  </div>
  <div className="main-container">
    <section className="bloglistingemedstore bg-gray">
      <div className="container">
        <div className="category">
          <ul>
            <li><a className="active" href="#">All</a></li>
            <li><a onClick={(e)=>this.categoryHadler(e)}>Leadership</a></li>
            <li><a onClick={(e)=>this.categoryHadler(e)}>Trending</a></li>
            <li><a onClick={(e)=>this.categoryHadler(e)}>Technology</a></li>
            <li><a onClick={(e)=>this.categoryHadler(e)}>EMedStore</a></li>
            <li><a onClick={(e)=>this.categoryHadler(e)}>Business</a></li>
          </ul>
        </div>
        <div className="container-flex-fluid">
          <div className="row-flex">
            <Post/>
            <Post/>
            <Post/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center mar-top30">
            <a href="#" className="btn btn-sm btn-primary">Load More</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

        );
  }
}

export default Blog;
