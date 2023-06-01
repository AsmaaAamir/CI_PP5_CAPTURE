import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/new_logo.png';
import { Card, Container } from "react-bootstrap";
import styles from '../styles/WelcomePage.module.css';

/* Welcome page wih option ot sign in and sign up */

const Welcomepage = () => {
    return (
        <Container className={styles.WelcomeCard}>
            <div className={styles.Card}>
                <div className={styles.Heading}>
                    <img src={logo} alt="capture logo" height="200"/>
                    <h1>Capture</h1>
                </div>
                <div className={styles.Text}>
                    Welcome!
                    <br/>
                    Capture the moments and share it with your loved one and the world. Become the next inspiration for someone..!
                    <br/>
                    <NavLink  to="/signin" >
                        <button className={styles.WelcomeButton} >Sign In </button>
                    </NavLink>
                    <p> or </p>
                    <NavLink to="/signup" >
                        <button className={styles.WelcomeButton}>Sign Up </button>
                    </NavLink>   
                </div>
            </div>
        </Container>
    );
};


export default Welcomepage;

<Card  className={styles.WelcomeCard}>
<Card.ImgOverlay  >
    <Card.Title className={styles.Heading}>
        <img src={logo} alt="capture logo" height="200"/>
        <h1>Capture</h1>
    </Card.Title>
    <Card.Text className={styles.Text}>
        Welcome!
        <br/>
        Capture the moments and share it with your loved one and the world. Become the next inspiration for someone..!
        <br/>
        <NavLink  to="/signin" >
            <button className={styles.WelcomeButton} >Sign In </button>
        </NavLink>
        <p> or </p>
        <NavLink to="/signup" >
            <button className={styles.WelcomeButton}>Sign Up </button>
        </NavLink>
    </Card.Text>
</Card.ImgOverlay>
</Card>