import React, { Component } from "react";
import Link from "next/link";

class Partner extends Component {
  render() {
    return (
      <section className="partner-area pt-100 pb-60">
        <div className="container">
          <div className="section-title">
            <h2>Trusted By</h2>
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="col-lg-2 col-6 col-sm-4">
              <div className="single-partner">
                <a href="https://peenews.in/" target="_blank">
                  <img src="/images/partners/partner1.png" alt="image" />
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4">
              <div className="single-partner">
                <a
                  href="https://play.google.com/store/apps/details?id=com.deb.academiccalendar2020"
                  target="_blank"
                >
                  <img
                    src="/images/partners/partner2.png"
                    alt="image"
                    height={100}
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4">
              <div className="single-partner">
                <a
                  href="https://play.google.com/store/apps/details?id=com.assamboardexam"
                  target="_blank"
                >
                  <img
                    src="/images/partners/partner3.png"
                    alt="image"
                    height={100}
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4">
              <div className="single-partner">
                <a
                  href="https://play.google.com/store/apps/details?id=com.peenews"
                  target="_blank"
                >
                  <img
                    src="/images/partners/partner4.png"
                    alt="image"
                    height={130}
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4">
              <div className="single-partner">
                <a href="#" target="_blank">
                  <img
                    src="/images/partners/partner5.png"
                    alt="image"
                    height={160}
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4">
              <div className="single-partner">
                <a href="#" target="_blank">
                  <img
                    src="/images/partners/partner7.png"
                    alt="image"
                    height={110}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Partner;
