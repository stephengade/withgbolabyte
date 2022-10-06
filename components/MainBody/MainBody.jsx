import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import BodyStyles from "./MainBody.module.css";

function MainBody() {
  return (
    <section className={`${BodyStyles.main_body} container-fliud`}>
      <div className={`${BodyStyles.body_row} row`}>
        <div
          className={`${BodyStyles.main_body_1} col-12 col-lg-6 col-xl-6 col-md-8`}
        >
          <p className={BodyStyles.red_text}>Let&#39;s work together</p>
          <h3 className={BodyStyles.body_heading}>
            Enjoy Experiences that Defy Expectations...
          </h3>
        </div>

        <div
          className={`${BodyStyles.main_body_2} col-12 col-lg-6 col-xl-6 col-md-8`}
        >
          <p className={BodyStyles.body_text}>Welcome to GbolaByte</p>

          <p className={BodyStyles.body_text}>
            We work with brands and individuals to create beautiful websites and
            digital products that stand the test of time.
          </p>

          <p className={BodyStyles.body_text}>
            At <span className={BodyStyles.hightlight}>Gbolabyte</span>,
            we&#39;re not just about designing or building websites, we&#39;re
            about making your business or brand thrive.
          </p>

          <p className={BodyStyles.body_text}>
            We work with brands in eCommerce, Real estate, blockchain, health,
            finTech, edTech and some other industries.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainBody;
