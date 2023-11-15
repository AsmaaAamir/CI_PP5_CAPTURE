import React from "react";
import { Container,  Nav, Navbar } from "react-bootstrap";
import logo from "../assets/new_logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
 
const NavBar = () => {
 
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="logo" height="85"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-control="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <Nav.Link exact to="/" className="NavIcon">
                            <i class="fas fa-home">Home</i> 
                            
                        </Nav.Link>
                        <Nav.Link exact to="/feed" className="NavIcon">
                            <i class="fas fa-images">Feed</i>
                        </Nav.Link>
                        <Nav.Link exact to="/addpost" className="NavIcon">
                            <i class="fas fa-plus-square">Add Post</i>
                        </Nav.Link>
                        <Nav.Link exact to="/profile" className="NavIcon">
                            <i class="fas fa-user">Profile</i>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
         
     );
};

export default NavBar;  