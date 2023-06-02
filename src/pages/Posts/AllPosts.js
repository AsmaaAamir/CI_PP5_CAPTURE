import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import styles from '../../styles/AllPosts.module.css';

function AllPosts () {
    return (
        <Container className={styles.AllPost}>
         
            <div className={styles.Content}> content </div>
        </Container>
    );
};

export default AllPosts;