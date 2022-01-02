import React from "react";
import Image from "next/image";
import style from "./Preloader.module.css";
import Logo from "../../public/gbolabyte_logo.png";

function Preloader(props) {
  return (
    <div className={props.loading ? style.container : style.none}>
      <div className={style.wrapper}>
        <div className={`${style.circle} ${style.circle6} ${style.c61}`}></div>
        <div className={`${style.circle} ${style.circle6} ${style.c62}`}></div>
        <div className={`${style.circle} ${style.circle6} ${style.c63}`}></div>
        <div className={`${style.circle} ${style.circle6} ${style.c64}`}></div>
        <Image
          alt="Gbolabyte Preloader"
          className={`${style.circle} ${style.c65}`}
          src={Logo}
          width={50}
          height={50}
        />
      </div>
    </div>
  );
}

export default Preloader;
