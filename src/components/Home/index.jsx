import React, { Component } from "react";
import IntroHome from "./intro.jsx";
import TypesofApp from "./TypesofApp.jsx";
import FeatureListOfApp from "./FeatureListOfApp.jsx";
import AppDemo from "./AppDemo.jsx";
import PortfolioHome from "./PortfolioHome.jsx";
import BenifitsHome from "./BenifitsHome.jsx";
import WhyChooseUs from "./WhyChooseUS.jsx";
import DedicatedEmedStore from "./DedicatedEmedStore.jsx";
import ClientEmed from "./ClientEmed.jsx";
import WorldWide from "./WorldWideStore.jsx";
import Blog from "./Blogs.jsx";
import ContactUs from "./contactus.jsx";
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
        <Blog />
        <ContactUs />
      </div>
    );
  }
}

export default Home;
