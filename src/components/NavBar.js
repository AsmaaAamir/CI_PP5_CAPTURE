import React from "react";
import { Container } from "react-bootstrap";
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
                    <i class="fas fa-home"></i><span>Home</span>
                </NavLink>
                <NavLink to="/addpost" className={styles.Icon}>
                    <i class="fas fa-plus-circle"></i><span> Add post</span>
                   
                </NavLink>
                <NavLink to="/profile" className={styles.Icon}>
                    <i class="fas fa-user-circle"></i><span>Profile</span>
                    
                </NavLink>
                <NavLink  to="/signin"className={styles.Icon}>
                    <i class="fas fa-sign-in-alt"></i><span>Sign In</span>
                    
                </NavLink>
                <NavLink to="/signup" className={styles.Icon}>
                    <i class="fas fa-user-plus"></i><span>Sign Up</span>
                    
                </NavLink>
                <NavLink to="/logout" className={styles.Icon}>
                    <i class="fas fa-sign-out-alt"></i><span>Logout</span>
                    
                </NavLink>
            </div>
        </div>
        </Container>
    );
};


export default NavBar;