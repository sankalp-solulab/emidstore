import React, { Component } from "react";
import img from '../../assets//images/blogbanner.jpg';
import Post from "./Post";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import { withRouter } from "react-router-dom";



class Blog extends Component {

  state={
    postList:null
  }

  componentWillMount() {
    this.props.getBlogDetails();
  }

  componentDidUpdate(){
    console.log("Will Mount",this.props.blogList)
    if(this.state.postList == null){
      this.setState({
        postList:this.props.blogList
      })
    }
  }

  categoryHadler=(e)=>{

    if(e.target.innerText == "All"){
      var data_filter=  this.props.blogList
    }
    else{
      var data_filter = this.props.blogList.filter( element => element.category == e.target.innerText)
      console.log("Filter",data_filter);
    }

      this.setState({
        postList:data_filter
      })
    
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
            <li><a className="active" onClick={(e)=>this.categoryHadler(e)}>All</a></li>
            <li><a onClick={(e)=>this.categoryHadler(e)}>Leadership</a></li>
            <li><a onClick={(e)=>this.categoryHadler(e)}>Trending</a></li>
            <li><a onClick={(e)=>this.categoryHadler(e)}>Technology</a></li>
            <li><a onClick={(e)=>this.categoryHadler(e)}>EMedStore</a></li>
            <li><a onClick={(e)=>this.categoryHadler(e)}>Business</a></li>
          </ul>
        </div>
        <div className="container-flex-fluid">
          <div className="row-flex">
         
        {this.state.postList != null 
        ? this.state.postList.map(res => {
          return  <Post data={res}/>  
         })
         :
         null
        }
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

const mapStateToProps = ({ Blog }) => {
  const { blogList } = Blog;
  return {
      blogList
  };
};
const mapDispatchToProps = dispatch => ({
  getBlogDetails: () => dispatch(actions.getBlogDetails()),

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog));

//export default connect(mapStateToProps,mapDispatchToProps)(Blog);
