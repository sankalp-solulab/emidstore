import React, { Component } from "react";
import img from "../../assets/images/contactbanner.jpg";
import { getContactData } from "../../actions/contactUs";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Form from "./form.jsx";

class ContactUs extends Component {
  handleData = event => {
    switch (event.target.name) {
      case "name":
        this.setState({
          name: event.target.value
        });

      case "company":
        this.setState({
          company: event.target.value
        });
      case "phone":
        this.setState({
          phone: event.target.value
        });

      case "email":
        this.setState({
          email: event.target.value
        });
      case "state":
        this.setState({
          state: event.target.value
        });
      case "details":
        this.setState({
          details: event.target.value
        });
    }
  };

  onSubmit = e => {
    e.preventDefault();

    const contactData = this.state;
    console.log("ContactUs -> contactData", contactData);
    this.props.getContactData(contactData);
    //console.log("jjj",contactData);
  };

  render() {
    // const { name, company, email, phone, state,details } = this.props;
    // console.log("After Fetched",name);
    return (
      <div>
        <div className="innerbanner">
          <div className="banner" style={{ background: `url(${img})` }}>
            <div className="banner-text">
              <h1 style={{ color: "green" }}>Got a project in mind?</h1>
            </div>
          </div>
        </div>
        <div className="main-container">
          <section id="contacts" className="contactemedstore gray-bg">
            <div className="container">
              <p className="text-center">
                Thank you for your interest in EMedStore and our services.
                Please fill out the form below or e-mail us at{" "}
                <a href="mailto:contact@emedstore.com" className="theme-color">
                  contact@emedstore.com
                </a>{" "}
                and we will get back to you promptly regarding your request.
              </p>
              <div className="contactForm-body">
                <div id="contacts-form-wrapper">
                  <Form></Form>
                </div>
              </div>
            </div>
            <div className="morecontacts">
              <div className="container">
                <div className="section-title">
                  <h2>More contacts</h2>
                </div>
                <div className="morecontact">
                  <ul>
                    <li>
                      <h3>Project Enquiries</h3>
                      <a href="#">
                        <span className="icon fa fa-skype" />
                        emedstore
                      </a>
                      <a href="mailto:enquiry@emedstore.com">
                        <span className="icon fa fa-envelope" />
                        enquiry@emedstore.com
                      </a>
                    </li>
                    <li>
                      <h3>New Business</h3>
                      <a href="mailto:emedstore@gmail.com">
                        emedstore@gmail.com
                      </a>
                    </li>
                    <li>
                      <h3>Career</h3>
                      <a href="mailto:emedstore@gmail.com">
                        <span className="icon fa fa-phone" />
                        +91 79 48000686
                      </a>
                      <a href="mailto:creer@emedstore.com">
                        <span className="icon fa fa-envelope" />
                        creer@emedstore.com
                      </a>
                    </li>
                    <li>
                      <h3>General Enquiries</h3>
                      <a href="mailto:info@emedstore.com">
                        <span className="icon fa fa-envelope" />
                        info@emedstore.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ contactUs }) => {
  // const { name, company, email, phone, state,details } = contactUs;
  //   return {
  //     name, company, email, phone, state,details
  //   };
};

const mapDispatchToProps = dispatch => ({
  getContactData: payload => dispatch(getContactData(payload))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ContactUs)
);
