import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/new_logo.png';
import { Card, Container } from "react-bootstrap";
import styles from '../styles/WelcomePage.module.css';

/* Welcome page wih option ot sign in and sign up */

const Welcomepage = () => {
    return (
        <div className={styles.Container}>
            <div className="row">
                <div className={styles.Logo}>
                    <img src={logo} alt="capture logo" height="100"/>
                </div>
                <div className="col-md-8 offset=md-2 Text">
                    <h1 className="text-center">Capture</h1>
                    <p className="text-center">
                        Welcome!
                        <br/>
                        Capture the moments and share it with your loved one and the world. Become the next inspiration for someone..!
                        <br/>
                    </p>
                    <NavLink  to="/signin" >
                        <button className={styles.WelcomeButton} >Sign In </button>
                    </NavLink>
                    <p> or </p>
                    <NavLink to="/signup" >
                        <button className={styles.WelcomeButton}>Sign Up </button>
                    </NavLink>
                </div>
            </div>
        </div>
      
    );
};


export default Welcomepage;