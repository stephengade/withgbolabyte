import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Work from "../components/Work/Work";
import Footer from "../components/Footer/Footer";

function about() {
  return (
    <div className={styles.About_us}>
      <Head>
        <html lang="en" />
        <title>Previous Work - About Gbolabyte</title>
        <meta
          name="description"
          content="Gbolabyte is a digital agency that work with brands boost their online visibility, conversion and sales through digital marketing, SEO, Web design, and development."
        />
        <link rel="canonical" href="/" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Gbolabyte: Digital Marketing, Web Design &amp; Web Development"
        />
        <meta
          property="og:description"
          content="Gbolabyte is a digital agency that work with brands boost their online visibility, conversion and sales through digital marketing, SEO, Web design, and development."
        />
        <meta property="og:url" content="https://gbolabyte.com/" />
        <meta property="og:site_name" content="Gbolabyte" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Gbolabyte: Digital Marketing, Web Design &amp; Web Development"
        />
        <meta
          name="twitter:description"
          content="Gbolabyte is a digital agency that work with brands boost their online visibility, conversion and sales through digital marketing, SEO, Web design, and development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Work />
        <Footer />
      </main>
    </div>
  );
}

export default about;
