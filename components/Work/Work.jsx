import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Allwork from "./Allwork";
import classes from "./Work.module.css";
import { AboutCTA } from "../About/About";

function Work() {
  return (
    <>
      <div className={`${classes.work_container} container-fluid`}>
        <div className={classes.work_wrapper}>
          <p className={classes.work_info}>Our recent projects so far...</p>
          <h2 className={classes.work_text}>Portfolio</h2>
        </div>
      </div>

      <Allwork />

      <div className="row">
        
        <AboutCTA
          link="/contact"
          text="Contact Us"
          info=" Are you ready to work with an agency that work as hard to earn your
          trust as they do to earn you results?"
        />
      </div>
    </>
  );
}

export default Work;
