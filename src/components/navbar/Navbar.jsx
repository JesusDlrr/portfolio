import React, { useState } from "react";
import styles from './Navbar.module.css';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const {pathname} = useLocation();
    const [is_expanded, setExpanded] = useState(new Boolean(true));

    return (
        <>
            <nav>
                <span className={styles.toggle_button} onClick={() => {setExpanded(!is_expanded)}}>
                    Site index
                    <svg display={is_expanded ?  "block" : "none"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" /></svg>
                    <svg display={is_expanded ?  "none" : "block"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" /></svg>

                </span>
                <div className={[styles.index_container]} expanded={is_expanded.toString()}>
                    <ul>
                        <li>
                            Index
                        </li>
                        <li>
                            <ul>
                                <li className={pathname == '/home' ? styles.selected : undefined}>
                                    <Link to='/home'>Home page</Link>
                                </li>
                                <li>
                                    My projects
                                    <ul>
                                        <li className={pathname == '/projects/software' ? styles.selected : undefined}>
                                            <Link to='/projects/software'>Software</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={pathname == '/about' ? styles.selected : undefined}>
                                    {/* <Link to='/about'>About</Link> */}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}