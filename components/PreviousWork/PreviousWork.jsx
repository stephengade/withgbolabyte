import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Classes from "./PreviousWork.module.css";
import Project from "./Projects";
import Link from "next/link";

// Images
import Agmedia from "../../public/Agconmedia.png";
import Realty9ja from "../../public/Realty9ja.png";
// import Healthfeed from "../../public/Healthfp.png";
// import Feroxia from "../../public/feroxia.png";
// import Unito from "../../public/universal_turnover.png";

function PreviousWork() {
  return (
    <section className={`${Classes.PreviousWork} container-fluid`} id="work">
      <div className={`${Classes.PreviousWork_row} row`}>
        <h2
          className="heading"
          style={{
            fontFamily: "var(--dm)",
            textAlign: "center",
            marginBottom: "2rem",
            fontSize: "3rem",
          }}
        >
          Some Work
        </h2>

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

        {/* CTA */}

        <div className={`${Classes.Previous_work_cta} text-center`}>
          <button>
            <Link href="/work">
              <a>Check More</a>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default PreviousWork;
