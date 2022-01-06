import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Classes from "./Services.module.css";




function Services() {
  return (
    <section className={`${Classes.service_section} container-fluid`} style={{position: "relative"}}>
     

      <p className={Classes.service_info}>What We Do</p>

      <h3 className={Classes.service_heading}>Our Services</h3>

      <div className={`${Classes.service_row} row`}>
        <div className={`${Classes.service_col} col-md-4`}>
          <h2 className={Classes.service_title}>Design & Development</h2>

          <p className={Classes.service_list}>UI/UX Design</p>
          <p className={Classes.service_list}>CMS (WordPress, Shopify & Wix)</p>
          <p className={Classes.service_list}>Frontend & Backend Development</p>
          <p className={Classes.service_list}>Website Maintenanace</p>
        </div>

        <div className={`${Classes.service_col} col-md-4`}>
          <h2 className={Classes.service_title}>Digital Marketing</h2>
          <p className={Classes.service_list}>Search Engine Optimization, SEO</p>
          <p className={Classes.service_list}>Social Media Advertising</p>
          <p className={Classes.service_list}>Google AdWords</p>
          <p className={Classes.service_list}>Clickfunnels & Groovefunnel</p>
        </div>

        <div className={`${Classes.service_col} col-md-4`}>
          <h2 className={Classes.service_title}>Creative</h2>
          <p className={Classes.service_list}>Content Writing</p>
          <p className={Classes.service_list}>Coaching / Mentoring</p>
          <p className={Classes.service_list}>Partnership</p>
          <p className={Classes.service_list}>Consulting Services</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
