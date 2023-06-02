import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import styles from '../styles/Home.module.css';

function Home () {
    return (
        <Container className={styles.HomePage}>
            <div className={styles.Navbarside}> <NavBar /> </div>
            <div className={styles.Content}> content </div>
        </Container>
    );
};

export default Home;