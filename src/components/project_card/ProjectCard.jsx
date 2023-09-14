import React from "react";
import styles from './ProjectCard.module.css';
import HTMLReactParser from "html-react-parser";

export const ProjectCard = ({title, description, date, image, link, language}) => {
    const project_date = new Date();
    project_date.setMonth(date.month-1);

    return(
        <article className={styles.project_card}>
            <header>
                <a className={styles.project_title} href={link} target="_blank">{title}</a>
                <div className={styles.project_info}>
                    <p className={styles.header_tag}>Realease: {project_date.toLocaleString("en-US", {month: "short"})} {date.day+getOrdinal(date.day)}, {date.year}</p>
                    <p className={styles.header_tag}>Written on: <a href="#">{language}</a></p>
                </div>
            </header>
            <div className={styles.card_body}>
              <img className={styles.thumbnail} src={"./images/"+image}/>
              <p className={styles.project_description}>{HTMLReactParser(description)}</p>
            </div>
        </article>
    );
}

function getOrdinal(n) {
    let ord = 'th';
  
    if (n % 10 == 1 && n % 100 != 11)
    {
      ord = 'st';
    }
    else if (n % 10 == 2 && n % 100 != 12)
    {
      ord = 'nd';
    }
    else if (n % 10 == 3 && n % 100 != 13)
    {
      ord = 'rd';
    }
  
    return ord;
  }