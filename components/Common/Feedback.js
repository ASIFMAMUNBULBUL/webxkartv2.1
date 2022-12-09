import React, { Component } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  items: 1,
  navText: [
    "<i class='pe-7s-angle-left'></i>",
    "<i class='pe-7s-angle-right'></i>",
  ],
};

class Feedback extends Component {
  _isMounted = false;
  state = {
    display: false,
  };
  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <section className="feedback-area ptb-100">
        <div className="container">
          <div className="feedback-list">
            <div className="quotes-icon">
              <img src="/images/left-quote-white.png" alt="icon" />
            </div>

            {this.state.display ? (
              <OwlCarousel
                className="feedback-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="single-feedback">
                  <p>
                    I'm writing to express my sincere appreciation for webxkart
                    that developed my news channel apps and website. The team
                    worked hard to ensure that the app met all of my
                    expectations in terms of functionality and design, and I am
                    extremely pleased with the results. The team was always
                    professional and courteous, and they kept me informed every
                    step of the way. The final product is exactly what I was
                    hoping for, and I'm confident that it will be a great
                    success. Thank you for your hard work and dedication to
                    making my news channel apps and website the best it can be.
                  </p>

                  <div className="bar"></div>

                  <h3>Dr Faiznur Ahmed</h3>
                  <span>CEO & Founder, PEE News</span>
                </div>

                <div className="single-feedback">
                  <p>
                    I recently hired WebXkart for a project and I am pleased to
                    say that I have been highly impressed with your work. Your
                    team of professionals have been highly knowledgeable and
                    responsive, and have gone above and beyond to help me with
                    my project. They have been extremely helpful in answering
                    all my questions and providing me with the best solutions.
                    The final outcome was exactly what I was looking for and I
                    am very pleased with the results. I would highly recommend
                    your digital agency to anyone looking for quality and
                    reliable services.
                  </p>

                  <div className="bar"></div>

                  <h3>Bhaskar Kalita</h3>
                  <span>CEO & Founder, NC Soft</span>
                </div>

                <div className="single-feedback">
                  <p>
                    I recently worked with Webxkart on a digital project and I
                    am extremely pleased with their work. Their team was
                    extremely professional, knowledgeable, and responsive
                    throughout the entire project. They offered creative ideas,
                    went above and beyond to meet our needs, and stayed on top
                    of timelines. The project was completed on time and the
                    results were great. I highly recommend Webxkart for any
                    digital agency needs.
                  </p>

                  <div className="bar"></div>

                  <h3>Jayashree Saikia</h3>
                  <span>CEO & Founder, Dekassam Shopping</span>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* Client image */}
        <div className="client-image-box">
          <img
            src="/images/clients/client1.png"
            className="client1"
            alt="client"
          />
          <img
            src="/images/clients/client2.png"
            className="client2"
            alt="client"
          />
          <img
            src="/images/clients/client3.png"
            className="client3"
            alt="client"
          />
          <img
            src="/images/clients/client4.png"
            className="client4"
            alt="client"
          />
          <img
            src="/images/clients/client5.png"
            className="client5"
            alt="client"
          />
          <img
            src="/images/clients/client6.png"
            className="client6"
            alt="client"
          />
          <img
            src="/images/clients/client7.png"
            className="client7"
            alt="client"
          />
          <img
            src="/images/clients/client8.png"
            className="client8"
            alt="client"
          />
        </div>
      </section>
    );
  }
}

export default Feedback;
