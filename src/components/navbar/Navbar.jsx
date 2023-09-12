import React from "react";
import styles from './Navbar.module.css';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

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
                            <li className={pathname == '/' ? styles.selected : undefined}>
                                <Link to='/'>Home page</Link>
                            </li>
                            <li>
                                My projects
                                <ul>
                                    <li className={pathname == '/projects/software' ? styles.selected : undefined}>
                                        <Link to='/projects/software'>Software</Link>
                                    </li>
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