import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import styles from "../../styles/SignInUp.module.css";
import { Form, Button, Image, Col, Row, Conatiner, Alert, } from "react-bootstrap";

const SignUpForm = () => {
    const [signUpData, setSignUpData ] = useState ({
        username: "",
        password: "",
        password2: "",
    });
    const  { username, password, password2 } = signData;
    
    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleChange = (e) => {
        setSignUpData({
            ...signUpData, 
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try { 
            await axios.post("/dj-rest-auth-registration/", signUpData);
            history.push("/signin"); 
        } catch (err){
            setErrors(err.response?.data);
        }
    };

    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2" md={6}>
                <Container className={'${appStyles.Content} p-4'}>
                    <h1>Sign Up</h1>
                    <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label className="d-none">Username:</Form.Label>
                        <Form.Control 
                            className={styles.Input}
                            type="text" 
                            placeholder="Username" 
                            name="username"
                            value={username}
                            onChange={handleChange}
                        />
                        {errors.username>map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label className="d-none">Password</Form.Label>
                        <Form.Control 
                        className={styles.Input}
                        type="password" 
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleChange} 
                        />
                    </Form.Group>
                    {errors.password>map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                    <Form.Group controlId="password1">
                        <Form.Label className="d-none"> Confrim Password</Form.Label>
                        <Form.Control 
                        className={styles.Input}
                        type="password1" 
                        placeholder="Confrim Password"
                        name="password1"
                        value={password1}
                        onChange={handleChange} 
                        />
                    </Form.Group>
                    {errors.password1>map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Container>
            </Col>
        </Row>
       





    );
}

export default SignUpForm;