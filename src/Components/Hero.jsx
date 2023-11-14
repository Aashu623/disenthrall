import React from "react";
import bg1 from "../assets/images/cta-bg.jpg";
import heroPic from "../assets/images/hero-banner.png";
import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.jpg";
import project6 from "../assets/images/project-6.jpg";
import IT_Company from "../assets/images/IT_Company.gif";

function Hero() {
  
  return (
    <main>
      <article>
        <section className="section hero" id="home" aria-label="hero">
          <div className="container">
            <div className="hero-content">
              <p className="hero-subtitle">Digital Marketing Agency</p>

              <h1 className="h1 hero-title">We are available for marketing</h1>

              <p className="hero-text">
                "Disenthrall: Your Key to Digital Triumph! We're all about
                breaking free from old-school marketing. Think innovative
                strategies and top-notch solutions. Partner with us to see your
                business soar in the digital world. Count on us for your success
                – it's what we're all about!"
              </p>

              <a href="/contact" className="btn btn-primary">
                Get Started
              </a>
            </div>

            <figure className="hero-banner">
              <img
                src={heroPic}
                width="720"
                height="673"
                alt="hero banner"
                className="w-100"
              />
            </figure>
          </div>
        </section>

        <section className="section service" id="service" aria-label="service">
          <div className="container">
            <h2 className="h2 section-title">Services We Provided</h2>

            <p className="section-text">
              "Elevate your brand with Disenthrall: Unleashing tailored digital
              strategies and innovative solutions for unparalleled online
              success."
            </p>

            <ul className="grid-list">
              <li>
                <div className="service-card">
                  <div
                    className="card-icon"
                    style={{ backgroundColor: "#13c4a1" }}
                  >
                    <ion-icon name="desktop"></ion-icon>
                  </div>

                  <h3 className="h3">
                    <a href="/" className="card-title">
                      Web Development
                    </a>
                  </h3>

                  <p className="card-text">
                    "Elevate your online presence with our tailored solutions.
                    From sleek designs to seamless functionality, we bring your
                    vision to life, ensuring a captivating and user-friendly
                    website experience."
                  </p>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <div
                    className="card-icon"
                    style={{ backgroundColor: "#6610f2" }}
                  >
                    <ion-icon name="desktop"></ion-icon>
                  </div>

                  <h3 className="h3">
                    <a href="/" className="card-title">
                      App Development
                    </a>
                  </h3>

                  <p className="card-text">
                    "Elevate your brand with our cutting-edge mobile solutions.
                    From seamless functionality to captivating user experiences,
                    we bring your app ideas to life."
                  </p>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <div
                    className="card-icon"
                    style={{ backgroundColor: "#ffb700" }}
                  >
                    <ion-icon name="desktop"></ion-icon>
                  </div>

                  <h3 className="h3">
                    <a href="/" className="card-title">
                      SEO
                    </a>
                  </h3>

                  <p className="card-text">
                    "Elevate your online visibility with our strategic
                    solutions. We optimize, stand out, and drive organic growth
                    for your digital success."
                  </p>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <div
                    className="card-icon"
                    style={{ backgroundColor: "#fc3549" }}
                  >
                    <ion-icon name="desktop"></ion-icon>
                  </div>

                  <h3 className="h3">
                    <a href="/" className="card-title">
                      Logo Design
                    </a>
                  </h3>

                  <p className="card-text">
                    "Leave a lasting mark with our bespoke, visually striking
                    logos that embody your unique brand identity."
                  </p>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <div
                    className="card-icon"
                    style={{ backgroundColor: "#00d280" }}
                  >
                    <ion-icon name="desktop"></ion-icon>
                  </div>

                  <h3 className="h3">
                    <a href="/" className="card-title">
                      Brand Identity
                    </a>
                  </h3>

                  <p className="card-text">
                    "Define your essence with our cohesive solutions – from
                    striking logos to impactful messaging, we set your brand
                    apart."
                  </p>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <div
                    className="card-icon"
                    style={{ backgroundColor: "#ff612f" }}
                  >
                    <ion-icon name="desktop"></ion-icon>
                  </div>

                  <h3 className="h3">
                    <a href="/" className="card-title">
                      Market Research
                    </a>
                  </h3>

                  <p className="card-text">
                    "Insightful data for strategic decisions. Stay competitive
                    and informed with our comprehensive research services."
                  </p>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <div
                    className="card-icon"
                    style={{ backgroundColor: "rgb(127, 121, 214)" }}
                  >
                    <ion-icon name="desktop"></ion-icon>
                  </div>

                  <h3 className="h3">
                    <a href="/" className="card-title">
                      Graphic Designing
                    </a>
                  </h3>

                  <p className="card-text">
                    "Captivating visuals, cohesive branding – we craft designs
                    that leave a lasting impact for your brand."
                  </p>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <div
                    className="card-icon"
                    style={{ backgroundColor: "rgb(65, 137, 90)" }}
                  >
                    <ion-icon name="desktop"></ion-icon>
                  </div>

                  <h3 className="h3">
                    <a href="/" className="card-title">
                      Social Media Marketing
                    </a>
                  </h3>

                  <p className="card-text">
                    "Elevate your brand's presence with strategic solutions that
                    drive engagement and amplify your online influence."
                  </p>
                </div>
              </li>

              <li>
                <div className="service-card">
                  <div
                    className="card-icon"
                    style={{ backgroundColor: "#ca8069" }}
                  >
                    <ion-icon name="desktop"></ion-icon>
                  </div>

                  <h3 className="h3">
                    <a href="/" className="card-title">
                      Content Marketing
                    </a>
                  </h3>

                  <p className="card-text">
                    "Fuel your brand's narrative. Our tailored content
                    strategies resonate, engage, and drive results, ensuring
                    your story stands out in the digital landscape."
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="section project" id="project" aria-label="project">
          <div className="container">
            <h2 className="h2 section-title">Our Recent Projects</h2>

            <p className="section-text">
              "Step into our project gallery, a visual narrative of
              Disenthrall's dedication to turning client visions into digital
              realities, one success story at a time."
            </p>

            <ul className="grid-list">
              <li>
                <div className="project-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ width: "510", height: "700" }}
                  >
                    <img
                      src={project1}
                      width="510"
                      height="700"
                      loading="lazy"
                      alt="Designing a better cinema experience"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <p className="card-subtitle">
                      "Our Team in Action! We're diligently working on
                      groundbreaking projects that showcase our commitment to
                      excellence. Stay tuned for the big reveal, as we prepare
                      to elevate your digital experience with innovative
                      solutions and trusted expertise."
                    </p>

                    <h3 className="h3">
                      <a href="/" className="card-title">
                        Designing a better cinema experience
                      </a>
                    </h3>

                    <a href="/" className="btn btn-primary">
                      View Details
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="project-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ width: "510", height: "700" }}
                  >
                    <img
                      src={project2}
                      width="510"
                      height="700"
                      loading="lazy"
                      alt="Building design process within teams"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <p className="card-subtitle">
                      "Our Team in Action! We're diligently working on
                      groundbreaking projects that showcase our commitment to
                      excellence. Stay tuned for the big reveal, as we prepare
                      to elevate your digital experience with innovative
                      solutions and trusted expertise."
                    </p>

                    <h3 className="h3">
                      <a href="/" className="card-title">
                        Building design process within teams
                      </a>
                    </h3>

                    <a href="/" className="btn btn-primary">
                      View Details
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="project-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ width: "510", height: "700" }}
                  >
                    <img
                      src={project3}
                      width="510"
                      height="700"
                      loading="lazy"
                      alt="How intercom brings play into their design process"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <p className="card-subtitle">
                      "Our Team in Action! We're diligently working on
                      groundbreaking projects that showcase our commitment to
                      excellence. Stay tuned for the big reveal, as we prepare
                      to elevate your digital experience with innovative
                      solutions and trusted expertise."
                    </p>

                    <h3 className="h3">
                      <a href="/" className="card-title">
                        How intercom brings play into their design process
                      </a>
                    </h3>

                    <a href="/" className="btn btn-primary">
                      View Details
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="project-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ width: "510", height: "700" }}
                  >
                    <img
                      src={project4}
                      width="510"
                      height="700"
                      loading="lazy"
                      alt="Stuck with to-do list, I created a new app for"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <p className="card-subtitle">
                      "Our Team in Action! We're diligently working on
                      groundbreaking projects that showcase our commitment to
                      excellence. Stay tuned for the big reveal, as we prepare
                      to elevate your digital experience with innovative
                      solutions and trusted expertise."
                    </p>

                    <h3 className="h3">
                      <a href="/" className="card-title">
                        Stuck with to-do list, I created a new app for
                      </a>
                    </h3>

                    <a href="/" className="btn btn-primary">
                      View Details
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="project-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ width: "510", height: "700" }}
                  >
                    <img
                      src={project5}
                      width="510"
                      height="700"
                      loading="lazy"
                      alt="Examples of different types of sprints"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <p className="card-subtitle">
                      "Our Team in Action! We're diligently working on
                      groundbreaking projects that showcase our commitment to
                      excellence. Stay tuned for the big reveal, as we prepare
                      to elevate your digital experience with innovative
                      solutions and trusted expertise."
                    </p>

                    <h3 className="h3">
                      <a href="/" className="card-title">
                        Examples of different types of sprints
                      </a>
                    </h3>

                    <a href="/" className="btn btn-primary">
                      View Details
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="project-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ width: "510", height: "700" }}
                  >
                    <img
                      src={project6}
                      width="510"
                      height="700"
                      loading="lazy"
                      alt="Redesigning the New York times app"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <p className="card-subtitle">
                      "Our Team in Action! We're diligently working on
                      groundbreaking projects that showcase our commitment to
                      excellence. Stay tuned for the big reveal, as we prepare
                      to elevate your digital experience with innovative
                      solutions and trusted expertise."
                    </p>

                    <h3 className="h3">
                      <a href="/" className="card-title">
                        Redesigning the New York times app
                      </a>
                    </h3>

                    <a href="/" className="btn btn-primary">
                      View Details
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="section about" id="about" aria-label="about">
          <div className="container">
            <div
              className="about-banner img-holder"
              style={{ width: "720", height: "960" }}
            >
              <img
                src={IT_Company}
                width="720"
                height="960"
                loading="lazy"
                alt="about banner"
                className="img-cover"
              />
            </div>

            <div className="about-content">
              <h2 className="h2 section-title">About Us</h2>

              <p className="section-text">
                "Get to know us: A close-knit team at Disenthrall, where
                creativity meets strategy, and innovation is the driving force
                behind our mission to transform your digital presence."
              </p>

              <h3 className="h3">Who We Are</h3>

              <p className="section-text">
                "Discover Disenthrall: We're more than a company; we're a
                community of forward-thinkers, strategists, and creatives
                working together to bring your brand's digital aspirations to
                life."
              </p>

              <h3 className="h3">Our Success</h3>

              <ul className="about-list">
                <li className="about-item">
                  <ion-icon
                    name="checkmark-circle"
                    aria-hidden="true"
                  ></ion-icon>

                  <p className="section-text">
                    "From standout campaigns to game-changing strategies,
                    discover the highlights that define our success at
                    Disenthrall – where your wins are our wins."
                  </p>
                </li>

                <li className="about-item">
                  <ion-icon
                    name="checkmark-circle"
                    aria-hidden="true"
                  ></ion-icon>

                  <p className="section-text">
                    "Celebrating the milestones and successes that embody the
                    Disenthrall journey, where each achievement is a testament
                    to our unwavering commitment to client excellence."
                  </p>
                </li>

                <li className="about-item">
                  <ion-icon
                    name="checkmark-circle"
                    aria-hidden="true"
                  ></ion-icon>

                  <p className="section-text">
                    "A compilation of projects that highlight our ability to
                    innovate, captivate, and deliver exceptional results for our
                    clients."
                  </p>
                </li>
              </ul>

              <h3 className="h3">Our Mission</h3>

              <p className="section-text">
                "Our mission at Disenthrall is clear – to empower brands,
                elevate digital experiences, and leave an indelible mark on the
                industry through creativity, strategy, and results."
              </p>
            </div>
          </div>
        </section>

        <section
          className="section cta"
          aria-label="cta"
          style={{ backgroundImage: bg1 }}
        >
          <div className="container">
            <p className="cta-subtitle">So What is Next?</p>

            <h2 className="h2 section-title">
              Are You Ready? Let's get to Work!
            </h2>

            <a href="/" className="btn btn-secondary">
              Get Started
            </a>
          </div>
        </section>

        
      </article>
    </main>
  );
}

export default Hero;
