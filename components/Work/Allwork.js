import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Classes from "../PreviousWork/PreviousWork.module.css";
import Project from "../PreviousWork/Projects";


// Images
import Agmedia from "../../public/Agconmedia.png";
import Realty9ja from "../../public/Realty9ja.png";
import Healthfeed from "../../public/Healthfp.png";
import Feroxia from "../../public/feroxia.png";
import Unito from "../../public/universal_turnover.png";

function Allwork() {
  return (
    <section className={`${Classes.PreviousWork} container-fluid`}>
      <div className={`${Classes.PreviousWork_row} row`}>
        {/* Project 1 */}
        <Project
          image={Agmedia}
          info="Unlocking Insight"
          title="AG Consulting & Media"
          description="CMS Website Design, Social Media Advertising and Periodic Website Maintenance"
          path="https://www.agconsultingmedia.com"
          bg="#ed1d24"
        />

        {/* Project 2 */}

        <Project
          image={Realty9ja}
          info="Real Estate Redefined"
          title="Realty9ja"
          description="CMS Website Design, Social Media Marketing & Management, SEO and Website Maintenance"
          path="https://www.realty9ja.com"
          bg="#008037"
        />

        {/* Project 3 */}

        <Project
          image={Healthfeed}
          info="Healthy Living"
          title="Healthfeedplus"
          description="Website Design and Maintenance"
          path="https://www.healthfeedplus.com"
          bg="#609a33"
        />

        {/* Project 4 */}
        <Project
          image={Feroxia}
          info="Dynamically Optimized"
          title="Feroxia"
          description="Website Design and Maintenance"
          path="https://www.feroxia.com"
          bg="#ffa500"
        />

        {/* Project 5 */}

        <Project
          image={Unito}
          info="Cleaning & Home Services"
          title="Universal Turnover"
          description="Website Design"
          path="https://www.universalturnover.com"
          bg="#28a745"
        />

        {/* CTA */}
      </div>
    </section>
  );
}

export default Allwork;
