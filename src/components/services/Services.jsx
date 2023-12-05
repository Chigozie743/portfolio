import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Analyses of code</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Design and Develop Websites</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Hosting of Websites</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Testing of web pages and their endpoints</p>
            </li>
          </ul>
        </article>
        {/* END of Web Devlopment */}

        <article className="service">
          <div className="service__head">
            <h3>Mobile Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Design and development of cross-platform mobile applications
                using the Flutter framework.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creating visually appealing and user-friendly interfaces for
                mobile applications.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Building tailored solutions based on client requirements for
                specific industries or business needs.
              </p>
            </li>

            <li>
              <BiCheck className="servie__list-icon" />
              <p>
                Ensuring that mobile applications are optimized for various
                screen sizes and resolutions.
              </p>
            </li>

            <li>
              <BiCheck className="servie__list-icon" />
              <p>
                Integrating third-party APIs, services, and databases to enhance
                the functionality of mobile apps.
              </p>
            </li>

            <li>
              <BiCheck className="servie__list-icon" />
              <p>
                Utilizing Flutter to create apps that work seamlessly on both
                Android and iOS platforms.
              </p>
            </li>

            <li>
              <BiCheck className="servie__list-icon" />
              <p>
                Conducting thorough testing to ensure the functionality,
                performance, and security of mobile applications.
              </p>
            </li>

            <li>
              <BiCheck className="servie__list-icon" />
              <p>
                Providing ongoing support, updates, and maintenance for mobile
                apps.
              </p>
            </li>

            <li>
              <BiCheck className="servie__list-icon" />
              <p>
                Optimizing the performance of mobile applications to ensure
                smooth and efficient user experiences.
              </p>
            </li>
          </ul>
        </article>

        {/* End of Cloud Engineering */}

        <article className="service">
          <div className="service__head">
            <h3>Digital Marketing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Publish digital marketing content online</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Determine what content will reach customers</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Research competitors’ pricing and products</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Implement email marketing campaigns</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
