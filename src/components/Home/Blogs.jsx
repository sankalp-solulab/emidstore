import React, { Component } from "react";
class Blog extends Component {
  render() {
    return (
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
                    Work should solve real problems, honing in on and delivering
                    value in the space of unmet needs.
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
                    Work should solve real problems, honing in on and delivering
                    value in the space of unmet needs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Blog;
