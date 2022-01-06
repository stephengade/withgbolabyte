import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

function about() {
  return (
    <div className={styles.About_us}>
      <Head>
        <title>Who Are We - About Gbolabyte</title>
        <meta
          name="description"
          content="Gbolabyte is a digital agency that work with brands boost their online visibility, conversion and sales through digital marketing, SEO, Web design, and development."
        />
        <link rel="canonical" href="https://gbolabyte.com/" />
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
        <About />
        <Footer />
      </main>
    </div>
  );
}

export default about;
