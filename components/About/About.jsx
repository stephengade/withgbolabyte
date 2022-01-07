import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import design from "./About.module.css";
import Services from "../../components/Services/Services";
import Link from "next/link";

const MyVideo =
  "http://www.gbolamedia.com/wp-content/uploads/2022/01/about-us.mp4";

export function AboutCTA(props) {
  return (
    <section className={`${design.about_cta} container-fluid`}>
      <div className={design.cta_text}>
        <h2 className={design.cta_title}>{props.info}</h2>

        <button className={design.cta_button}>
          <Link href={props.link}>
            <a className={design.cta_link}>{props.text}</a>
          </Link>
        </button>
      </div>
    </section>
  );
}

function About() {
  return (
    <>
      <section className={`${design.About_container} container-fluid`}>
        <div className={`${design.about_intro} row`}>
          <div className={`${design.about_col} col-12`}>
            <h2 className={design.about_title}>Who We Are</h2>
            <h3 className={design.about_brand}>
              - <span className={design.indented}>Gbolabyte</span>{" "}
            </h3>

            <p className={design.about_summary}>
              We are a team of digital nomads, motivated and passionate about
              designing, building and launching bespoke websites and digital
              marketing strategies that yield results.
            </p>
          </div>
        </div>
        {/* Video */}
        <div className={`${design.about_video} row`}>
          <div className="col-12">
          <video autoPlay loop muted playsInline style={{ width: "100%" }}>
            <source src={MyVideo} type="video/mp4" />
            <source src={MyVideo} type="video/ogg" />
          </video>
          </div>
        </div>
      </section>

      <section className={`${design.about_approach}`}>
        <div className={`${design.approach_row} row`}>
          <div
            className={`${design.approach_promise} col-12 col-lg-6 col-xl-6`}
          >
            <h2 className={design.approach_title}>Our Approach</h2>
            <p className={design.approach_text}>
              First thing, we are working with you with a clear vision and sense
              of ownership.
            </p>

            <p className={design.approach_text}>
              That is, we are not just a team of creative people, but a team of
              people who measure success by the results we deliver.
            </p>
            <p className={design.approach_text}>
              We approach your project by understanding what you need and what
              your target audience also need, then we come up with working
              solutions to connect the gap that exist between the two
              &#34;needs&#34;.
            </p>
          </div>

          <div
            className={`${design.approach_promise} col-12 col-lg-6 col-xl-6`}
          >
            <h2 className={design.approach_title}>Our Promise</h2>
            <p className={design.approach_text}>
              To deliver a product that is both functional, and meet you and
              your customers&#39; needs.
            </p>
            <p className={design.approach_text}>
              They say truth is bitter, but we will give you honest feedbacks
              and recommendations during the communication stage.
            </p>
            <p className={design.approach_text}>
              We are all entrepreneurs, we understand the importance of keeping
              to projects&#39; timelines and deadlines, we will make sure that
              we are on track to deliver on time.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}

      <Services />

      {/* CTA */}

      <AboutCTA
        link="/contact"
        text="Contact Us"
        info=" Are you ready to work with an agency that work as hard to earn your
          trust as they do to earn you results?"
      />
    </>
  );
}

export default About;
