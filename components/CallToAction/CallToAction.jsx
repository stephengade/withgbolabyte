import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Design from "./CallToAction.module.css";
import Link from "next/link";
import Image from 'next/image';
import CTAImage from "../../public/chat-img.svg";

function CallToAction() {
  return (
    <section className={`${Design.cta_section} container-fluid`}>
      <div className={`${Design.cta_row} row`}>
      <div className={`${Design.cta_col_2} col-12 col-lg-6 col-xl-6`}>
            <Image src={CTAImage} alt="Contact Gbolabyte" className="img img-fluid"/>
        </div>


        <div className={`${Design.cta_col_1} col-12 col-lg-6 col-xl-6`}>
          <h2 className={`${Design.cta_title}`}>Want to Grow Your Business?</h2>

          <p className={`${Design.cta_text}`}>
            Fine, we will also like to work with you for more impact and growth.
          </p>

          <button className={Design.cta_btn}>
            <Link href="/contact">
              <a>Let&#39;s Talk!</a>
            </Link>
          </button>
        </div>

        
      </div>
    </section>
  );
}

export default CallToAction;
