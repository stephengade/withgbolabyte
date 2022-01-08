import React from "react";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";

function NotFound() {
  return (
    <>
      <Head>
        <html lang="en" />

        <title>Opps! Page Not Found - Gbolabyte</title>
        <meta
          name="description"
          content="Gbolabyte is a digital agency that work with brands boost their online visibility, conversion and sales through digital marketing, SEO, Web design, and development."
        />
        <link rel="canonical" href="/" />

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
        <meta property="og:url" content="/" />
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
        <ErrorPage />
      </main>
    </>
  );
}

export default NotFound;
