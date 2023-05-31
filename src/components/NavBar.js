import React from "react";
import { Nav, Container } from "react-bootstrap";
import logo from "../assets/new_logo.png";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
    return (
        <Container className={styles.NavLink}>
            <div className="NavLogo">
                <img src={logo} alt="capture logo" height="50"/>
                <h1>Capture</h1>
            </div>
            <div >
                <Nav.Link className={styles.Icon}>
                    <i class="fas fa-home"></i>
                    Home
                </Nav.Link>
                <Nav.Link className={styles.Icon}>
                    <i class="fas fa-rss"></i>
                    Explore
                </Nav.Link>
                <Nav.Link className={styles.Icon}>
                    <i class="fas fa-plus-circle"></i>
                    Add post
                    </Nav.Link>
                <Nav.Link className={styles.Icon}>
                    <i class="fas fa-user-circle"></i>
                    Profile
                </Nav.Link>
                <Nav.Link className={styles.Icon}>
                    <i class="fas fa-sign-in-alt"></i>
                    Sign In
                </Nav.Link>
                <Nav.Link className={styles.Icon}>
                    <i class="fas fa-user-plus"></i>
                    Sign Up
                </Nav.Link>
            </div>
        </Container>
    );
};


export default NavBar;