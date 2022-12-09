import React, { Component } from "react";
import Link from "next/link";

export default class ServicesStyleTwo extends Component {
  render() {
    return (
      <>
        <div className="bg-fcfbfb ptb-100 pb-70">
          <div className="container">
            <div className="section-title">
              <h2>Our Services</h2>
              <p>"Comprehensive Solutions for All Your Business Needs"</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one white-bg">
                  <i className="pe-7s-scissors bg-fc3549"></i>
                  <h3>
                    <Link href="/service-details">
                      <a>Website Design</a>
                    </Link>
                  </h3>
                  <p>
                    we specialize in crafting creative, unique, and engaging web
                    designs that bring your vision to life. We have a team of
                    experienced web designers who understand the importance of
                    creating a website that reflects your brand and stands out
                    from the competition.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one white-bg">
                  <i className="pe-7s-display2 bg-fc3549"></i>
                  <h3>
                    <Link href="/service-details">
                      <a>Web Development</a>
                    </Link>
                  </h3>
                  <p>
                    We are a full-service web development agency specializing in
                    creating custom websites and applications that are tailored
                    to meet the specific needs of our clients. Our experienced
                    developers provide comprehensive solutions that help
                    businesses reach their digital goals.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one white-bg">
                  <i className="pe-7s-phone bg-fc3549"></i>
                  <h3>
                    <Link href="/service-details">
                      <a>Mobile Application Development</a>
                    </Link>
                  </h3>
                  <p>
                    our MAD team specializes in creating high-quality mobile
                    applications for iOS and Android. Each project requires an
                    individualized approach, and our MAD team works closely with
                    our clients to ensure that the software applications meet
                    their specific needs.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one white-bg">
                  <i className="pe-7s-light bg-fc3549"></i>
                  <h3>
                    <Link href="/service-details">
                      <a>Graphic Design</a>
                    </Link>
                  </h3>
                  <p>
                    WebXkart offers a comprehensive range of graphic design
                    services to meet all of your needs. We can design everything
                    from logos to website and application graphics.We use the
                    latest technology and creative techniques to ensure that
                    your design is both beautiful and effective.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one white-bg">
                  <i className="pe-7s-cart bg-00d280"></i>
                  <h3>
                    <Link href="/service-details">
                      <a>eCommerce Development</a>
                    </Link>
                  </h3>
                  <p>
                    WebXkart involves creating custom online stores for clients.
                    This includes designing the store’s layout and integrating
                    the store with the necessary payment gateway and other
                    services. Also involves customer accounts, product and
                    category management, order tracking and fulfillment, and
                    analytics.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one white-bg">
                  <i className="pe-7s-users bg-ff612f"></i>
                  <h3>
                    <Link href="/service-details">
                      <a>Digital Marketing</a>
                    </Link>
                  </h3>
                  <p>
                    The complexities of the digital landscape and can provide
                    advice on the most effective ways to use digital marketing
                    in your marketing objectives. Our services include
                    everythings start from social media marketing. We create
                    custom strategies tailored to your specific needs.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one white-bg">
                  <i className="pe-7s-headphones bg-6610f2"></i>
                  <h3>
                    <Link href="/service-details">
                      <a>Video Editing</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one white-bg">
                  <i className="pe-7s-users bg-13c4a1"></i>
                  <h3>
                    <Link href="/service-details">
                      <a>Content Writing</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one white-bg">
                  <i className="pe-7s-comment bg-fc3549"></i>
                  <h3>
                    <Link href="/service-details">
                      <a>3D Animations</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
