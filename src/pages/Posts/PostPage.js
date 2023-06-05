import React, { useEffect, useState} from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import styles from "../../styles/PostPage.module.css";
function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState ({ result: []});
    
    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: post }] = await Promise.all ([
                    axiosReq.get('/posts/${id}'),
                ]);
                setPost({ result: [post ]});
                console.log(post);
            } catch(err) {
                console.log(err);
            }
        }; handleMount();
    }, [id]);

    return (
    <Row className="h-100">
        <Col className="py-2 p-0 p-lg" lg={8}>
            <p> Popular profile for mobile</p>
            <Post {...post.result[0]} setPosts={setPost} postPage/>
            <Container className={""}>Comments</Container>
        </Col> 
    </Row>
    );
} 

export default PostPage;
