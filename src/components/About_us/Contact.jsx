import React, { Component } from "react";
import Form from "../ContactUs/form.jsx";
class Contact extends Component {
  render() {
    return (
      <section id="contacts" className="contactemedstore gray-bg">
        <div className="container">
          <div className="section-title">
            <h2>Request a demo</h2>
          </div>
          <p className="text-center">
            Thank you for your interest in EMedStore and our services. Please
            fill out the form below or e-mail us at{" "}
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
      </section>
    );
  }
}
export default Contact;
