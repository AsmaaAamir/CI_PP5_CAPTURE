import React from "react";
import { Nav, Container } from "react-bootstrap";
import logo from "../assets/new_logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

 
function NavBar () {
    return (
        <Container className={styles.NavBar}>
            <div className={styles.NavLogo}>
                <img src={logo} alt="capture logo" height="80"/>
                <h1>Capture</h1>
            <div>
                <NavLink to="/" className={styles.Icon}>
                    <i class="fas fa-home"></i> Home
                </NavLink>
                <NavLink to="/addpost" className={styles.Icon}>
                    <i class="fas fa-plus-circle"></i>
                    Add post
                </NavLink>
                <NavLink to="/profile" className={styles.Icon}>
                    <i class="fas fa-user-circle"></i>
                    Profile
                </NavLink>
                <NavLink  to="/signin"className={styles.Icon}>
                    <i class="fas fa-sign-in-alt"></i>
                    Sign In
                </NavLink>
                <NavLink to="/signup" className={styles.Icon}>
                    <i class="fas fa-user-plus"></i>
                    Sign Up
                </NavLink>
                <NavLink to="/logout" className={styles.Icon}>
                    <i class="fas fa-sign-out-alt"></i>
                    Logout
                </NavLink>
            </div>
        </div>
        </Container>
    );
};


export default NavBar;