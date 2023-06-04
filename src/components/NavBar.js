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
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    const handleLogOut = async () => {
        try {
            await axios.post("dj-rest-auth-logout/");
            setCurrentUser(null);
        } catch (err){
            // console.log(err);
        }
    };

    const AddPostIcon = (
        <NavLink to="/posts/addpost" className={styles.Icon}>
                <i class="fas fa-plus-circle"></i>
                <span>Add post </span>
        </NavLink>
    );
    
    const loggedInIcons = (
        <>
        <NavLink  to="/feed/" className={styles.Icon}>
                <i class="fas fa-stream"></i>
                <span>Feed </span>
        </NavLink>
        <NavLink  to="/liked"className={styles.Icon}>
                <i class="fas fa-heart"></i>
                <span>Liked </span>
        </NavLink>
        
        <NavLink  to="/"className={styles.Icon} onClick={handleLogOut}>
                <i class="fas fa-sign-out-alt"></i>
                <span>Sign out </span>
        </NavLink>
        <NavLink to={'/profiles/${currentUser?.pofile_id}'} className={styles.Icon} >
            <Avatar src={currentUser?.profile_image} text="Profile" height={40}/>
        </NavLink>
    </> 
    );

    const loggedOutIcons =(
        <>
        <NavLink  to="/signin"className={styles.Icon}>
            <i class="fas fa-sign-in-alt"></i>
            <span>Sign In </span>
        </NavLink>
        <NavLink  to="/signup" className={styles.Icon}>
            <i class="fas fa-user-plus"></i>
            <span>Sign up </span>
        </NavLink>
        </>  
    );

    return (
        <NavBar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="capture logo" height="80"/>  
                </Navbar.Brand>
                {currentUser && AddPostIcon}
                <Navbar.Toggle ref={ref} onclick={() => setExpanded(!expanded)}
                aria-control="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink to="/" className={styles.Icon}>
                            <i class="fas fa-home"></i> 
                            <span>Home</span>
                        </NavLink>
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </NavBar>
    );
};

export default NavBar;