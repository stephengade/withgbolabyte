import React from "react";
import design from "./ErrorPage.module.css";
// import Image from "next/image";
import Link from "next/link";
// import ErrorPhoto from "../../public/Error404.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function ErrorPage() {
  return (
    <div className={`${design.error_page} container-fluid`}>
      <div className="row">
        <div className={`${design.error_text} col-12 col-xl-6 col-lg-6`}>
          <h2 className={design.error_title}>Error 404</h2>
          <p className={design.error_info}>
            We&#39;re sorry, it seems the page is not found... 😥
          </p>
          <button className={design.error_btn}>
            <Link href="/">
              <a>← Back to the homepage</a>
            </Link>
          </button>
        </div>

        <div
          className={`${design.error_page_image} col-12 col-xl-6 col-lg-6`}
        ></div>
      </div>
    </div>
  );
}

export default ErrorPage;
