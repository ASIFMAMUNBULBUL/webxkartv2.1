import React, { Component } from "react";
import NavbarTwo from "../components/myComp/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import PortfolioDetailsContent from "../components/myComp/PortfolioDetailsContent";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/myComp/Footer";

class PortfolioDetails extends Component {
  render() {
    return (
      <>
        <NavbarTwo />

        <PageBanner pageTitle="UX for Mobile Apps" BGImage="bg-two" />

        <PortfolioDetailsContent />

        <CtaAreaTwo />

        <Footer />
      </>
    );
  }
}

export default PortfolioDetails;
