import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import heroStyles from "./Hero.module.css";

const MyVideo =
  "http://www.gbolamedia.com/wp-content/uploads/2021/12/vid-01.mp4";

const VidStyles = {
  width: "100%",
  marginTop: "5rem",
};

function Hero() {
  return (
    <header className={heroStyles.hero}>
      <h2 className={heroStyles.hero_title}>
        Creative Digital Agency, <br/>Better{" "}
        <span className={heroStyles.highlighted}>Digital Experiences</span>.
      </h2>

      <p className={heroStyles.hero_info}>
        We create impressive digital experiences by using the best practices to
        design and build websites, and brainstorm and launch digital marketing
        strategies that drives results.
      </p>

      <div className={heroStyles.hero_video} style={VidStyles}>
        <video autoPlay loop muted playsInline style={{ width: "100%" }}>
          <source src={MyVideo} type="video/mp4" />
          <source src={MyVideo} type="video/ogg" />
        </video>
      </div>
    </header>
  );
}

export default Hero;
