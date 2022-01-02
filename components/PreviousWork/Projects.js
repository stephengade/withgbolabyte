import React from "react";
import Link from "next/link";
import Image from "next/image";
import Classes from './PreviousWork.module.css';



function Projects(props) {
  return (
    <div className={`${Classes.PreviousWork_col_1} col-12 col-lg-6 col-xl-6`} style={{backgroundColor : props.bg}}>
      <h2 className={`${Classes.PreviousWork_title}`}>{props.title}</h2>
      <p className={`${Classes.PreviousWork_text}`}>{props.info}</p>

      <p className={`${Classes.PreviousWork_info}`}>{props.description}</p>

      <Link href={props.path}>
        <a className={`${Classes.PreviousWork_btn}`}>Check Website</a>
      </Link>
            
         
      <Image src={props.image} alt={props.title} className={`${Classes.PreviousWork_img}`} height={800}/>
      
    </div>
  );
}

export default Projects;
