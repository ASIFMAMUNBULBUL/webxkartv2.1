import React, { Component } from "react";
import NavbarTwo from "../components/myComp/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ErrorContent from "../components/Error/ErrorContent";
import Footer from "../components/myComp/Footer";

class Error extends Component {
  render() {
    return (
      <>
        <NavbarTwo />

        <PageBanner pageTitle="404 Error" BGImage="bg-three" />

        <ErrorContent />

        <Footer />
      </>
    );
  }
}

export default Error;
