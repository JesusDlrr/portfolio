import React from "react";
import styles from './Tool.module.css';

export const Tool = ({name, logo}) => {
    return(
        <>
            <div className={styles.w}>
                <img src={logo} alt="" />
                {name}
            </div>
        </>
    );
}