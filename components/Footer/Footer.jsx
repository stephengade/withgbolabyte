import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Design from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import footerLogo from "../../public/gbolabyte_logo.png";
import NavData from "../Navbar/NavData";

function Footer() {
  return (
    <footer className={`${Design.footer_container} container-fluid`}>
      <div className={`${Design.footer_row_1} row`}>
        <div className={`${Design.footer_col_1} col-12 col-lg-6 col-xl-6`}>
          <Image src={footerLogo} alt="Gbolabyte" className="img img-fluid" />
        </div>

        <div className={`${Design.footer_col_2} col-12 col-lg-6 col-xl-6`}>
          <p className={`${Design.footer_text}`}>
            Gbolabyte is a digital agency that collaborates with brands to
            design, build and optimize websites for customers & search engines.
            We also help with other services such as digital marketing
            strategies that converts.
          </p>
        </div>
      </div>

      {/* ROW 2 */}

      <div className={`${Design.footer_row_2} row`}>
        <div className={`${Design.footer_follow} col-6`}>
          <h2 className={`${Design.footer_follow_title}`}>Connect with us</h2>
        </div>

        <div className={`${Design.footer_follow_text} col-6`}>
          <p className={`${Design.footer_follow_text_p}`}>
            Ping us at{" "}
            <a href="mailto:hello@gbolabyte.com">hello@gbolabyte.com</a> or
            follow us on{" "}
            <Link href="https://www.twitter.com/gbolabyte">
              <a>Twitter</a>
            </Link>
            ,{" "}
            <Link href="https://www.instagram.com/gbolabyte">
              <a>Instagram</a>
            </Link>{" "}
            and{" "}
            <Link href="https://www.facebook.com/gbolabyte">
              <a>Facebook</a>
            </Link>.
          </p>

          {NavData.map((item, index) => (
            <p key={index} className={Design.footer_link}>
              <Link href={item.path}>
                <a>{item.title}</a>
              </Link>
            </p>
          ))}
        </div>
      </div>

      {/* ROW 3 */}

      <div className={`${Design.footer_row_3} row`}>
        <div className={`${Design.footer_col_1} col-12`}>
          <p className={`${Design.footer_copyright} text-center`}>
            © {new Date().getFullYear()} Gbolabyte Digital Agency. All Rights Reserved.
            </p>
        </div>

        </div>
    </footer>
  );
}

export default Footer;
