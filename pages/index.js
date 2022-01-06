import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import MainBody from "../components/MainBody/MainBody";
import Services from "../components/Services/Services";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";
import PreviousWork from "../components/PreviousWork/PreviousWork";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <html lang="en" />
        <title>
          Gbolabyte: Digital Marketing, Web Design &amp; Web Development
        </title>
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
        <Hero />
        <MainBody />
        <Services />
        <CallToAction />
        <PreviousWork />
        <Footer />
      </main>
    </div>
  );
}
