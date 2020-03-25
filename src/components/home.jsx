import React, { Component } from "react";
import IntroHome from "./home/intro.jsx";
import TypesofApp from "./home/TypesofApp.jsx";
import FeatureListOfApp from "./home/FeatureListOfApp.jsx";
import AppDemo from "./home/AppDemo.jsx";
import PortfolioHome from "./home/PortfolioHome.jsx";
import BenifitsHome from "./home/BenifitsHome.jsx";
import WhyChooseUs from "./home/WhyChooseUS.jsx";
import DedicatedEmedStore from "./home/DedicatedEmedStore.jsx";
import ClientEmed from "./home/ClientEmed.jsx";
import WorldWide from "./home/WorldWideStore.jsx";
import Blogs from "./home/Blogs.jsx";
import ContactUs from "./home/contactus.jsx";
// import img from "../assets/images/header-bg-main";

class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <IntroHome />
        <TypesofApp />
        <FeatureListOfApp />
        <AppDemo />
        <PortfolioHome />
        <BenifitsHome />
        <WhyChooseUs />
        <DedicatedEmedStore />
        <ClientEmed />
        <WorldWide />
        <Blogs />
        <ContactUs />
      </div>
    );
  }
}

export default Home;
