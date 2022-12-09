import React, { Component } from "react";

class WorkProcess extends Component {
  render() {
    return (
      <>
        <section className="work-process-area ptb-100">
          <div className="container">
            <div className="section-title">
              <h2>Our Work Process</h2>
              <p>
                We have a proven process for delivering successful web design
                and development projects. Our process begins with planning and
                scoping and continues through Initial Consultation, Project
                Planning, Design & Development, Testing & Quality, Delivery and
                Post-Delivery Support.
              </p>
            </div>

            <div className="work-process">
              <img src="/images/man-with-mobile.png" alt="logo" />

              <div className="work-process-list">
                <div className="single-work-process">
                  <div className="icon">
                    <i className="pe-7s-display1"></i>
                  </div>
                  <h3>Initial Consultation</h3>
                  <span>Goals and Objectives</span>
                </div>

                <div className="single-work-process">
                  <div className="icon">
                    <i className="pe-7s-display2"></i>
                  </div>
                  <h3>Project Planning</h3>
                  <span>Timeline, Budget and Resources</span>
                </div>

                <div className="single-work-process">
                  <div className="icon">
                    <i className="pe-7s-airplay"></i>
                  </div>
                  <h3>Design & Development</h3>
                  <span>Accordance with the Project</span>
                </div>

                <div className="single-work-process">
                  <div className="icon">
                    <i className="pe-7s-note2"></i>
                  </div>
                  <h3> Testing & Quality</h3>
                  <span>Test and Ensure the Quality</span>
                </div>

                <div className="single-work-process">
                  <div className="icon">
                    <i className="pe-7s-light"></i>
                  </div>
                  <h3>Delivery</h3>
                  <span>Schedule and According</span>
                </div>

                <div className="single-work-process">
                  <div className="icon">
                    <i className="pe-7s-sun"></i>
                  </div>
                  <h3>Post-Delivery Support</h3>
                  <span>Support and Maintenance</span>
                </div>
              </div>

              <img
                src="/images/circle.png"
                className="rotateme circle-image"
                alt="image"
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default WorkProcess;
