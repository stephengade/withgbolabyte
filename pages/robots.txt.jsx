import React from "react";

const BASE_ROOT = "http://localhost:3000";

const robotsTxt = `User-agent: * 
Disallow: 
sitemap: ${BASE_ROOT}/sitemap.xml`;

export default class Robots extends React.Component {
  static getInitialProps({ res }) {
    res.setHeader("Content-Type", "text/plain");
    res.write(robotsTxt);
    res.end();
  }
}
