import React, { Component } from "react";
import NavbarTwo from "../components/myComp/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/myComp/Footer";
import Teams from "../components/Common/Team";

class Team extends Component {
  render() {
    return (
      <>
        <NavbarTwo />

        <PageBanner pageTitle="Our Skilled Team" BGImage="bg-one" />

        <Teams />

        <CtaAreaTwo />

        <Footer />
      </>
    );
  }
}

export default Team;
