import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Navbar.module.css";
import Logo from "../../public/gbolabyte_logo.png";
import NavData from "./NavData";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const ShowMenu = () => setNavOpen(!navOpen);

  return (
    <>
      <nav
        className={
          navOpen ? `${styles.navbar} ${styles.bg_dark}` : `${styles.navbar}`
        }
      >
        <div className={styles.navbar_brand}>
          <Link href="/">
            <a>
              {" "}
              <Image
                src={Logo}
                width={50}
                height={50}
                alt="Gbolabyte Digital"
              />
            </a>
          </Link>
        </div>

        {/* Menu Toogler */}

        <div className={styles.navbar_toggle}>
          <span
            onClick={ShowMenu}
            className={
              navOpen
                ? `${styles.toggle_lines} ${styles.opacity}`
                : `${styles.toggle_lines}`
            }
          ></span>
        </div>
      </nav>

      {/* Overlay Menu */}
      <div
        className={
          navOpen ? `${styles.menu} ${styles.active}` : `${styles.menu}`
        }
      >
        <ul className={styles.menu_items}>
          <p className={styles.menu_text}>
            kindly{" "}
            <Link href="mailto:hello@gbolabyte.com">
              <a>send us a mail here</a>
            </Link>
            ...<br></br> Follow us on{" "}
            <Link href="https://www.facebook.com/gbolabyte.digital/">
              <a>Facebook</a>
            </Link>
            ,{" "}
            <Link href="https://www.instagram.com/gbolabyte.digital/">
              <a>Instagram</a>
            </Link>{" "}
            and{" "}
            <Link href="https://twitter.com/gbolabyte_digital">
              <a>Twitter</a>
            </Link>{" "}
          </p>

          {NavData.map((data, index) => {
            return (
              <li key={index} className={data.className}>
                <Link href={data.path}>
                  <a>{data.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
