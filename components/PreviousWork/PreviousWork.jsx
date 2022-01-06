import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Classes from "./PreviousWork.module.css";
import Project from "./Projects";
import Link from "next/link";

// Images
import Agmedia from "../../public/Agconmedia.png";
import Realty9ja from "../../public/Realty9ja_mockup.png";
import Healthfeed from "../../public/Healthfp.png";
import Feroxia from "../../public/feroxia.png";

function PreviousWork() {
  return (
    <section className={`${Classes.PreviousWork} container-fluid`} id="work">
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

        <div className={`${Classes.Previous_work_cta} text-center`}>
          <button>
            <Link href="/contact">
              <a>Ask for more</a>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default PreviousWork;
