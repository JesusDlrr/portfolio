import React from "react";
import styles from './Navbar.module.css';
import { useLocation } from "react-router-dom";

export const Navbar = () => {
    const {pathname} = useLocation();

    return (
        <>
            <nav>
                <ul>
                    <li>
                        Index
                    </li>
                    <li>
                        <ul>
                            <li className={pathname == '/' ? styles.selected : undefined}><a href="/portfolio">Home page</a></li>
                            <li>
                                My projects
                                <ul>
                                    <li className={pathname == '/projects/software' ? styles.selected : undefined}><a href="/portfolio/projects/software">Software</a></li>
                                    {/* <li className={pathname == '/projects/games' ? styles.selected : undefined}><a href="/projects/games">Games</a></li> */}
                                    {/* <li className={pathname == '/projects/music' ? styles.selected : undefined}><a href="/projects/music">Music</a></li> */}
                                </ul>
                            </li>
                            <li className={pathname == '/about' ? styles.selected : undefined}><a href="/portfolio/about">About me</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    );
}