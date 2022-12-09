import React, { Component } from "react";
import Navbar from "../components/myComp/NavbarTwo";
import MainBanner from "../components/myComp/MainBanner";
import Services from "../components/myComp/Services";
import OurWorks from "../components/DefaultHome/OurWorks";
import Feedback from "../components/Common/Feedback";
import Team from "../components/Common/Team";
import LatestNewsSlider from "../components/myComp/ServiceStyleTwo";
import CtaArea from "../components/Common/CtaArea";
import Partner from "../components/Common/Partner";
import Footer from "../components/myComp/Footer";
import WorkProcess from "../components/DefaultHome/WorkProcess";

class Index extends Component {
  render() {
    return (
      <>
        <Navbar />

        <MainBanner />

        <Services />

        <WorkProcess />

        <OurWorks />

        <Feedback />

        <Team />

        <LatestNewsSlider />

        <CtaArea />

        <Partner />

        <Footer />
      </>
    );
  }
}

export default Index;
