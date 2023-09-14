import React from "react";
import styles from './PageDescription.module.css';

export const PageDescription = ({description}) => {
    return(
        <>
            <div className={styles.description_container}>
                {description}
                {/* <span className={styles.blc}></span> */}
            </div>
        </>
    );
}