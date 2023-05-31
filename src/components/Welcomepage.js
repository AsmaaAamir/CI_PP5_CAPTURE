import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg'

/* Welcome page wih option ot sign in and sign up */

const Welcome = () => {
    return (
        <Card className="bg-dark text-white">
            <Card.ImgOverlay>
                <Card.Title>
                    <h1>Capture</h1>
                </Card.Title>
                <Card.Text>
                    Welcome to our community!
                    <br/>
                    Capture the moments and share it with your loved one and the world. Become the next inspiration for someone..!
                    <br/>
                    <button>Sign In </button>
                    <p> or </p>
                    <button>Sign Up </button>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
};


export default Welcome;