import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../styles/WelcomePage.module.css';
import welcome from '../assets/p5-welcomepage.png';

/* Welcome page wih option to sign in and sign up */

const Welcomepage = () => {
    return (
        <div className={styles.Container}>
           <div className="row">
                <div class="col-md-8">
                    <img class="img-fluid" src={welcome}/>
                </div>
                <div class="col-md-4">
                    <h1>Welcome</h1>
                    <p>
                        Capture the moments and share it with your loved one and the world. Become the next inspiration for someone..!
                    </p>
                    <div className={styles.WelcomeButton}>
                        <NavLink exact to="/signin" >
                            <button className={styles.WelcomeButton1}>Sign In </button>
                        </NavLink>
                        <NavLink exact to="/signup" >
                            <button className={styles.WelcomeButton2}>Sign Up </button>
                        </NavLink>
                    </div>
                </div>
           </div>
        </div>
    );
};


export default Welcomepage;
