import React, { Component } from "react";
import NavbarTwo from "../components/myComp/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ServiceDetailsContent from "../components/myComp/ServiceDetailsContent";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/myComp/Footer";

class ServiceDetails extends Component {
  render() {
    return (
      <>
        <NavbarTwo />

        <PageBanner pageTitle="Mobile App Development" BGImage="bg-one" />

        <ServiceDetailsContent />

        <CtaAreaTwo />

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
