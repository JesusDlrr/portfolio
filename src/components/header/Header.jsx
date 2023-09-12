import React from "react";
import styles from './Header.module.css';
import { useLocation } from "react-router-dom";

export const Header = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/').splice(1);

    console.log(paths);

    return(
        <>
            <header className={styles.page_header}>
                <div className={styles.gradient}>
                    <div className={styles.section_info}>
                        <h1>Portfolio</h1>
                        {
                            paths.map((e)=>{
                                return(
                                    <>
                                        <span className={styles.section_marker}><div className={styles.arrow}></div></span>
                                        <h1>{e}</h1>
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
            </header>
        </>
    );
}