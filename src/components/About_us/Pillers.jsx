import React, { Component } from 'react'
import * as actions from '../../actions/index';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";

class Pillers extends Component {
    componentWillMount()
    {
      this.props.get_pillers()
      
    }
    render() {
      
        console.log("render : ",this.props.About);
        
        return (
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
        )
    }
}
const mapStateToProps = (About) => {
  return {
      About
  };
};
const mapDispatchToProps = dispatch => ({
    get_pillers: () => dispatch(actions.get_pillers()),
  });
  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Pillers));
