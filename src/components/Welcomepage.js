import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg'
import { Card, button } from "react-bootstrap";

/* Welcome page wih option ot sign in and sign up */

const Welcomepage = () => {
    return (
        <Card className="bg-dark text-white">
            <Card.ImgOverlay>
                <Card.Title>
                    <img src={logo} alt="capture logo" />
                    <h1>Capture</h1>
                </Card.Title>
                <Card.Text>
                    Welcome to our community!
                    <br/>
                    Capture the moments and share it with your loved one and the world. Become the next inspiration for someone..!
                    <br/>
                    <NavLink  to="/signin">
                        <button>Sign In </button>
                    </NavLink>
                    <p> or </p>
                    <NavLink to="/signup">
                        <button>Sign Up </button>
                    </NavLink>
                
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
};


export default Welcomepage;